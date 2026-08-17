/* ═══════════════════════════════════════════════════════════════════════════
   RENDER — db.js içeriğini HTML'e yazar
   ───────────────────────────────────────────────────────────────────────────
   Bu dosyayı düzenlemenize gerek yok. İçerik değişiklikleri js/db.js'te yapılır.

   HTML'de kullanılan bağlama nitelikleri:
     data-db="hero.metin"                       → elemanın yazısı
     data-db-html="hero.baslik"                 → yazı + <em> gibi etiketler
     data-db-attr="href:iletisim.waLink|src:x"  → nitelik yazar (| ile ayrılır)
     data-db-list="odalar.liste"                → <template>'i her kayıt için klonlar
       + data-db-tpl="tpl-oda"
     data-db-if="rozet"                         → değer boşsa elemanı gizler

   Liste şablonlarının içinde yollar KAYDA GÖRELİDİR. Genel bir değere ulaşmak
   için "$." ön ekini kullanın:  data-db-attr="href:$.iletisim.waLink"
   Ayrıca $index, $sira ("01"), $gecikme ve $deger özel anahtarları vardır.

   KURAL: db.js'te bir anahtar yoksa HTML'deki hazır yazıya DOKUNULMAZ.
   Böylece db.js bozulsa bile site ayakta kalır ve arama motorları içeriği görür.
   ═══════════════════════════════════════════════════════════════════════════ */

(function (w, d) {
  'use strict';

  var VERI = w.SITE || null;

  /* ── Yol çözücü:  get(obj, "a.b.0.c") ───────────────────────────────── */
  function get(kaynak, yol) {
    if (!kaynak || !yol) return undefined;
    var parcalar = String(yol).split('.');
    var deger = kaynak;
    for (var i = 0; i < parcalar.length; i++) {
      if (deger === null || deger === undefined) return undefined;
      deger = deger[parcalar[i]];
    }
    return deger;
  }

  /* "$." ön eki genel VERI'den, diğerleri içinde bulunulan kapsamdan okur */
  function coz(kapsam, yol) {
    yol = String(yol).trim();
    if (yol.indexOf('$.') === 0) return get(VERI, yol.slice(2));
    return get(kapsam, yol);
  }

  /* ── Tek bir elemanın bağlarını uygula ──────────────────────────────── */
  function dugumuIsle(el, kapsam) {
    var yol, deger;

    yol = el.getAttribute('data-db-if');
    if (yol) {
      deger = coz(kapsam, yol);
      if (deger !== undefined) {
        var bos = !deger || (Array.isArray(deger) && deger.length === 0);
        el.hidden = bos;
      }
    }

    yol = el.getAttribute('data-db');
    if (yol) {
      deger = coz(kapsam, yol);
      if (deger !== undefined && deger !== null) el.textContent = deger;
    }

    yol = el.getAttribute('data-db-html');
    if (yol) {
      deger = coz(kapsam, yol);
      if (deger !== undefined && deger !== null) el.innerHTML = deger;
    }

    yol = el.getAttribute('data-db-attr');
    if (yol) {
      yol.split('|').forEach(function (cift) {
        var ayrac = cift.indexOf(':');
        if (ayrac < 1) return;
        var ad = cift.slice(0, ayrac).trim();
        var v = coz(kapsam, cift.slice(ayrac + 1));
        if (v === undefined || v === null || v === '') return;
        el.setAttribute(ad, v);
      });
    }
  }

  /* ── Liste kaydı için kapsam nesnesi ────────────────────────────────── */
  function kapsamOlustur(kayit, sira) {
    var temel = (kayit !== null && typeof kayit === 'object') ? kayit : { $deger: kayit };
    var kapsam = Object.create(temel);     // kaydın alanları prototip üzerinden görünür
    kapsam.$index = sira;
    kapsam.$sira = (sira < 9 ? '0' : '') + (sira + 1);
    kapsam.$gecikme = ((sira % 3) * 110) + 'ms';
    kapsam.$gecikmeStil = '--acilim-gecikme:' + kapsam.$gecikme;
    if (kapsam.$deger === undefined) kapsam.$deger = kayit;
    return kapsam;
  }

  /* ── Liste konteynerini <template> ile doldur ───────────────────────── */
  function listeyiDoldur(kap, kapsam, yol) {
    var dizi = coz(kapsam, yol);
    if (!Array.isArray(dizi) || dizi.length === 0) return;   // varsayılan HTML kalsın

    var tplId = kap.getAttribute('data-db-tpl');
    var tpl = tplId ? d.getElementById(tplId) : null;
    if (!tpl || !tpl.content) return;

    var parca = d.createDocumentFragment();

    dizi.forEach(function (kayit, i) {
      var kayitKapsam = kapsamOlustur(kayit, i);
      var klon = tpl.content.cloneNode(true);
      var cocuk = klon.firstElementChild;
      while (cocuk) {
        gez(cocuk, kayitKapsam);
        cocuk = cocuk.nextElementSibling;
      }
      parca.appendChild(klon);
    });

    kap.textContent = '';
    kap.appendChild(parca);
  }

  /* ── Ağaç gezintisi ─────────────────────────────────────────────────── */
  function gez(el, kapsam) {
    dugumuIsle(el, kapsam);

    var listeYolu = el.getAttribute('data-db-list');
    if (listeYolu) {
      listeyiDoldur(el, kapsam, listeYolu);
      return;                       // klonlar kendi kapsamlarıyla zaten işlendi
    }

    var cocuk = el.firstElementChild;
    while (cocuk) {
      var sonraki = cocuk.nextElementSibling;
      if (cocuk.tagName !== 'TEMPLATE') gez(cocuk, kapsam);
      cocuk = sonraki;
    }
  }

  /* ── Dışa açılan giriş noktası ──────────────────────────────────────── */
  function hydrate(kok) {
    if (!VERI) return;
    kok = kok || d.body;
    if (kok.nodeType === 11 || kok === d) {          // fragment / document
      var c = (kok.body || kok).firstElementChild;
      while (c) { if (c.tagName !== 'TEMPLATE') gez(c, VERI); c = c.nextElementSibling; }
      return;
    }
    gez(kok, VERI);
  }

  /* ═══ Türetilmiş alanlar ═══════════════════════════════════════════════
     db.js'te operatörün elle yazmasına gerek olmayan, ham veriden hesaplanan
     alanlar burada üretilir (WhatsApp linki, ikon referansı, yıldız oranı…).
     ═══════════════════════════════════════════════════════════════════════ */
  function turet() {
    if (!VERI) return;

    var ilt = VERI.iletisim = VERI.iletisim || {};
    var no = String(ilt.whatsapp || '').replace(/[^0-9]/g, '');

    function wa(mesaj) {
      if (!no) return '#';
      return 'https://wa.me/' + no + (mesaj ? '?text=' + encodeURIComponent(mesaj) : '');
    }

    ilt.waLink = wa(ilt.whatsappMesaj);
    ilt.telLink = 'tel:' + String(ilt.telefonHam || ilt.telefon || '').replace(/[^0-9+]/g, '');
    ilt.epostaLink = ilt.eposta ? 'mailto:' + ilt.eposta : '#';

    /* İkon adını sprite referansına çevir: "wifi" → "#ikon-wifi" */
    function ikonla(kayit) {
      if (kayit && kayit.ikon) kayit.ikonHref = '#ikon-' + kayit.ikon;
    }
    (VERI.guvenRozetleri || []).forEach(ikonla);
    get(VERI, 'olanaklar.liste') && VERI.olanaklar.liste.forEach(ikonla);
    get(VERI, 'konum.yakinlar') && VERI.konum.yakinlar.forEach(ikonla);
    (VERI.sosyal || []).forEach(ikonla);

    /* Hero slaytları — ilki öncelikli yüklenir, diğerleri tembel */
    (get(VERI, 'hero.gorseller') || []).forEach(function (g, i) {
      g.yukleme = i === 0 ? 'eager' : 'lazy';
      g.oncelik = i === 0 ? 'high' : 'auto';
    });

    /* Her oda için o odanın adını içeren WhatsApp mesajı */
    (get(VERI, 'odalar.liste') || []).forEach(function (oda) {
      oda.waLink = wa('Merhaba, ' + (oda.ad || 'odalarınız') + ' hakkında bilgi almak istiyorum.');
    });

    /* Yorum puanını yıldız dolgu oranına çevir (4 → "%80") */
    (get(VERI, 'yorumlar.liste') || []).forEach(function (y) {
      var p = Number(y.puan);
      if (!isFinite(p)) p = 5;
      y.yildizStil = 'width:' + (Math.max(0, Math.min(5, p)) / 5 * 100) + '%';
      y.puanEtiket = p + ' / 5 puan';
    });

    /* Telif satırı */
    VERI.footer = VERI.footer || {};
    VERI.footer.telifSatiri = '© ' + new Date().getFullYear() + ' ' +
      (VERI.footer.telif || (VERI.marka && VERI.marka.ad) || '');
  }

  /* ── <head> içindeki meta etiketleri ────────────────────────────────── */
  function metaYaz() {
    if (!VERI || !VERI.meta) return;
    var m = VERI.meta;

    if (m.baslik) d.title = m.baslik;

    function ayarla(secici, deger) {
      if (!deger) return;
      var el = d.querySelector(secici);
      if (el) el.setAttribute('content', deger);
    }
    ayarla('meta[name="description"]', m.aciklama);
    ayarla('meta[property="og:title"]', m.baslik);
    ayarla('meta[property="og:description"]', m.aciklama);
    ayarla('meta[property="og:image"]', m.ogGorsel);
    ayarla('meta[property="og:url"]', m.site);
    ayarla('meta[name="twitter:title"]', m.baslik);
    ayarla('meta[name="twitter:description"]', m.aciklama);
    ayarla('meta[name="twitter:image"]', m.ogGorsel);
  }

  /* ── Google için yapısal veri ───────────────────────────────────────── */
  function jsonLd() {
    if (!VERI) return;
    var ilt = VERI.iletisim || {};
    var veri = {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: (VERI.marka || {}).ad,
      description: (VERI.meta || {}).aciklama,
      image: (VERI.meta || {}).ogGorsel,
      url: (VERI.meta || {}).site,
      telephone: ilt.telefonHam,
      email: ilt.eposta,
      address: { '@type': 'PostalAddress', streetAddress: ilt.adres, addressCountry: 'TR' },
      openingHours: 'Mo-Su 09:00-21:00',
      amenityFeature: (get(VERI, 'olanaklar.liste') || []).map(function (o) {
        return { '@type': 'LocationFeatureSpecification', name: o.baslik, value: true };
      })
    };

    var yorumlar = get(VERI, 'yorumlar.liste') || [];
    if (yorumlar.length) {
      var toplam = yorumlar.reduce(function (t, y) { return t + (Number(y.puan) || 0); }, 0);
      veri.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: (toplam / yorumlar.length).toFixed(1),
        reviewCount: yorumlar.length,
        bestRating: 5
      };
    }

    var etiket = d.createElement('script');
    etiket.type = 'application/ld+json';
    etiket.textContent = JSON.stringify(veri);
    d.head.appendChild(etiket);
  }

  /* ── Çalıştır ───────────────────────────────────────────────────────── */
  if (!VERI) {
    console.warn('[Meltem] js/db.js yüklenemedi — sayfa hazır (varsayılan) içerikle gösteriliyor.');
  } else {
    try {
      turet();
      metaYaz();
      hydrate(d.body);
      jsonLd();
      d.documentElement.classList.add('veri-yuklendi');
    } catch (hata) {
      console.error('[Meltem] İçerik yazılırken hata oluştu. db.js dosyasında eksik virgül ' +
                    'veya tırnak olabilir.', hata);
    }
  }

  /* app.js htmx swap'lerinden sonra bunu çağırır */
  w.MeltemRender = { hydrate: hydrate, get: get, veri: VERI };

})(window, document);
