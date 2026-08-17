/* ═══════════════════════════════════════════════════════════════════════════
   MELTEMPARK KIZ APART — İÇERİK DOSYASI
   ───────────────────────────────────────────────────────────────────────────
   Sitedeki BÜTÜN yazılar, fotoğraflar ve iletişim bilgileri bu dosyadadır.
   Başka hiçbir dosyaya dokunmanıza gerek yok.

   NASIL DEĞİŞTİRİLİR
   1) Tırnak işaretlerinin ("...") İÇİNDEKİ yazıyı değiştirin.
   2) Tırnakları, virgülleri, süslü { } ve köşeli [ ] parantezleri SİLMEYİN.
   3) Fotoğraf değiştirmek için: fotoğrafı assets/img/apart/ klasörüne atın,
      sonra "assets/img/apart/fotograf-adi.jpg" şeklinde yolunu yazın.
   4) Bir maddeyi tamamen silmek isterseniz { } arasındaki bloğun tamamını,
      sonundaki virgülle birlikte silin.
   5) Kaydettikten sonra sayfa değişmiyorsa: Ctrl + Shift + R (Mac: Cmd+Shift+R)

   İÇERİK KAYNAĞI
   Metinler, mesafeler, hizmet listesi ve fotoğraflar apartın aparthouse.com.tr
   ilanından alınmıştır: https://aparthouse.com.tr/meltempark-kiz-apart/
   İlanda FİYAT ve ODA TİPİ bilgisi yayınlanmadığı için burada da yer almıyor.
   ═══════════════════════════════════════════════════════════════════════════ */

window.SITE = {

  /* ─── Arama motoru / paylaşım bilgileri ──────────────────────────────── */
  meta: {
    baslik: "Meltempark Kız Apart | Eskişehir Tepebaşı Öğrenci Apartı",
    aciklama: "Anadolu Üniversitesi'ne 13 dakika yürüme mesafesinde, çeyrek asırdır eğitimci bir aile tarafından işletilen kız öğrenci apartı. Kendi mutfağımızdan dört çeşit ev yemeği, parmak izli giriş, 7/24 kamera. Elektrik, su, doğalgaz ve sınırsız internet dahil.",
    ogGorsel: "assets/img/apart/1.jpg",
    site: "https://meltemparkkizapart.com"
  },

  /* ─── Marka ──────────────────────────────────────────────────────────── */
  marka: {
    ad: "Meltempark Kız Apart",
    kisaAd: "Meltempark",
    slogan: "Çeyrek asırdır eğitimci bir ailenin emanetindesiniz.",
    kurulusYili: "25+"
  },

  /* ─── İletişim ───────────────────────────────────────────────────────── */
  iletisim: {
    telefon: "0 532 277 38 01",
    telefonHam: "+905322773801",             // tel: linki için — boşluksuz, ülke kodlu
    whatsapp: "905322773801",                // + ve boşluk OLMADAN, ülke koduyla
    whatsappMesaj: "Merhaba, Meltempark Kız Apart hakkında bilgi ve fiyat almak istiyorum.",
    eposta: "",                              // İlanda e-posta yok. Varsa yazın, yoksa boş bırakın.
    adres: "Bahçelievler Mah. Namık Kemal Sokak, 26170 Tepebaşı / ESKİŞEHİR",
    adresKisa: "Tepebaşı / Eskişehir",
    calismaSaati: "Fiyat ve müsaitlik için gün içinde telefonla ulaşabilirsiniz",

    // "Yol tarifi al" butonunun açtığı adres (apartın gerçek koordinatları)
    haritaUrl: "https://www.google.com/maps/search/?api=1&query=39.788986,30.514682",

    // Haritadaki gömülü görünüm
    haritaEmbed: "https://www.google.com/maps?q=39.788986,30.514682&hl=tr&z=17&output=embed"
  },

  /* ─── Sosyal medya ───────────────────────────────────────────────────── */
  // İlanda sosyal medya hesabı belirtilmemiş. Hesabınız varsa url'leri yazın,
  // yoksa aşağıdaki satırları silip  sosyal: []  bırakın.
  sosyal: [],

  /* ─── Üst menü ───────────────────────────────────────────────────────── */
  navigasyon: [
    { ad: "Hakkımızda", hedef: "#hakkimizda" },
    { ad: "Olanaklar",  hedef: "#olanaklar" },
    { ad: "Galeri",     hedef: "#galeri" },
    { ad: "Konum",      hedef: "#konum" },
    { ad: "S.S.S.",     hedef: "#sss" }
  ],

  /* ─── HERO — sayfanın en üstü ────────────────────────────────────────── */
  hero: {
    eyebrow: "Çeyrek asırdır Tepebaşı'nda",
    // <em> ile sardığınız kelime vurgu rengiyle görünür
    baslik: "Kızınızı <em>Emanet</em> Edebileceğiniz Bir Apart",
    metin: "Eğitimci bir aile tarafından, çalışma prensiplerinden taviz vermeden işletilen kız öğrenci apartı. Anadolu Üniversitesi'ne yürüme mesafesinde, kalabalık ve gürültülü çevrelerden uzakta. Kendi mutfağımızda pişen dört çeşit ev yemeği, elektrik, su, doğalgaz ve sınırsız internet aidata dahildir.",

    istatistikler: [
      { sayi: "25+", etiket: "Yıllık Tecrübe" },
      { sayi: "13 dk", etiket: "Anadolu Ü. Yürüme" },
      { sayi: "4", etiket: "Çeşit Akşam Yemeği" }
    ],

    butonAna: "WhatsApp'tan Bilgi Al",
    butonIkincil: "Olanakları Gör",

    // Sağdaki büyük slider — istediğiniz kadar fotoğraf ekleyebilirsiniz
    gorseller: [
      {
        src: "assets/img/apart/1.jpg",
        alt: "Meltempark Kız Apart binası dış görünüm",
        baslik: "Sakin Bir Sokakta",
        altBaslik: "Gürültüden uzak, üniversiteye yakın"
      },
      {
        src: "assets/img/apart/foto-31.jpg",
        alt: "Apartın ortak yemek salonu",
        baslik: "Kendi Mutfağımız",
        altBaslik: "Dört çeşit ev yemeği"
      },
      {
        src: "assets/img/apart/foto-19.jpg",
        alt: "Ferah ve aydınlık öğrenci odası",
        baslik: "Karanlık Oda Yok",
        altBaslik: "Ferah ve geniş odalar"
      },
      {
        src: "assets/img/apart/foto-23.jpg",
        alt: "Daire mutfağı — ocak, buzdolabı ve tezgâh",
        baslik: "Her Dairede Mutfak",
        altBaslik: "Ocak, buzdolabı ve yemek masası"
      }
    ]
  },

  /* ─── Hero altındaki güven şeridi (4 adet) ───────────────────────────── */
  guvenRozetleri: [
    { ikon: "fingerprint",    yazi: "Parmak İzi ile Giriş" },
    { ikon: "cctv",           yazi: "7/24 Kamera Sistemi" },
    { ikon: "utensils",       yazi: "Akşam Yemeği Dahil" },
    { ikon: "graduation-cap", yazi: "Anadolu Ü. 13 Dakika" }
  ],

  /* ─── Hakkımızda ─────────────────────────────────────────────────────── */
  hakkimizda: {
    eyebrow: "Hakkımızda",
    baslik: "Eğitimci Bir Ailenin <em>Çeyrek Asırlık</em> Emeği",
    paragraflar: [
      "Meltempark Kız Apart, eğitimci bir aile tarafından çeyrek asırdır, çalışma prensiplerinden taviz vermeden hizmet vermektedir. İlklerin öncüsü olan apartımız, kendi mutfağında ev yemekleri statüsünde, kızlarımızın önerileri dikkate alınarak dört çeşit akşam yemeği sunmaktadır.",
      "Apartımız dört katlı ve yirmi daireden oluşur; asansörlüdür ve her daire kendi kombisi ile ısınmaktadır. Karanlık oda yoktur, odalarımız ferah ve geniştir. Mutfak ve banyoların temizliği haftada minimum üç gün görevlimiz tarafından yapılır — özelinize duyduğumuz saygıdan dolayı odalarınıza temizlik için girmiyoruz."
    ],
    maddeler: [
      "Girişler parmak okuma ile; kargo ve sipariş getirenler dahil görevli olmayan kimse katlara çıkamaz",
      "Apartın çevresi 24 saat kayıt yapan kamera sistemiyle izlenir",
      "Hastalık ve acil durumlarda kendi aracımızla hastaneye götürür, gerekirse aileyle iletişime geçeriz",
      "Nevresim ve ütü dışında tüm ihtiyaçlar tarafımızdan karşılanır"
    ],
    gorsel1: "assets/img/apart/1.jpg",
    gorsel1Alt: "Meltempark Kız Apart binası",
    gorsel2: "assets/img/apart/foto-14.jpg",
    gorsel2Alt: "Daire içi koridor ve giriş",
    imzaAd: "Apart Yönetimi",
    imzaUnvan: "37 yılını eğitime adamış bir eğitimci",
    imzaGorsel: ""                            // Yönetici fotoğrafı varsa yolunu yazın
  },

  /* ─── Olanaklar ──────────────────────────────────────────────────────── */
  olanaklar: {
    eyebrow: "Olanaklar",
    baslik: "Apartımızda Neler Var?",
    lede: "Elektrik, su, doğalgaz, internet ve akşam yemeği aidata dahildir. Ay sonunda sürpriz bir fatura gelmez.",
    liste: [
      { ikon: "utensils",        baslik: "Dört Çeşit Akşam Yemeği",  metin: "Kendi mutfağımızda, ev yemekleri statüsünde. Menü kızlarımızın önerileri dikkate alınarak belirlenir." },
      { ikon: "fingerprint",     baslik: "Parmak İzi ile Giriş",     metin: "Kızlarımızın kaldığı katlara kargo ve sipariş getirenler dahil görevli olmayan kimse çıkamaz." },
      { ikon: "cctv",            baslik: "7/24 Kamera Sistemi",      metin: "Apartın çevresi 24 saat kayıt yapan kamera sistemiyle izlenmektedir." },
      { ikon: "shield-check",    baslik: "7/24 Güvenlik",            metin: "Acil durumlarda kendi aracımızla hastaneye götürür, aileyi bilgilendiririz." },
      { ikon: "wifi",            baslik: "Sınırsız Fiber İnternet",  metin: "Her dairede dağıtıcı var; sınırsız olduğu için kota ya da kısıtlama yaşanmaz." },
      { ikon: "chef-hat",        baslik: "Daire Mutfağı",            metin: "Doğalgaza bağlı ocak, buzdolabı ve yemek masası — canınız çektiğinde kendiniz de pişirebilirsiniz." },
      { ikon: "sparkles",        baslik: "Haftada 3 Gün Temizlik",   metin: "Mutfak ve banyoların temizliği görevlimiz tarafından yapılır. Odalarınıza girilmez." },
      { ikon: "washing-machine", baslik: "Çamaşır Makinesi & Ütü",   metin: "Çamaşırhane ve ütü kullanımı apart içinde mevcuttur." },
      { ikon: "flame",           baslik: "Daireye Özel Kombi",       metin: "Her daire kendi kombisi ile ısınır; sıcaklığı kendiniz ayarlarsınız." },
      { ikon: "arrow-up-down",   baslik: "Asansör",                  metin: "Dört katlı binamız asansörlüdür." },
      { ikon: "armchair",        baslik: "Dinlenme Alanı & TV",      metin: "Ortak dinlenme alanı, televizyon ve kantin apart içinde." },
      { ikon: "trees",           baslik: "Bahçe",                    metin: "Havanın güzel olduğu günlerde vakit geçirebileceğiniz bahçemiz var." },
      { ikon: "cigarette-off",   baslik: "Sigarasız Alan",           metin: "Apartımız sigarasız alandır." },
      { ikon: "concierge-bell",  baslik: "Resepsiyon",               metin: "Giriş katında resepsiyon; bir ihtiyacınızda ulaşabileceğiniz biri her zaman var." }
    ]
  },

  /* ─── Galeri (ilk 9 fotoğraf; devamı "Daha Fazla" butonuyla gelir) ────── */
  galeri: {
    eyebrow: "Galeri",
    baslik: "Apartımızdan Kareler",
    lede: "Fotoğrafa tıklayarak büyütebilirsiniz. Yerinde görmek isterseniz arayın, sizi gezdirelim.",
    butonYazi: "Daha Fazla Fotoğraf",
    liste: [
      { src: "assets/img/apart/1.jpg",       kucuk: "assets/img/apart/1.jpg",       alt: "Apart binası dış görünüm" },
      { src: "assets/img/apart/foto-19.jpg", kucuk: "assets/img/apart/foto-19.jpg", alt: "Tek kişilik yatak ve çalışma masası" },
      { src: "assets/img/apart/foto-31.jpg", kucuk: "assets/img/apart/foto-31.jpg", alt: "Ortak yemek salonu" },
      { src: "assets/img/apart/foto-23.jpg", kucuk: "assets/img/apart/foto-23.jpg", alt: "Daire mutfağı ve giriş kapısı" },
      { src: "assets/img/apart/2.jpg",       kucuk: "assets/img/apart/2.jpg",       alt: "Gardırop, çalışma masası ve yatak" },
      { src: "assets/img/apart/foto-15.jpg", kucuk: "assets/img/apart/foto-15.jpg", alt: "Daire banyosu" },
      { src: "assets/img/apart/foto-16.jpg", kucuk: "assets/img/apart/foto-16.jpg", alt: "Mutfakta ocak, buzdolabı ve yemek masası" },
      { src: "assets/img/apart/foto-27.jpg", kucuk: "assets/img/apart/foto-27.jpg", alt: "Aydınlık öğrenci odası" },
      { src: "assets/img/apart/foto-14.jpg", kucuk: "assets/img/apart/foto-14.jpg", alt: "Daire içi koridor" }
    ],

    // "Daha Fazla Fotoğraf" butonuna basılınca yüklenenler.
    // Bu fotoğraflar sayfa açılırken indirilmez — ziyaretçi isteyince gelir.
    devam: [
      { src: "assets/img/apart/foto-12.jpg", kucuk: "assets/img/apart/foto-12.jpg", alt: "Yatak ve dolap" },
      { src: "assets/img/apart/foto-13.jpg", kucuk: "assets/img/apart/foto-13.jpg", alt: "Çalışma masası ve raflar" },
      { src: "assets/img/apart/foto-21.jpg", kucuk: "assets/img/apart/foto-21.jpg", alt: "Pencere kenarında yatak" },
      { src: "assets/img/apart/foto-22.jpg", kucuk: "assets/img/apart/foto-22.jpg", alt: "Oda detayı" },
      { src: "assets/img/apart/foto-25.jpg", kucuk: "assets/img/apart/foto-25.jpg", alt: "Mutfak tezgâhı ve buzdolabı" },
      { src: "assets/img/apart/foto-26.jpg", kucuk: "assets/img/apart/foto-26.jpg", alt: "Mutfakta ocak ve tezgâh" },
      { src: "assets/img/apart/foto-30.jpg", kucuk: "assets/img/apart/foto-30.jpg", alt: "Oda ve çalışma alanı" },
      // Aşağıdaki fotoğrafta öğrencilerin yüzleri görünüyor. Kalsın istemezseniz
      // bu satırı silin.
      { src: "assets/img/apart/wa-00-13-24.jpg", kucuk: "assets/img/apart/wa-00-13-24.jpg", alt: "Akşam yemeği servisi" }
    ]
  },

  /* ─── Konum & ulaşım ─────────────────────────────────────────────────── */
  konum: {
    eyebrow: "Konum",
    baslik: "Üniversiteye Yakın, <em>Gürültüden Uzak</em>",
    lede: "Anadolu Üniversitesi'ne yürüme mesafesindeyiz; ek bir ulaşım masrafı çıkmaz. Duraklar yaklaşık 50 metre uzaklıkta. Sosyal tesislere ve alışveriş merkezlerine de yürüyerek gidebilirsiniz.",
    haritaButon: "Haritayı Göster",
    haritaNot: "Haritayı açtığınızda Google Maps çerezleri yüklenir.",
    yolTarifiButon: "Yol Tarifi Al",
    not: "Eskişehir Teknik Üniversitesi'ne toplu taşımayla yaklaşık 20 dakika, Osmangazi Üniversitesi'ne 25–30 dakika sürer; ikisine de aynı duraklardan ulaşılır. Aylık ulaşım kartı abonman ücreti 250 ₺'dir.",
    yakinlar: [
      { ikon: "graduation-cap", ad: "Anadolu Üniversitesi",                 mesafe: "13 dk (945 m)" },
      { ikon: "graduation-cap", ad: "Anadolu Ü. — Yunus Emre Kapısı",       mesafe: "14 dk (966 m)" },
      { ikon: "shopping-cart",  ad: "Espark AVM",                           mesafe: "16 dk (1,2 km)" },
      { ikon: "graduation-cap", ad: "Anadolu Ü. — Cuma Kapısı",             mesafe: "26 dk (1,8 km)" },
      { ikon: "graduation-cap", ad: "Anadolu Ü. — Eczacılık Kapısı",        mesafe: "31 dk (2,2 km)" },
      { ikon: "bus-front",      ad: "Otobüs & Tramvay Durağı",              mesafe: "yaklaşık 50 m" }
    ]
  },

  /* ─── Yönetimden not (uydurma yorum yerine gerçek metin) ─────────────── */
  yonetimNotu: {
    eyebrow: "Velilerimize",
    baslik: "Bir Eğitimciden Velilere Not",
    alinti: "37 yılını eğitime adamış ve iki kız büyütmüş bir eğitimci olarak velilerimize önerim: lütfen çocuğunuzu emanet edeceğiniz yeri araştırın. Aceleye getirmeyin, sonradan pişman olacağınız bir hata yapmayın.",
    imzaAd: "Apart Yönetimi",
    imzaUnvan: "Meltempark Kız Apart",
    ekMetin: "Kızlarımızı emanetimiz olarak kabul eden bir anlayışla çalışıyoruz. Apartı yerinde görmek, odaları ve ortak alanları incelemek isterseniz bizi arayın — sizi gezdirelim."
  },

  /* ─── Sıkça sorulan sorular ──────────────────────────────────────────── */
  sss: {
    eyebrow: "S.S.S.",
    baslik: "Sıkça Sorulan Sorular",
    lede: "Aklınıza takılan başka bir şey varsa aramanız ya da WhatsApp'tan yazmanız yeterli.",
    liste: [
      {
        soru: "Fiyat ne kadar?",
        cevap: "Güncel fiyat ve rezervasyon bilgisi için 0 532 277 38 01 numarasından telefonla ya da WhatsApp'tan bize ulaşabilirsiniz."
      },
      {
        soru: "Aidata neler dahil?",
        cevap: "Doğalgaz, elektrik, su ve sınırsız internet aidata dahildir. Ayrıca kendi mutfağımızda pişen dört çeşit akşam yemeği de dahildir; mutfak ve banyo temizliği haftada minimum üç gün görevlimiz tarafından yapılır."
      },
      {
        soru: "Yemek hizmeti var mı?",
        cevap: "Evet. Kendi mutfağımızda, ev yemekleri statüsünde ve kızlarımızın önerileri dikkate alınarak hazırlanan dört çeşit akşam yemeği sunuyoruz. Bu hem hijyen hem de zaman ve bütçe açısından kolaylık sağlıyor."
      },
      {
        soru: "Yanımda ne getirmem gerekiyor?",
        cevap: "Nevresim ve ütü dışında tüm ihtiyaçlar tarafımızdan karşılanmaktadır."
      },
      {
        soru: "Güvenlik nasıl sağlanıyor?",
        cevap: "Apart girişleri parmak okuma sistemiyle yapılır. Kızlarımızın kaldığı katlara kargo ve sipariş getirenler dahil görevli olmayan hiç kimse çıkamaz. Apartın çevresi 24 saat kayıt yapan kamera sistemiyle izlenmektedir."
      },
      {
        soru: "Üniversiteye ulaşım nasıl?",
        cevap: "Anadolu Üniversitesi'ne yürüme mesafesindeyiz (13 dk, 945 m) ve ek bir ulaşım masrafı çıkmaz. Eskişehir Teknik Üniversitesi'ne toplu taşımayla yaklaşık 20 dakika, Osmangazi Üniversitesi'ne 25–30 dakika sürer; duraklar yaklaşık 50 metre uzaklıkta. Aylık ulaşım kartı abonman ücreti 250 ₺'dir."
      },
      {
        soru: "Odalar nasıl?",
        cevap: "Apartımızda karanlık oda yoktur; odalarımız ferah ve geniştir. Bina dört katlı ve yirmi daireden oluşur, asansörlüdür. Her daire kendi kombisi ile ısınır."
      },
      {
        soru: "Evcil hayvan kabul ediliyor mu?",
        cevap: "Hayır, apartımızda evcil hayvan kabul edilmemektedir."
      },
      {
        soru: "Odayı önceden görebilir miyim?",
        cevap: "Elbette. Bizi arayın, size uygun bir saatte apartı gezdirelim; odaları ve tüm ortak alanları gösterelim."
      }
    ]
  },

  /* ─── Kapanış çağrısı ────────────────────────────────────────────────── */
  cta: {
    baslik: "Fiyat ve Müsaitlik İçin Arayın",
    metin: "Güncel fiyatlarımızı ve boş yerlerimizi telefonla ya da WhatsApp'tan öğrenebilirsiniz. Apartı yerinde görmek isterseniz randevu oluşturalım.",
    butonAna: "WhatsApp'tan Yaz",
    butonIkincil: "Hemen Ara"
  },

  /* ─── Footer ─────────────────────────────────────────────────────────── */
  footer: {
    metin: "Eskişehir Tepebaşı'nda, eğitimci bir aile tarafından çeyrek asırdır işletilen kız öğrenci apartı. Anadolu Üniversitesi'ne yürüme mesafesinde.",
    telif: "Meltempark Kız Apart. Tüm hakları saklıdır."
  },

  /* ─── Mobil alt bar ve sabit butonlar ────────────────────────────────── */
  sabitButonlar: {
    waIpucu: "WhatsApp'tan yazın",
    altbarAra: "Ara",
    altbarWa: "WhatsApp",
    altbarYol: "Yol Tarifi"
  }
};
