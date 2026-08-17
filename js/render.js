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

  /* ═══ SEO yardımcıları ═════════════════════════════════════════════════ */

  /* Sitenin kök adresi, sonunda / OLMADAN.  "https://ornek.com" */
  function kok() {
    return String(get(VERI, 'meta.site') || '').replace(/\/+$/, '');
  }

  /* Göreli yolu mutlak adrese çevirir:
       "assets/img/1.jpg"  →  "https://ornek.com/assets/img/1.jpg"
     Arama motorları ve sosyal medya göreli yolu çözemez; og:image, canonical
     ve yapısal verideki BÜTÜN adresler mutlak olmak zorundadır. */
  function mutlak(yol) {
    if (!yol) return '';
    yol = String(yol);
    if (/^https?:\/\//i.test(yol)) return yol;           // zaten mutlak
    var k = kok();
    if (!k) return yol;                                   // site adresi girilmemiş
    return k + '/' + yol.replace(/^\/+/, '');
  }

  /* Sayfanın kanonik adresi — sonunda / İLE. Google için
     "https://ornek.com" ve "https://ornek.com/" farklı adreslerdir;
     canonical ile og:url'in birebir aynı yazılması gerekir. */
  function kanonik() {
    var k = kok();
    return k ? k + '/' : '';
  }

  /* ── <head> içindeki meta etiketleri ────────────────────────────────── */
  function metaYaz() {
    if (!VERI || !VERI.meta) return;
    var m = VERI.meta;
    var gorsel = mutlak(m.ogGorsel);
    var adres = kanonik();

    if (m.baslik) d.title = m.baslik;

    function ayarla(secici, deger) {
      if (!deger) return;
      var el = d.querySelector(secici);
      if (el) el.setAttribute('content', deger);
    }
    function baglanti(secici, deger) {
      if (!deger) return;
      var el = d.querySelector(secici);
      if (el) el.setAttribute('href', deger);
    }

    ayarla('meta[name="description"]', m.aciklama);

    ayarla('meta[property="og:title"]', m.baslik);
    ayarla('meta[property="og:description"]', m.aciklama);
    ayarla('meta[property="og:image"]', gorsel);
    ayarla('meta[property="og:image:alt"]', m.ogGorselAlt);
    ayarla('meta[property="og:url"]', adres);
    ayarla('meta[property="og:site_name"]', get(VERI, 'marka.ad'));

    ayarla('meta[name="twitter:title"]', m.baslik);
    ayarla('meta[name="twitter:description"]', m.aciklama);
    ayarla('meta[name="twitter:image"]', gorsel);
    ayarla('meta[name="twitter:image:alt"]', m.ogGorselAlt);

    /* Kanonik adres + dil bildirimi — aynı içeriğin farklı adreslerde
       (www'lu / www'suz, http / https) çift görünmesini engeller. */
    baglanti('link[rel="canonical"]', adres);
    baglanti('link[hreflang="tr"]', adres);
    baglanti('link[hreflang="x-default"]', adres);

    /* Konum sinyalleri — koordinatlar db.js'ten okunur */
    var ilt = VERI.iletisim || {};
    if (isFinite(ilt.enlem) && isFinite(ilt.boylam)) {
      ayarla('meta[name="geo.position"]', ilt.enlem + ';' + ilt.boylam);
      ayarla('meta[name="ICBM"]', ilt.enlem + ', ' + ilt.boylam);
    }
    if (ilt.ilce || ilt.il) {
      ayarla('meta[name="geo.placename"]',
             [ilt.ilce, ilt.il].filter(Boolean).join(', '));
    }
  }

  /* ── Google için yapısal veri (schema.org / JSON-LD) ─────────────────
     index.html'de bu verinin STATİK bir kopyası hazır durur; aşağıdaki kod
     o etiketin içeriğini db.js'teki güncel bilgilerle yeniden yazar.
     Yeni etiket EKLEMEZ — iki farklı yapısal veri bloğu Google'ı şaşırtır.

     Üretilen bloklar:
       WebSite      → site kimliği
       WebPage      → bu sayfa
       ImageObject  → sayfanın ana görseli
       LodgingBusiness → işletme kartı (adres, telefon, konum, olanaklar)
       FAQPage      → S.S.S. bölümündeki soru-cevaplar
     ──────────────────────────────────────────────────────────────────── */
  function jsonLd() {
    if (!VERI) return;

    var ilt   = VERI.iletisim || {};
    var marka = VERI.marka || {};
    var m     = VERI.meta || {};
    var adres = kanonik();

    /* Boş alanları (girilmemiş e-posta, sosyal hesap…) nesneden temizler —
       schema.org'a boş değer göndermek uyarı üretir. */
    function temizle(nesne) {
      Object.keys(nesne).forEach(function (anahtar) {
        var d2 = nesne[anahtar];
        if (d2 === undefined || d2 === null || d2 === '' ||
            (Array.isArray(d2) && d2.length === 0)) delete nesne[anahtar];
      });
      return nesne;
    }

    var kimlikIsletme = adres + '#isletme';
    var kimlikGorsel  = adres + '#anagorsel';

    /* ── Görseller: kapak fotoğrafı + galeri (Google Görseller için) ──── */
    var gorseller = [];
    if (m.ogGorsel) gorseller.push(mutlak(m.ogGorsel));
    (get(VERI, 'galeri.liste') || []).forEach(function (g) {
      var u = mutlak(g.src);
      if (u && gorseller.indexOf(u) === -1) gorseller.push(u);
    });

    /* ── İşletme kartı ────────────────────────────────────────────────── */
    var isletme = temizle({
      '@type': 'LodgingBusiness',
      '@id': kimlikIsletme,
      name: marka.ad,
      alternateName: marka.kisaAd,
      description: m.aciklama,
      slogan: marka.slogan,
      url: adres,
      image: gorseller,
      logo: mutlak(marka.logo),
      telephone: ilt.telefonHam || ilt.telefon,
      email: ilt.eposta,
      address: temizle({
        '@type': 'PostalAddress',
        streetAddress: ilt.sokak || ilt.adres,
        addressLocality: ilt.ilce,
        addressRegion: ilt.il,
        postalCode: ilt.postaKodu,
        addressCountry: ilt.ulkeKodu || 'TR'
      }),
      hasMap: ilt.haritaUrl,
      areaServed: ilt.il ? { '@type': 'City', name: ilt.il } : undefined,
      knowsLanguage: 'tr',
      currenciesAccepted: 'TRY',
      numberOfRooms: marka.daireSayisi,
      petsAllowed: false,
      smokingAllowed: false,
      audience: { '@type': 'Audience', audienceType: 'Kız üniversite öğrencileri' },
      openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
                    'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00'
      }],
      amenityFeature: (get(VERI, 'olanaklar.liste') || []).map(function (o) {
        return { '@type': 'LocationFeatureSpecification', name: o.baslik, value: true };
      }),
      sameAs: (VERI.sosyal || []).map(function (s) { return s.url; }).filter(Boolean)
    });

    /* Koordinatlar — Google Haritalar eşleştirmesi için en güçlü sinyal */
    if (isFinite(ilt.enlem) && isFinite(ilt.boylam)) {
      isletme.geo = {
        '@type': 'GeoCoordinates',
        latitude: Number(ilt.enlem),
        longitude: Number(ilt.boylam)
      };
    }

    /* Puan bilgisi YALNIZCA gerçek yorum varsa yazılır.
       Uydurma puan Google'ın manuel yaptırım sebebidir. */
    var yorumlar = get(VERI, 'yorumlar.liste') || [];
    if (yorumlar.length) {
      var toplam = yorumlar.reduce(function (t, y) { return t + (Number(y.puan) || 0); }, 0);
      isletme.aggregateRating = {
        '@type': 'AggregateRating',
        ratingValue: (toplam / yorumlar.length).toFixed(1),
        reviewCount: yorumlar.length,
        bestRating: 5
      };
    }

    var graf = [
      temizle({
        '@type': 'WebSite',
        '@id': adres + '#website',
        url: adres,
        name: marka.ad,
        inLanguage: 'tr-TR',
        publisher: { '@id': kimlikIsletme }
      }),
      temizle({
        '@type': 'WebPage',
        '@id': adres + '#sayfa',
        url: adres,
        name: m.baslik,
        description: m.aciklama,
        inLanguage: 'tr-TR',
        isPartOf: { '@id': adres + '#website' },
        about: { '@id': kimlikIsletme },
        primaryImageOfPage: { '@id': kimlikGorsel }
      }),
      temizle({
        '@type': 'ImageObject',
        '@id': kimlikGorsel,
        url: mutlak(m.ogGorsel),
        contentUrl: mutlak(m.ogGorsel),
        caption: m.ogGorselAlt
      }),
      isletme
    ];

    /* ── S.S.S. — sorular sayfada görünür olduğu için işaretlenebilir ─── */
    var sorular = get(VERI, 'sss.liste') || [];
    if (sorular.length) {
      graf.push({
        '@type': 'FAQPage',
        '@id': adres + '#sss',
        inLanguage: 'tr-TR',
        isPartOf: { '@id': adres + '#sayfa' },
        mainEntity: sorular.map(function (s) {
          return {
            '@type': 'Question',
            name: s.soru,
            acceptedAnswer: { '@type': 'Answer', text: s.cevap }
          };
        })
      });
    }

    var icerik = JSON.stringify({ '@context': 'https://schema.org', '@graph': graf });

    /* index.html'deki hazır etiketi güncelle; yoksa oluştur. */
    var etiket = d.getElementById('yapisal-veri');
    if (!etiket) {
      etiket = d.createElement('script');
      etiket.type = 'application/ld+json';
      etiket.id = 'yapisal-veri';
      d.head.appendChild(etiket);
    }
    etiket.textContent = icerik;
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
