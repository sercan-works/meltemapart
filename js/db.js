/* ═══════════════════════════════════════════════════════════════════════════
   MELTEM KIZ APART — İÇERİK DOSYASI
   ───────────────────────────────────────────────────────────────────────────
   Sitedeki BÜTÜN yazılar, fotoğraflar ve iletişim bilgileri bu dosyadadır.
   Başka hiçbir dosyaya dokunmanıza gerek yok.

   NASIL DEĞİŞTİRİLİR
   1) Tırnak işaretlerinin ("...") İÇİNDEKİ yazıyı değiştirin.
   2) Tırnakları, virgülleri, süslü { } ve köşeli [ ] parantezleri SİLMEYİN.
   3) Fotoğraf değiştirmek için: fotoğrafı assets/img/ klasörüne atın,
      sonra "assets/img/fotograf-adi.jpg" şeklinde yolunu yazın.
   4) Bir maddeyi tamamen silmek isterseniz { } arasındaki bloğun tamamını,
      sonundaki virgülle birlikte silin.
   5) Kaydettikten sonra sayfa değişmiyorsa: Ctrl + Shift + R (Mac: Cmd+Shift+R)

   ⚠ ŞU AN KULLANILAN FOTOĞRAFLAR GEÇİCİ ÖRNEK GÖRSELLERDİR (Unsplash).
     Siteyi yayına almadan önce apartın gerçek fotoğraflarıyla değiştirin.
   ═══════════════════════════════════════════════════════════════════════════ */

window.SITE = {

  /* ─── Arama motoru / paylaşım bilgileri ──────────────────────────────── */
  meta: {
    baslik: "Meltem Kız Apart | Kayseri'de Güvenli Kız Öğrenci Apartı",
    aciklama: "Erciyes Üniversitesi'ne 5 dakika. 7/24 güvenlik, kameralı sistem, kadın yönetici, ücretsiz fiber internet ve etüt odası. Tek ve iki kişilik odalar.",
    ogGorsel: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    site: "https://meltemkizapart.com"
  },

  /* ─── Marka ──────────────────────────────────────────────────────────── */
  marka: {
    ad: "Meltem Kız Apart",
    kisaAd: "Meltem",
    slogan: "Ailenizin gönlü rahat, sizin eviniz sıcak.",
    kurulusYili: "2015"
  },

  /* ─── İletişim ───────────────────────────────────────────────────────── */
  iletisim: {
    telefon: "0 (352) 123 45 67",
    telefonHam: "+903521234567",            // tel: linki için — boşluksuz, ülke kodlu
    whatsapp: "905321234567",               // + ve boşluk OLMADAN, ülke koduyla
    whatsappMesaj: "Merhaba, Meltem Kız Apart hakkında bilgi almak istiyorum.",
    eposta: "info@meltemkizapart.com",
    adres: "Köşk Mah. Üniversite Cad. No: 42, Melikgazi / KAYSERİ",
    adresKisa: "Tepebaşı / Eskişehir",
    calismaSaati: "Her gün 09:00 – 21:00 arası ulaşabilirsiniz",

    // "Yol tarifi al" butonunun açtığı adres
    haritaUrl: "https://www.google.com/maps/search/?api=1&query=Erciyes+Üniversitesi+Melikgazi+Kayseri",

    // Haritadaki gömülü görünüm (Google Maps > Paylaş > Harita yerleştir > src="..." kısmı)
    haritaEmbed: "https://www.google.com/maps?q=Erciyes%20%C3%9Cniversitesi%20Melikgazi%20Kayseri&output=embed"
  },

  /* ─── Sosyal medya ───────────────────────────────────────────────────── */
  sosyal: [
    { ikon: "instagram", ad: "Instagram", url: "https://instagram.com/" },
    { ikon: "facebook",  ad: "Facebook",  url: "https://facebook.com/" }
  ],

  /* ─── Üst menü ───────────────────────────────────────────────────────── */
  navigasyon: [
    { ad: "Hakkımızda", hedef: "#hakkimizda" },
    { ad: "Odalarımız", hedef: "#odalar" },
    { ad: "Olanaklar",  hedef: "#olanaklar" },
    { ad: "Galeri",     hedef: "#galeri" },
    { ad: "Konum",      hedef: "#konum" },
    { ad: "S.S.S.",     hedef: "#sss" }
  ],

  /* ─── HERO — sayfanın en üstü ────────────────────────────────────────── */
  hero: {
    eyebrow: "2015'ten beri güvenli yuvanız",
    // <em> ile sardığınız kelime vurgu rengiyle görünür
    baslik: "Evinden Uzakta, <em>Kendini Evinde</em> Hisset",
    metin: "Erciyes Üniversitesi'ne yürüme mesafesinde, 7/24 güvenlikli, kadın yöneticili kız öğrenci apartı. Ders çalışacağın sessiz bir etüt odası, sıcak bir kahvaltı ve arkadaşlarınla paylaşacağın huzurlu bir ortam seni bekliyor.",

    istatistikler: [
      { sayi: "120", etiket: "Öğrenci Kapasitesi" },
      { sayi: "7/24", etiket: "Güvenlik & Kamera" },
      { sayi: "5 dk", etiket: "Kampüse Mesafe" }
    ],

    butonAna: "WhatsApp'tan Yer Ayır",
    butonIkincil: "Odaları İncele",

    // Sağdaki büyük slider — istediğiniz kadar fotoğraf ekleyebilirsiniz
    gorseller: [
      {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80",
        alt: "Meltem Kız Apart ortak oturma salonu",
        baslik: "Ortak Yaşam Alanı",
        altBaslik: "Arkadaşlarınla vakit geçir"
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80",
        alt: "Tek kişilik öğrenci odası",
        baslik: "Ferah Odalar",
        altBaslik: "Her oda özel banyolu"
      },
      {
        src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1400&q=80",
        alt: "Sessiz etüt ve ders çalışma odası",
        baslik: "Etüt Odası",
        altBaslik: "Sınav döneminde 24 saat açık"
      },
      {
        src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1400&q=80",
        alt: "Ortak kullanım mutfağı",
        baslik: "Tam Donanımlı Mutfak",
        altBaslik: "Canın ne isterse"
      }
    ]
  },

  /* ─── Hero altındaki güven şeridi (4 adet) ───────────────────────────── */
  guvenRozetleri: [
    { ikon: "shield-check",  yazi: "7/24 Güvenlik Görevlisi" },
    { ikon: "cctv",          yazi: "Kameralı Ortak Alanlar" },
    { ikon: "user-round",    yazi: "Kadın Yönetici" },
    { ikon: "graduation-cap", yazi: "Kampüse 5 Dakika" }
  ],

  /* ─── Hakkımızda ─────────────────────────────────────────────────────── */
  hakkimizda: {
    eyebrow: "Hakkımızda",
    baslik: "Kızınız Burada <em>Ailesinin Yanında</em> Gibi",
    paragraflar: [
      "Meltem Kız Apart, 2015 yılından bu yana Kayseri'de okuyan üniversiteli kızlarımızı ağırlıyor. Bir apart işletmesinden çok, evinden ilk kez ayrılan bir gencin ikinci evi olmayı hedefliyoruz.",
      "Girişte kartlı geçiş sistemi, ortak alanlarda kamera ve her gece nöbetçi görevlimiz var. Yöneticimiz apartta ikamet ediyor; bir sorun olduğunda kızlarımız kapıyı çalabileceği birini her zaman buluyor."
    ],
    maddeler: [
      "Velilerle düzenli bilgilendirme ve iletişim",
      "Haftalık oda temizliği, günlük ortak alan bakımı",
      "Her sabah açık büfe kahvaltı",
      "Giriş–çıkış saatlerinde veli onaylı düzen"
    ],
    gorsel1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80",
    gorsel1Alt: "Apartın ortak oturma alanı",
    gorsel2: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=700&q=80",
    gorsel2Alt: "Öğrenci odasından bir kesit",
    imzaAd: "Meltem Yıldırım",
    imzaUnvan: "Apart Yöneticisi",
    imzaGorsel: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },

  /* ─── Oda tipleri ────────────────────────────────────────────────────── */
  odalar: {
    eyebrow: "Konaklama",
    baslik: "Oda Tiplerimiz",
    lede: "Bütçenize ve alışkanlıklarınıza uygun üç farklı seçenek. Tüm odalarda özel banyo, çalışma masası ve klima standarttır.",
    fiyatNotu: "Fiyatlara kahvaltı, temizlik, internet, elektrik, su ve doğalgaz dahildir.",
    butonYazi: "Bu Oda İçin Bilgi Al",
    liste: [
      {
        ad: "Tek Kişilik Oda",
        gorsel: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
        gorselAlt: "Tek kişilik öğrenci odası",
        metre: "14 m²",
        rozet: "",
        aciklama: "Kendi alanını isteyenler için. Sessiz, düzenli ve tamamen sana ait.",
        fiyat: "12.500",
        fiyatBirim: "₺ / ay",
        ozellikler: [
          "Tek kişilik yatak ve yatak takımı",
          "Odaya özel duş ve tuvalet",
          "Geniş çalışma masası + kitaplık",
          "Kişisel gardırop ve çekmece",
          "Klima ve doğalgaz peteği"
        ]
      },
      {
        ad: "İki Kişilik Oda",
        gorsel: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80",
        gorselAlt: "İki kişilik paylaşımlı öğrenci odası",
        metre: "20 m²",
        rozet: "En Çok Tercih Edilen",
        aciklama: "Arkadaşınla ya da yeni tanışacağın biriyle paylaş, bütçene daha uygun olsun.",
        fiyat: "8.750",
        fiyatBirim: "₺ / kişi / ay",
        ozellikler: [
          "İki ayrı tek kişilik yatak",
          "Odaya özel duş ve tuvalet",
          "Kişiye özel çalışma masası",
          "İki ayrı gardırop",
          "Klima ve doğalgaz peteği"
        ]
      },
      {
        ad: "Suit Oda",
        gorsel: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",
        gorselAlt: "Balkonlu geniş suit oda",
        metre: "26 m²",
        rozet: "Sınırlı Sayıda",
        aciklama: "Balkonlu, mini mutfaklı ve daha geniş. Uzun süre kalacaklar için ideal.",
        fiyat: "16.900",
        fiyatBirim: "₺ / ay",
        ozellikler: [
          "Geniş tek kişilik yatak",
          "Balkon ve manzara",
          "Mini mutfak (ocak + buzdolabı)",
          "Oturma köşesi ve TV",
          "Klima ve doğalgaz peteği"
        ]
      }
    ]
  },

  /* ─── Olanaklar ──────────────────────────────────────────────────────── */
  olanaklar: {
    eyebrow: "Olanaklar",
    baslik: "Apartımızda Neler Var?",
    lede: "Ders çalışmaktan çamaşır yıkamaya, kahvaltıdan güvenliğe kadar günlük hayatını kolaylaştıracak her şey hazır.",
    liste: [
      { ikon: "wifi",          baslik: "Ücretsiz Fiber İnternet",   metin: "Her odaya çekilmiş 100 Mbps fiber hat. Online derste bağlantı derdi yok." },
      { ikon: "book-open",     baslik: "Sessiz Etüt Odası",         metin: "Kişiye özel çalışma masaları. Sınav döneminde 24 saat açık." },
      { ikon: "washing-machine", baslik: "Çamaşırhane",             metin: "Çamaşır ve kurutma makineleri ücretsiz. Ütü ve askı alanı mevcut." },
      { ikon: "chef-hat",      baslik: "Ortak Mutfak",              metin: "Ocak, fırın, mikrodalga ve kişisel dolaplar. Canın ne çekerse." },
      { ikon: "croissant",     baslik: "Açık Büfe Kahvaltı",        metin: "Her sabah 07:30 – 10:30 arası, aidata dahil." },
      { ikon: "sparkles",      baslik: "Haftalık Temizlik",         metin: "Odalar haftada bir, ortak alanlar her gün temizlenir." },
      { ikon: "key-round",     baslik: "Kartlı Giriş Sistemi",      metin: "Apart girişi kartlı. Dışarıdan kimse izinsiz giremez." },
      { ikon: "cctv",          baslik: "Kamera Sistemi",            metin: "Tüm ortak alanlar ve giriş 7/24 kayıt altında." },
      { ikon: "snowflake",     baslik: "Klima & Merkezi Isıtma",    metin: "Yazın serin, kışın sıcak. Faturalar aidata dahil." },
      { ikon: "car-front",     baslik: "Kapalı Otopark",            metin: "Aileniz ziyarete geldiğinde park sorunu yaşamaz." }
    ]
  },

  /* ─── Galeri (ilk 8 fotoğraf; devamı partials/galeri-devami.html) ────── */
  galeri: {
    eyebrow: "Galeri",
    baslik: "Apartımızdan Kareler",
    lede: "Fotoğrafa tıklayarak büyütebilirsiniz. Yerinde görmek isterseniz randevu alın, sizi gezdirelim.",
    butonYazi: "Daha Fazla Fotoğraf",
    liste: [
      { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=70", alt: "Ortak oturma salonu" },
      { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80",    kucuk: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=70",    alt: "Tek kişilik oda" },
      { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&q=70", alt: "Etüt odası" },
      { src: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1400&q=80",    kucuk: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&q=70",    alt: "Ortak mutfak" },
      { src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=70", alt: "Yatak odası detayı" },
      { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=70", alt: "Dinlenme köşesi" },
      { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=70", alt: "Suit oda" },
      { src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=70", alt: "İki kişilik oda" },
      { src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=70", alt: "Aydınlık çalışma köşesi" }
    ],

    // "Daha Fazla Fotoğraf" butonuna basılınca yüklenenler.
    // Bu fotoğraflar sayfa açılırken indirilmez — ziyaretçi isteyince gelir.
    devam: [
      { src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=70", alt: "Oturma köşesi" },
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=70", alt: "Ortak salon" },
      { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=70", alt: "Dinlenme alanı" },
      { src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=70", alt: "Oda detayı" },
      { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=70", alt: "Mutfak köşesi" },
      { src: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=1400&q=80", kucuk: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?w=600&q=70", alt: "Çamaşırhane" }
    ]
  },

  /* ─── Konum & ulaşım ─────────────────────────────────────────────────── */
  konum: {
    eyebrow: "Konum",
    baslik: "Her Yere Yakın, <em>Gürültüden Uzak</em>",
    lede: "Kampüse yürüme mesafesinde ama sakin bir sokakta. Market, eczane ve durak kapının önünde.",
    haritaButon: "Haritayı Göster",
    haritaNot: "Haritayı açtığınızda Google Maps çerezleri yüklenir.",
    yolTarifiButon: "Yol Tarifi Al",
    yakinlar: [
      { ikon: "graduation-cap", ad: "Erciyes Üniversitesi",   mesafe: "5 dk yürüme" },
      { ikon: "bus-front",      ad: "Tramvay & Otobüs Durağı", mesafe: "2 dk yürüme" },
      { ikon: "shopping-cart",  ad: "Market ve Eczane",        mesafe: "1 dk yürüme" },
      { ikon: "heart-pulse",    ad: "Şehir Hastanesi",         mesafe: "8 dk araçla" },
      { ikon: "utensils",       ad: "Kafe & Yemek Sokağı",     mesafe: "4 dk yürüme" },
      { ikon: "landmark",       ad: "Şehir Merkezi (Forum)",   mesafe: "12 dk araçla" }
    ]
  },

  /* ─── Öğrenci & veli yorumları ───────────────────────────────────────── */
  yorumlar: {
    eyebrow: "Yorumlar",
    baslik: "Bizde Kalanlar Ne Diyor?",
    liste: [
      {
        ad: "Zeynep A.",
        rol: "Hemşirelik, 3. Sınıf",
        puan: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=160&q=80",
        metin: "İki yıldır buradayım. En sevdiğim şey etüt odası — sınav haftası gece 3'te bile çalışabiliyorum. Meltem abla da bir şeye ihtiyacımız olduğunda hemen ilgileniyor."
      },
      {
        ad: "Elif K.",
        rol: "Mimarlık, 2. Sınıf",
        puan: 5,
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&q=80",
        metin: "Maket ve proje işleri geç bitiyor, gece dönüşlerde güvenlik olması ailemi çok rahatlattı. Odalar da göründüğü gibi, fotoğraflarla birebir aynı."
      },
      {
        ad: "Ayşe Hanım",
        rol: "Öğrenci Velisi",
        puan: 5,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&q=80",
        metin: "Kızımı ilk defa şehir dışına gönderiyordum, açıkçası çok tedirgindim. Yönetimin apartta oturuyor olması ve düzenli bilgilendirme yapmaları içimi rahatlattı."
      },
      {
        ad: "Melisa T.",
        rol: "İşletme, 1. Sınıf",
        puan: 4,
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&q=80",
        metin: "Kahvaltısı gerçekten güzel, sabah derse aç gitmiyorum. Kampüse yürüyerek gitmek de büyük konfor, yol parası diye bir gider kalmadı."
      }
    ]
  },

  /* ─── Sıkça sorulan sorular ──────────────────────────────────────────── */
  sss: {
    eyebrow: "S.S.S.",
    baslik: "Sıkça Sorulan Sorular",
    lede: "Aklınıza takılan başka bir şey varsa WhatsApp'tan yazmanız yeterli, hemen dönüyoruz.",
    liste: [
      {
        soru: "Aidata neler dahil?",
        cevap: "Elektrik, su, doğalgaz, fiber internet, açık büfe kahvaltı, haftalık oda temizliği ve çamaşırhane kullanımı aidata dahildir. Ay sonunda sürpriz bir fatura gelmez."
      },
      {
        soru: "Depozito alıyor musunuz?",
        cevap: "Evet, bir aylık kira tutarında depozito alınır. Çıkışta oda hasarsız teslim edildiğinde depozito eksiksiz iade edilir."
      },
      {
        soru: "Giriş–çıkış saati var mı?",
        cevap: "Apart girişi kartlıdır ve 7/24 açıktır. Ancak 18 yaş altı öğrencilerimizde velinin talebi doğrultusunda giriş saati uygulanır ve geç kalınması durumunda veli bilgilendirilir."
      },
      {
        soru: "Erkek misafir kabul ediliyor mu?",
        cevap: "Katlara ve odalara erkek misafir kabul edilmez. Aile ziyaretleri giriş katındaki misafir salonunda ağırlanır; baba ve kardeşler yönetim bilgisi dahilinde odaya çıkabilir."
      },
      {
        soru: "Sözleşme kaç aylık?",
        cevap: "Standart sözleşmemiz 9 aylıktır (Eylül – Mayıs). Yaz okulu için 3 aylık ayrı sözleşme yapılabilir, dilerseniz 12 ay boyunca da kalabilirsiniz."
      },
      {
        soru: "Odayı önceden görebilir miyim?",
        cevap: "Elbette. WhatsApp'tan yazıp randevu alın; size uygun bir saatte apartı gezdirir, tüm ortak alanları gösteririz. Şehir dışındaysanız görüntülü tur da yapıyoruz."
      },
      {
        soru: "KYK bursu veya öğrenim kredisi ile ödeme yapabilir miyim?",
        cevap: "Ödemeler aylık olarak alınmaktadır, bursunuzun yattığı tarihe göre ödeme gününüzü ayarlayabiliriz. Peşin ödemelerde indirim uygulanır."
      }
    ]
  },

  /* ─── Kapanış çağrısı ────────────────────────────────────────────────── */
  cta: {
    baslik: "Yerler Dolmadan Odanı Ayırt",
    metin: "Kayıt dönemi başladı ve sınırlı sayıda odamız kaldı. WhatsApp'tan yazın, müsait odaları ve güncel fiyatları hemen paylaşalım.",
    butonAna: "WhatsApp'tan Yaz",
    butonIkincil: "Hemen Ara"
  },

  /* ─── Footer ─────────────────────────────────────────────────────────── */
  footer: {
    metin: "Kayseri'de üniversite okuyan kızlarımız için güvenli, temiz ve sıcak bir yuva. 2015'ten bu yana aynı özenle.",
    telif: "Meltem Kız Apart. Tüm hakları saklıdır.",
    altLinkler: [
      { ad: "KVKK Aydınlatma Metni", hedef: "partials/kvkk.html", modal: true }
    ]
  },

  /* ─── Mobil alt bar ve sabit butonlar ────────────────────────────────── */
  sabitButonlar: {
    waIpucu: "WhatsApp'tan yazın",
    altbarAra: "Ara",
    altbarWa: "WhatsApp",
    altbarYol: "Yol Tarifi"
  }
};
