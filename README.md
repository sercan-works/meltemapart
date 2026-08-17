# Meltempark Kız Apart — Tanıtım Sitesi

Tek sayfalık, tamamen statik tanıtım sitesi. Sunucu, veritabanı, panel ve derleme (build) adımı yoktur.
Sitedeki **tüm içerik tek bir dosyadadır: [`js/db.js`](js/db.js)**.

---

## İçeriği nasıl değiştiririm?

1. `js/db.js` dosyasını herhangi bir metin düzenleyiciyle açın (Not Defteri bile olur).
2. Tırnak işaretlerinin **içindeki** yazıyı değiştirin.
3. Kaydedin, tarayıcıda sayfayı yenileyin.

```js
telefon: "0 532 277 38 01",          // ← sadece bu yazıyı değiştirin
whatsapp: "905322773801",            // ← + ve boşluk OLMADAN, ülke koduyla
```

**Dikkat:**

- Tırnakları, virgülleri, süslü `{ }` ve köşeli `[ ]` parantezleri silmeyin.
- Bir olanak / soru / fotoğraf maddesini tamamen kaldıracaksanız `{ ... }` bloğunun **tamamını**, sonundaki virgülle birlikte silin.
- Değişiklik ekrana yansımıyorsa **Ctrl + Shift + R** (Mac: **Cmd + Shift + R**) ile önbelleği atlayarak yenileyin.
- Bir yazıyı yanlışlıkla silerseniz sayfa boşalmaz; o alan `index.html`'deki hazır metne döner.

### Değiştirdiğinizde nereler güncellenir?

`js/db.js` içindeki tek bir değer birden çok yeri besler. Örneğin `iletisim.whatsapp`:

| Nerede |
|---|
| Üst menüdeki "Yer Ayır" butonu |
| Hero'daki büyük WhatsApp butonu |
| Sağ alttaki yeşil sabit buton |
| Mobildeki alt çubuk |
| Kapanış bölümü ve footer |

Aynı şekilde `marka.ad` sayfa başlığında, logonun `alt` metninde, çekmecede, footer'da ve
Google'a gönderilen yapısal veride görünür. Logo dosyasını değiştirmek için `marka.logo`
satırındaki yolu güncellemeniz yeterli — hem üst menüdeki hem footer'daki logo birlikte değişir.
Footer koyu zeminli olduğu için logo orada otomatik olarak beyaza çevrilir (CSS filtresi).

---

## Yayına almadan önce yapılacaklar

- [ ] **Fotoğraflar.** `assets/img/apart/` içindeki 17 fotoğraf apartın aparthouse.com.tr ilanından indirilmiştir. Elinizde daha yüksek çözünürlüklü orijinaller varsa aynı isimle üzerine yazın ya da yeni dosya adını `js/db.js`'te belirtin. **Yeni fotoğraf eklerken uzun kenarı 1600 pikseli geçmesin** (bkz. "Fotoğraf eklerken" bölümü) — büyük dosyalar sayfayı yavaşlatır ve Google sıralamasını düşürür.
- [ ] **`galeri.devam` listesindeki son fotoğrafta öğrencilerin yüzleri görünüyor.** Yayınlamadan önce ilgili kişilerin onayı olduğundan emin olun; olmayacaksa `js/db.js`'te o satırı silin.
- [ ] **`index.html` içindeki hero ön-yükleme satırını güncelleyin.** `js/db.js > hero.gorseller[0].src` değiştirilirse, `index.html`'in `<head>` kısmındaki `<link rel="preload" as="image" ...>` adresi de elle değiştirilmelidir. (Ön yükleme `<head>`'de olmak zorunda olduğu için içerikten okunamıyor — `db.js` dışında elle güncellenmesi gereken tek yer budur.)
- [ ] **İletişim bilgilerini gerçeğiyle değiştirin:** telefon, WhatsApp, e-posta, adres, harita adresi.
- [ ] **Alan adını dört yerde birden değiştirin.** Site şu an `https://meltemparkkizapart.com` adresine göre ayarlıdır. Farklı bir alan adı kullanacaksanız şu dört dosyada da güncelleyin — biri unutulursa Google sayfayı yanlış adresle dizine alır:
  1. `js/db.js` → `meta.site`
  2. `index.html` → `<link rel="canonical">`, `og:url` ve iki `hreflang` satırı
  3. `robots.txt` → en alttaki `Sitemap:` satırı
  4. `sitemap.xml` → içindeki bütün adresler (metin düzenleyicinin "tümünü değiştir" özelliğiyle tek seferde)
- [ ] **Google Search Console'a siteyi ekleyin** ve `sitemap.xml`'i tanıtın (bkz. "Google'da çıkmak için" bölümü). Bu yapılmazsa site Google'a haftalar sonra girer.
- [ ] **KVKK metnini** (`partials/kvkk.html`) kurumunuzun gerçek süreçlerine göre bir hukuk danışmanına uyarlatın.
- [ ] **Fiyat bilgisi siteye eklenmedi** — kaynak ilanda yayınlanmadığı için uydurulmadı. Fiyat göstermek isterseniz `js/db.js`'e ekleyip `index.html`'e bir bölüm açmamı isteyin.
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
├── robots.txt          Arama motoru botlarına talimat + site haritası adresi
├── sitemap.xml         Google'a "sayfam ve fotoğraflarım bunlar" listesi
├── css/
│   ├── tokens.css      Renk, yazı tipi, boşluk, gölge değerleri (genel görünüm)
│   ├── base.css        Sıfırlama, tipografi, düzen yardımcıları
│   ├── components.css  Buton, header, çekmece, sabit butonlar, modal
│   └── sections.css    Hero, hakkımızda, olanaklar, galeri, konum, S.S.S., footer
├── js/
│   ├── db.js           ★ TÜM İÇERİK — düzenlemeniz gereken tek dosya
│   ├── render.js       db.js'i HTML'e yazan motor
│   └── app.js          Menü, slider, galeri, harita, modal davranışları
├── partials/
│   ├── kvkk.html       Aydınlatma metni (htmx ile modala yüklenir)
│   └── galeri-devami.html  Ek fotoğraflar (istenince yüklenir)
└── assets/
    ├── logo.png        Logonun orijinali (1284px, şeffaf)
    └── img/
        ├── logo.png    Web için küçültülmüş logo (440px) — sitede bu kullanılır
        ├── favicon.svg Sekme ikonu
        ├── placeholder.svg  Fotoğraf yüklenemezse gösterilen yedek
        └── apart/      Apartın fotoğrafları (17 adet, web için sıkıştırılmış)
            └── orijinal/   Sıkıştırma öncesi yüksek çözünürlüklü hâlleri
```

`assets/img/apart/orijinal/` klasörü **sitede kullanılmaz**; sıkıştırmadan önceki
asıl dosyaların yedeğidir (broşür, ilan sitesi vb. için lazım olursa diye durur).
İsterseniz yayına alırken bu klasörü hiç yüklemeyebilirsiniz.

### Sitenin renklerini değiştirmek

`css/tokens.css` dosyasının en üstündeki `--renk-*` değerlerini değiştirmeniz yeterlidir;
tüm site (butonlar, ikonlar, gölgeler dahil) otomatik uyum sağlar.

---

## Teknik notlar

**Kullanılan kütüphaneler** (hepsi CDN, sürümleri sabitlenmiş):

| Kütüphane | Görevi |
|---|---|
| [Swiper 11](https://swiperjs.com/) | Hero fotoğraf slider'ı |
| [GLightbox 3](https://biati-digital.github.io/glightbox/) | Galeri fotoğraflarını büyütme |
| [htmx 2](https://htmx.org/) | Galeri devamı ve KVKK metnini istenince yükleme |
| Plus Jakarta Sans | Yazı tipi (Google Fonts) |

**İkonlar** [Lucide](https://lucide.dev/) ikonlarıdır ama kütüphane yüklenmez: kullanılan ~33 ikonun
SVG'si `index.html` içine gömülü bir sprite olarak durur (373 KB yerine ~7 KB, ve `file://` üzerinde
de çalışır). WhatsApp / Instagram / Facebook ikonları [Simple Icons](https://simpleicons.org/)
kaynaklıdır — Lucide'da WhatsApp ikonu bulunmuyor.

**Dayanıklılık.** Site, dört CDN'in tamamı engellense bile kullanılabilir kalır: telefon, WhatsApp,
adres ve tüm bilgiler okunabilir; slider tek fotoğrafta durur, galeri fotoğrafları yeni sekmede
açılır. `js/db.js` bozulursa sayfa `index.html`'deki hazır metinlerle ayakta kalır.

**Harita** ziyaretçi "Haritayı Göster" butonuna basana kadar yüklenmez; böylece Google Maps çerezleri
ve ~600 KB'lık yük ilk açılışta gelmez.

**Arama motorları.** Başlık, açıklama, Open Graph etiketleri, yapısal veri ve bölüm metinleri
`index.html` içinde hazır durur (`db.js` bunları yalnızca günceller). Olanaklar, galeri ve
S.S.S. gibi liste içerikleri ise `db.js`'ten JavaScript ile basılır — Google bunları render
ederek görür, ancak JavaScript çalıştırmayan basit botlar yalnızca metin bölümlerini okur.
Ayrıntı için aşağıdaki SEO bölümüne bakın.

---

## Google'da çıkmak için

Sitenin teknik SEO tarafı hazırdır; aşağıdakiler **sizin bir kez yapmanız gerekenlerdir.**

### 1. Search Console (zorunlu)

[search.google.com/search-console](https://search.google.com/search-console) → alan adınızı ekleyin →
doğrulayın → sol menüden **Site Haritaları**'na `sitemap.xml` yazıp gönderin. Ardından
**URL Denetimi**'ne ana sayfanızı yapıştırıp "Dizine eklenmeyi iste" deyin.
Bunu yapmazsanız Google siteyi kendiliğinden bulana kadar haftalar geçebilir.

### 2. Google İşletme Profili (yerel arama için en önemlisi)

"Eskişehir kız apartı" gibi aramalarda haritalı kutuda çıkmak **tamamen**
[Google İşletme Profili'ne](https://www.google.com/business/) bağlıdır; site tek başına yetmez.
Kaydı açarken **adres, telefon ve işletme adını sitedekiyle harfi harfine aynı yazın** —
Google bu üçlüyü eşleştirerek siteyle profili birbirine bağlar. Profil adresini
`js/db.js > sosyal` listesine eklerseniz site de Google'a "bu profil bana ait" der.

### 3. Sitede hazır olanlar (dokunmanıza gerek yok)

| Ne | Nerede | Ne işe yarar |
|---|---|---|
| Sayfa başlığı ve açıklaması | `db.js > meta` | Google sonuç sayfasında görünen yazı |
| Kanonik adres | `index.html` + `db.js > meta.site` | Aynı sayfanın çift dizine girmesini önler |
| Yapısal veri (schema.org) | `index.html` + `render.js` üretir | Google'a "burası konaklama işletmesi, adresi/telefonu şu" der |
| S.S.S. işaretlemesi | `db.js > sss.liste`'den otomatik | Soru-cevapları Google'ın anlamasını sağlar |
| Konum koordinatları | `db.js > iletisim.enlem/boylam` | Haritalarla eşleşme |
| `robots.txt` / `sitemap.xml` | kök klasör | Botlara yol gösterir |
| Paylaşım görseli | `db.js > meta.ogGorsel` | WhatsApp/Facebook'ta link kapağı |

`db.js`'i her düzenlediğinizde bunların hepsi kendiliğinden güncellenir — başlık, açıklama,
yapısal veri ve S.S.S. işaretlemesi dahil. Elle bakım gerektiren tek şey alan adı değişikliğidir
(bkz. "Yayına almadan önce yapılacaklar").

### 4. Metin yazarken

- **`meta.baslik` 60 karakteri, `meta.aciklama` 155 karakteri geçmesin.** Geçen kısmı Google keser.
- Fotoğraf eklerken `alt` yazısını gerçekten doldurun; Google Görseller'de oradan bulunursunuz.
- Yorum bölümü eklerseniz **uydurma puan yazmayın.** `render.js` yıldız puanını yalnızca
  `db.js`'te gerçek yorum varsa Google'a bildirir — uydurma puan Google'ın ceza sebebidir.

### 5. Fotoğraf eklerken

Sayfa açılış hızı Google'ın sıralama ölçütlerinden biridir; büyük fotoğraf doğrudan sıralamayı
düşürür. Yeni fotoğrafı `assets/img/apart/` klasörüne atmadan önce küçültün — Mac'te Terminal'de:

```bash
cd meltemapart/assets/img/apart
sips -Z 1600 -s format jpeg -s formatOptions 35 yeni-foto.jpg --out yeni-foto.jpg
```

Bu komut uzun kenarı 1600 piksele indirir ve dosyayı yaklaşık dörtte birine düşürür; gözle
bakıldığında fark edilmez. Mevcut 17 fotoğrafın hepsi bu ayarla sıkıştırılmıştır
(toplam 7,6 MB → 2,0 MB).


---

## İçerik kaynağı

Sitedeki metinler, mesafeler, hizmet listesi ve fotoğraflar apartın
[aparthouse.com.tr ilanından](https://aparthouse.com.tr/meltempark-kiz-apart/) alınmıştır.

İlanda **fiyat**, **oda tipi**, **e-posta adresi** ve **sosyal medya hesabı** bilgisi
yayınlanmadığı için bunlar siteye uydurma değerlerle eklenmemiştir. `js/db.js` içinde
`iletisim.eposta` ve `sosyal` alanları boş bırakılmıştır; doldurduğunuz anda ilgili satırlar
sayfada kendiliğinden görünür hale gelir.

Aynı sebeple "müşteri yorumları" bölümü yoktur — ilanda hiç yorum bulunmuyor. Onun yerine
apartın kendi yayınladığı veli mesajı "Bir Eğitimciden Velilere Not" bölümünde yer alıyor.
Gerçek öğrenci/veli yorumlarınız olursa ekleyebiliriz.
