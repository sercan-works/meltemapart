/* ═══════════════════════════════════════════════════════════════════════════
   APP — sayfa davranışları
   ───────────────────────────────────────────────────────────────────────────
   Bu dosyayı düzenlemenize gerek yok. İçerik değişiklikleri js/db.js'te yapılır.

   Çalışma sırası: db.js → render.js → app.js
   (app.js, Swiper/GLightbox'ı ancak içerik HTML'e yazıldıktan sonra başlatır.)
   ═══════════════════════════════════════════════════════════════════════════ */

(function (w, d) {
  'use strict';

  var azHareket = w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gozlemci = null;

  /* Bir davranış hata verirse diğerleri çalışmaya devam etsin */
  function guvenli(ad, islev) {
    try { islev(); }
    catch (e) { console.error('[Meltem] "' + ad + '" başlatılamadı:', e); }
  }

  /* ═══ 1. file:// koruması ═══════════════════════════════════════════════
     Kullanıcı index.html'e çift tıklarsa htmx istekleri tarayıcı güvenliğine
     (CORS) takılır. Bu durumda hx-* niteliklerini söküp bağlantıları
     normal linke çeviriyoruz; buton olanları gizliyoruz.
     ═══════════════════════════════════════════════════════════════════════ */
  function dosyaModu() {
    if (w.location.protocol !== 'file:') return;

    d.querySelectorAll('[hx-get]').forEach(function (el) {
      var adres = el.getAttribute('hx-get');
      el.removeAttribute('hx-get');
      el.removeAttribute('hx-target');
      el.removeAttribute('hx-swap');
      el.removeAttribute('data-modal-ac');

      if (el.tagName === 'A') {
        el.setAttribute('href', adres);
        el.setAttribute('target', '_blank');
        el.setAttribute('rel', 'noopener');
      } else {
        el.hidden = true;        // "Daha fazla fotoğraf" butonu — galeri zaten dolu
      }
    });

    console.info('[Meltem] Sayfa dosyadan açıldı (file://). htmx ile yüklenen ' +
                 'bölümler devre dışı. Tam deneyim için: python3 -m http.server');
  }

  /* ═══ 2. Sabitlenen header ══════════════════════════════════════════════ */
  function header() {
    var el = d.getElementById('header');
    if (!el) return;
    var bekliyor = false;

    function guncelle() {
      el.classList.toggle('sabit', w.scrollY > 1);
      bekliyor = false;
    }
    w.addEventListener('scroll', function () {
      if (bekliyor) return;
      bekliyor = true;
      w.requestAnimationFrame(guncelle);
    }, { passive: true });
    guncelle();
  }

  /* ═══ 3. Mobil çekmece ══════════════════════════════════════════════════ */
  function cekmece() {
    var kutu = d.getElementById('cekmece');
    var perde = d.getElementById('perde');
    var acBtn = d.getElementById('cekmece-ac');
    var kapatBtn = d.getElementById('cekmece-kapat');
    if (!kutu || !perde || !acBtn) return;

    var konum = 0;
    var acikMi = false;
    /* Çekmece açıkken arkadaki içerik hem tab sırasından hem ekran
       okuyucudan çıksın — 40 satırlık focus trap yerine tek satır. */
    var arka = [d.getElementById('header'), d.getElementById('icerik'),
                d.querySelector('.footer'), d.querySelector('.altbar')].filter(Boolean);

    function ac() {
      if (acikMi) return;
      acikMi = true;
      konum = w.scrollY;
      d.body.style.top = -konum + 'px';
      d.body.classList.add('kilitli');
      perde.hidden = false;
      w.requestAnimationFrame(function () { perde.classList.add('acik'); });
      kutu.classList.add('acik');
      kutu.setAttribute('aria-hidden', 'false');
      acBtn.setAttribute('aria-expanded', 'true');
      arka.forEach(function (el) { el.inert = true; });
      if (kapatBtn) kapatBtn.focus();
    }

    function kapat() {
      if (!acikMi) return;
      acikMi = false;
      kutu.classList.remove('acik');
      kutu.setAttribute('aria-hidden', 'true');
      perde.classList.remove('acik');
      acBtn.setAttribute('aria-expanded', 'false');
      arka.forEach(function (el) { el.inert = false; });

      d.body.classList.remove('kilitli');
      d.body.style.top = '';
      w.scrollTo({ top: konum, behavior: 'instant' });

      w.setTimeout(function () { if (!acikMi) perde.hidden = true; }, 320);
      acBtn.focus();
    }

    acBtn.addEventListener('click', ac);
    if (kapatBtn) kapatBtn.addEventListener('click', kapat);
    perde.addEventListener('click', kapat);

    /* Menüden bir bölüme tıklanınca: önce kapat, sonra kaydır.
       Aynı karede yapılırsa kaydırma konumu geri yükleme ile çakışır. */
    kutu.addEventListener('click', function (olay) {
      var bag = olay.target.closest('a[href^="#"]');
      if (!bag) return;
      olay.preventDefault();
      var hedef = d.querySelector(bag.getAttribute('href'));
      kapat();
      if (hedef) w.requestAnimationFrame(function () {
        hedef.scrollIntoView({ behavior: azHareket ? 'auto' : 'smooth', block: 'start' });
      });
    });

    d.addEventListener('keydown', function (olay) {
      if (olay.key === 'Escape' && acikMi) kapat();
    });
  }

  /* ═══ 4. Menüde aktif bölüm ═════════════════════════════════════════════ */
  function menuTakip() {
    var baglar = Array.prototype.slice.call(
      d.querySelectorAll('.header__menu a[href^="#"]'));
    if (!baglar.length) return;

    var eslesme = {};
    var bolumler = [];
    baglar.forEach(function (bag) {
      var el = d.querySelector(bag.getAttribute('href'));
      if (!el) return;
      eslesme[el.id] = bag;
      bolumler.push(el);
    });
    if (!bolumler.length) return;

    var izleyici = new IntersectionObserver(function (girisler) {
      girisler.forEach(function (giris) {
        if (!giris.isIntersecting) return;
        baglar.forEach(function (b) { b.classList.remove('aktif'); });
        var aktif = eslesme[giris.target.id];
        if (aktif) aktif.classList.add('aktif');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    bolumler.forEach(function (el) { izleyici.observe(el); });
  }

  /* ═══ 5. Kaydırdıkça açılan kartlar ═════════════════════════════════════ */
  function acilimKur() {
    if (azHareket || !('IntersectionObserver' in w)) {
      d.querySelectorAll('.acilim').forEach(function (el) { el.classList.add('gorunur'); });
      return;
    }

    gozlemci = new IntersectionObserver(function (girisler, kendisi) {
      girisler.forEach(function (giris) {
        if (!giris.isIntersecting) return;
        giris.target.classList.add('gorunur');
        kendisi.unobserve(giris.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });

    gozle(d.body);
  }

  /* Yeni gelen içeriği de gözleme al (htmx sonrası) */
  function gozle(kok) {
    if (!gozlemci) {
      (kok || d.body).querySelectorAll('.acilim').forEach(function (el) {
        el.classList.add('gorunur');
      });
      return;
    }
    (kok || d.body).querySelectorAll('.acilim:not(.gorunur)').forEach(function (el, i) {
      /* Şablondan gecikme gelmediyse sütuna göre kademeli aç */
      if (!el.style.getPropertyValue('--acilim-gecikme')) {
        el.style.setProperty('--acilim-gecikme', ((i % 3) * 110) + 'ms');
      }
      gozlemci.observe(el);
    });
  }

  /* ═══ 6. Slider'lar ═════════════════════════════════════════════════════ */
  function sliderlar() {
    if (typeof w.Swiper === 'undefined') {
      console.warn('[Meltem] Swiper yüklenemedi — slider yerine ilk görsel gösteriliyor.');
      return;
    }

    if (d.querySelector('.hero-swiper')) {
      new w.Swiper('.hero-swiper', {
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 750,
        autoplay: azHareket ? false : { delay: 5200, disableOnInteraction: false },
        pagination: { el: '.hero-swiper__sayfalama', clickable: true },
        navigation: { prevEl: '#hero-onceki', nextEl: '#hero-sonraki' }
      });
    }

    if (d.querySelector('.yorum-swiper')) {
      new w.Swiper('.yorum-swiper', {
        slidesPerView: 1,
        spaceBetween: 22,
        autoHeight: false,
        pagination: { el: '.yorum-swiper__sayfalama', clickable: true },
        breakpoints: {
          640:  { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }
      });
    }
  }

  /* ═══ 7. Galeri büyütme ═════════════════════════════════════════════════ */
  var isik = null;
  function lightbox() {
    if (typeof w.GLightbox === 'undefined') {
      /* Yedek: karolar zaten <a href="tam-boy"> — tıklayınca görsel açılır */
      console.warn('[Meltem] GLightbox yüklenemedi — fotoğraflar yeni sekmede açılacak.');
      d.querySelectorAll('[data-glightbox]').forEach(function (a) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
      });
      return;
    }
    isik = w.GLightbox({ selector: '[data-glightbox]', loop: true, touchNavigation: true });
  }

  /* ═══ 8. Yukarı çık ═════════════════════════════════════════════════════ */
  function yukariCik() {
    var btn = d.getElementById('yukari');
    var halka = d.getElementById('yukari-ilerleme');
    if (!btn) return;

    var CEVRE = 289;                  // 2 × π × 46
    var bekliyor = false;

    function guncelle() {
      var kaydirilabilir = d.documentElement.scrollHeight - w.innerHeight;
      var oran = kaydirilabilir > 0 ? Math.min(w.scrollY / kaydirilabilir, 1) : 0;
      if (halka) halka.style.strokeDashoffset = CEVRE - (CEVRE * oran);
      btn.classList.toggle('gorunur', w.scrollY > 400);
      bekliyor = false;
    }

    w.addEventListener('scroll', function () {
      if (bekliyor) return;
      bekliyor = true;
      w.requestAnimationFrame(guncelle);
    }, { passive: true });

    btn.addEventListener('click', function () {
      w.scrollTo({ top: 0, behavior: azHareket ? 'auto' : 'smooth' });
    });
    guncelle();
  }

  /* ═══ 9. Harita — tıklayınca yüklenir ═══════════════════════════════════ */
  function harita() {
    var btn = d.getElementById('harita-yukle');
    var kapak = d.getElementById('harita-kapak');
    var cerceve = d.getElementById('harita-frame');
    if (!btn || !cerceve) return;

    btn.addEventListener('click', function () {
      if (cerceve.dataset.src) cerceve.src = cerceve.dataset.src;
      if (kapak) kapak.remove();
    });
  }

  /* ═══ 10. KVKK modalı ═══════════════════════════════════════════════════ */
  function modal() {
    var kutu = d.getElementById('modal');
    if (!kutu) return;
    var sonOdak = null;

    d.addEventListener('click', function (olay) {
      var acan = olay.target.closest('[data-modal-ac]');
      if (acan) {
        olay.preventDefault();
        sonOdak = acan;
        kutu.hidden = false;
        d.body.classList.add('kilitli');
        var kapatBtn = kutu.querySelector('[data-modal-kapat]');
        if (kapatBtn) kapatBtn.focus();
        return;
      }
      if (olay.target.closest('[data-modal-kapat]')) kapat();
    });

    function kapat() {
      if (kutu.hidden) return;
      kutu.hidden = true;
      d.body.classList.remove('kilitli');
      if (sonOdak) sonOdak.focus();
    }

    d.addEventListener('keydown', function (olay) {
      if (olay.key === 'Escape') kapat();
    });
  }

  /* ═══ 11. Bozuk fotoğraf yedeği ═════════════════════════════════════════
     Bir görselin adresi yanlışsa kırık ikon yerine yer tutucu gösterilir.
     "error" olayı balonlanmaz; bu yüzden yakalama (capture) aşamasında dinliyoruz.
     ═══════════════════════════════════════════════════════════════════════ */
  function gorselYedegi() {
    d.addEventListener('error', function (olay) {
      var el = olay.target;
      if (!el || el.tagName !== 'IMG' || el.dataset.yedek) return;
      el.dataset.yedek = '1';
      el.src = 'assets/img/placeholder.svg';
    }, true);
  }

  /* ═══ 12. htmx ile gelen içeriği bağla ══════════════════════════════════ */
  function htmxBagla() {
    d.body.addEventListener('htmx:afterSwap', function (olay) {
      var hedef = olay.detail.target;

      /* Yeni gelen parçayı db.js verisiyle doldur */
      if (w.MeltemRender) w.MeltemRender.hydrate(hedef);

      /* Yeni fotoğraflar lightbox'a katılsın (yeni init DEĞİL — çift listener olur) */
      if (isik) isik.reload();

      /* Açılım animasyonunu yeni kartlara bağla */
      gozle(hedef);

      /* Galeri tamamen yüklendiyse "daha fazla" butonunu kaldır */
      if (hedef.id === 'galeri-devami') {
        var btn = d.getElementById('galeri-daha');
        if (btn) btn.remove();
      }
    });

    d.body.addEventListener('htmx:responseError', function () {
      var govde = d.getElementById('modal-govde');
      if (govde) govde.innerHTML = '<p>İçerik yüklenemedi. Lütfen sayfayı yenileyip tekrar deneyin.</p>';
    });
  }

  /* ═══ Başlat ════════════════════════════════════════════════════════════ */
  guvenli('görsel yedeği', gorselYedegi);
  guvenli('file:// koruması', dosyaModu);
  guvenli('header', header);
  guvenli('çekmece', cekmece);
  guvenli('menü takibi', menuTakip);
  guvenli('açılım', acilimKur);
  guvenli('slider', sliderlar);
  guvenli('lightbox', lightbox);
  guvenli('yukarı çık', yukariCik);
  guvenli('harita', harita);
  guvenli('modal', modal);
  guvenli('htmx', htmxBagla);

  w.MeltemApp = { gozle: gozle };

})(window, document);
