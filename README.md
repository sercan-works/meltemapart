# Meltem Kız Apart — Tanıtım Sitesi

Tek sayfalık, tamamen statik tanıtım sitesi. Sunucu, veritabanı, panel ve derleme (build) adımı yoktur.
Sitedeki **tüm içerik tek bir dosyadadır: [`js/db.js`](js/db.js)**.

---

## İçeriği nasıl değiştiririm?

1. `js/db.js` dosyasını herhangi bir metin düzenleyiciyle açın (Not Defteri bile olur).
2. Tırnak işaretlerinin **içindeki** yazıyı değiştirin.
3. Kaydedin, tarayıcıda sayfayı yenileyin.

```js
telefon: "0 (352) 123 45 67",        // ← sadece bu yazıyı değiştirin
whatsapp: "905321234567",            // ← + ve boşluk OLMADAN, ülke koduyla
```

**Dikkat:**

- Tırnakları, virgülleri, süslü `{ }` ve köşeli `[ ]` parantezleri silmeyin.
- Bir oda / olanak / soru maddesini tamamen kaldıracaksanız `{ ... }` bloğunun **tamamını**, sonundaki virgülle birlikte silin.
- Değişiklik ekrana yansımıyorsa **Ctrl + Shift + R** (Mac: **Cmd + Shift + R**) ile önbelleği atlayarak yenileyin.
- Bir yazıyı yanlışlıkla silerseniz sayfa boşalmaz; o alan `index.html`'deki hazır metne döner.

### Değiştirdiğinizde nereler güncellenir?

`js/db.js` içindeki tek bir değer birden çok yeri besler. Örneğin `iletisim.whatsapp`:

| Nerede |
|---|
| Üst menüdeki "Yer Ayır" butonu |
| Hero'daki büyük WhatsApp butonu |
| Her oda kartındaki "Bu Oda İçin Bilgi Al" (mesaja oda adı otomatik eklenir) |
| Sağ alttaki yeşil sabit buton |
| Mobildeki alt çubuk |
| Kapanış bölümü ve footer |

Aynı şekilde `marka.ad` başlıkta, logoda, çekmecede, footer'da ve Google'a gönderilen yapısal veride görünür.

---

## Yayına almadan önce yapılacaklar

- [ ] **Fotoğrafları değiştirin.** Şu an geçici örnek görseller (Unsplash) kullanılıyor. Gerçek fotoğrafları `assets/img/` klasörüne atıp `js/db.js`'te yolunu `"assets/img/oda-1.jpg"` şeklinde yazın.
- [ ] **`index.html` içindeki hero ön-yükleme satırını güncelleyin.** `js/db.js > hero.gorseller[0].src` değiştirilirse, `index.html`'in `<head>` kısmındaki `<link rel="preload" as="image" ...>` adresi de elle değiştirilmelidir. (Ön yükleme `<head>`'de olmak zorunda olduğu için içerikten okunamıyor — `db.js` dışında elle güncellenmesi gereken tek yer budur.)
- [ ] **İletişim bilgilerini gerçeğiyle değiştirin:** telefon, WhatsApp, e-posta, adres, harita adresi.
- [ ] **`meta.site` ve `index.html`'deki `<link rel="canonical">` adresini** gerçek alan adınızla değiştirin.
- [ ] **KVKK metnini** (`partials/kvkk.html`) kurumunuzun gerçek süreçlerine göre bir hukuk danışmanına uyarlatın.
- [ ] **Fiyatları ve oda özelliklerini** güncelleyin.
- [ ] `js/db.js` değiştikten sonra `index.html`'in en altındaki `js/db.js?v=1` numarasını `?v=2` yapın. Bu, ziyaretçilerin tarayıcısında eski içeriğin takılı kalmasını engeller.

---

## Nasıl çalıştırırım?

`index.html` dosyasına çift tıklamanız yeterlidir — sayfa eksiksiz açılır.

Ancak `file://` üzerinde tarayıcı güvenliği (CORS) nedeniyle htmx ile yüklenen iki bölüm çalışmaz:
"Daha Fazla Fotoğraf" butonu gizlenir, KVKK metni yeni sekmede açılır. Sayfa bunu kendisi algılar,
hata vermez. Tam deneyim için basit bir yerel sunucu yeterli:

```bash
cd meltemapart
python3 -m http.server 8000
# tarayıcıda: http://localhost:8000
```

## Nasıl yayınlarım?

Klasörü olduğu gibi herhangi bir statik barındırma servisine yükleyin — Netlify, Vercel, GitHub Pages,
Cloudflare Pages veya normal bir cPanel `public_html` klasörü. Kurulum, Node.js, derleme adımı gerekmez.

Barındırma ayarlarınızda mümkünse `js/db.js` için `Cache-Control: no-cache` tanımlayın; böylece
içerik güncellemeleri anında görünür.

---

## Dosya yapısı

```
meltemapart/
├── index.html          Sayfanın iskeleti + ikon sprite + <template> blokları
├── css/
│   ├── tokens.css      Renk, yazı tipi, boşluk, gölge değerleri (genel görünüm)
│   ├── base.css        Sıfırlama, tipografi, düzen yardımcıları
│   ├── components.css  Buton, header, çekmece, sabit butonlar, modal
│   └── sections.css    Hero, odalar, olanaklar, galeri, konum, yorumlar, S.S.S., footer
├── js/
│   ├── db.js           ★ TÜM İÇERİK — düzenlemeniz gereken tek dosya
│   ├── render.js       db.js'i HTML'e yazan motor
│   └── app.js          Menü, slider, galeri, harita, modal davranışları
├── partials/
│   ├── kvkk.html       Aydınlatma metni (htmx ile modala yüklenir)
│   └── galeri-devami.html  Ek fotoğraflar (istenince yüklenir)
└── assets/img/         Logo, favicon, yedek görsel — kendi fotoğraflarınız da buraya
```

### Sitenin renklerini değiştirmek

`css/tokens.css` dosyasının en üstündeki `--renk-*` değerlerini değiştirmeniz yeterlidir;
tüm site (butonlar, ikonlar, gölgeler dahil) otomatik uyum sağlar.

---

## Teknik notlar

**Kullanılan kütüphaneler** (hepsi CDN, sürümleri sabitlenmiş):

| Kütüphane | Görevi |
|---|---|
| [Swiper 11](https://swiperjs.com/) | Hero slider ve yorum karuseli |
| [GLightbox 3](https://biati-digital.github.io/glightbox/) | Galeri fotoğraflarını büyütme |
| [htmx 2](https://htmx.org/) | Galeri devamı ve KVKK metnini istenince yükleme |
| Plus Jakarta Sans | Yazı tipi (Google Fonts) |

**İkonlar** [Lucide](https://lucide.dev/) ikonlarıdır ama kütüphane yüklenmez: kullanılan ~33 ikonun
SVG'si `index.html` içine gömülü bir sprite olarak durur (373 KB yerine ~7 KB, ve `file://` üzerinde
de çalışır). WhatsApp / Instagram / Facebook ikonları [Simple Icons](https://simpleicons.org/)
kaynaklıdır — Lucide'da WhatsApp ikonu bulunmuyor.

**Dayanıklılık.** Site, dört CDN'in tamamı engellense bile kullanılabilir kalır: telefon, WhatsApp,
fiyatlar, odalar ve adres okunabilir; slider tek fotoğrafta durur, galeri fotoğrafları yeni sekmede
açılır. `js/db.js` bozulursa sayfa `index.html`'deki hazır metinlerle ayakta kalır.

**Harita** ziyaretçi "Haritayı Göster" butonuna basana kadar yüklenmez; böylece Google Maps çerezleri
ve ~600 KB'lık yük ilk açılışta gelmez.

**Arama motorları.** Başlık, açıklama, Open Graph etiketleri ve bölüm metinleri `index.html` içinde
hazır durur (`db.js` bunları yalnızca günceller). Odalar, olanaklar, galeri ve S.S.S. gibi liste
içerikleri ise `db.js`'ten JavaScript ile basılır — Google bunları render ederek görür, ancak
JavaScript çalıştırmayan basit tarayıcılar/botlar yalnızca metin bölümlerini okur.
