export type SuiteCategory = "Standart" | "Süit & Premium";

export interface Suite {
  id: string;
  slug: string;
  name: string;
  title: string;
  category: SuiteCategory;
  price: number;
  currency: string;
  pricePeriod: string;
  image: string;
  gallery?: string[];
  capacity: string;
  size: string;
  bedType: string;
  view: string;
  shortDescription: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isVIP?: boolean;
}

export const SUITES: Suite[] = [
  {
    id: "standart-oda",
    slug: "standart-oda",
    name: "Standart Oda",
    title: "Standart Oda",
    category: "Standart",
    price: 1750,
    currency: "TL",
    pricePeriod: "gece",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    ],
    capacity: "2 Yetişkin",
    size: "28 m²",
    bedType: "Geniş Çift Kişilik Yatak",
    view: "Şehir Manzaralı",
    shortDescription: "Konforlu, modern ve fonksiyonel detaylarla donatılmış huzurlu bir konaklama.",
    description:
      "Standart Odamız; hem iş hem de tatil amacıyla Elazığ'ı ziyaret eden misafirlerimiz için ferah bir ortam sunar. Yüksek kaliteli ortopedik yatak, çalışma masası, modern banyo ve dinlendirici aydınlatma sistemiyle günün yorgunluğunu üzerinizden atmanız için tasarlandı.",
    features: [
      "Ücretsiz Yüksek Hızlı Wi-Fi",
      "Ultra HD Smart TV (Netflix & Uydu)",
      "Sessiz Mini Bar",
      "Ayarlanabilir Dijital Klima",
      "Çay & Kahve İkram Seti",
      "Elektronik Şifreli Kasa",
      "Lüks Buklet Banyo Malzemeleri",
      "24 Saat Oda Servisi",
    ],
    isPopular: false,
    isVIP: false,
  },
  {
    id: "deluks-suit",
    slug: "deluks-suit",
    name: "Delüks Süit",
    title: "Delüks Süit",
    category: "Süit & Premium",
    price: 2850,
    currency: "TL",
    pricePeriod: "gece",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
    ],
    capacity: "3 Yetişkin veya 2 Yetişkin + 1 Çocuk",
    size: "45 m²",
    bedType: "King Size Yatak + Konforlu Koltuk",
    view: "Panoramik Şehir Manzaralı",
    shortDescription: "Geniş yaşam alanı, lüks oturma grubu ve özel tasarım iç mekan.",
    description:
      "Delüks Süit; zarif mimarisi, ayrı oturma bölümü ve panoramik pencereleriyle ayrıcalıklı bir konaklama deneyimi vadediyor. Şık detaylarla bezeli bu süitte, birinci sınıf tekstil ürünleri ve geniş banyo alanıyla kendinizi özel hissedeceksiniz.",
    features: [
      "Ayrı Yaşam ve Oturma Alanı",
      "Ücretsiz Yüksek Hızlı Wi-Fi",
      "55 inç 4K Smart TV",
      "Nespresso Kapsül Kahve Makinesi",
      "Dolu Minibar & Atıştırmalıklar",
      "Geniş Mermer Banyo & Yağmur Duşu",
      "Bornoz & Özel Lüks Terlikler",
      "Ütü ve Ütü Masası",
      "Ses Yalıtımlı Akustik Camlar",
      "Öncelikli Rezervasyon ve Check-in",
    ],
    isPopular: true,
    isVIP: false,
  },
  {
    id: "vip-piar-suit",
    slug: "vip-piar-suit",
    name: "VIP PiAR Süit",
    title: "VIP PiAR Süit",
    category: "Süit & Premium",
    price: 4750,
    currency: "TL",
    pricePeriod: "gece",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    ],
    capacity: "4 Yetişkin veya Geniş Aile",
    size: "75 m²",
    bedType: "Master King Yatak + Ekstra Yatak Odası",
    view: "360° Panoramik Teras & Şehir",
    shortDescription: "Özel jakuzi, teras alanı ve kişiye özel concierge hizmetiyle zirvede konaklama.",
    description:
      "VIP PiAR Süit, otelimizin en prestijli ve en geniş yaşam alanıdır. İçerisinde yer alan özel masajlı jakuzi, ferah teras, yemek/toplantı alanı ve master yatak odası ile lüks standartlarını yeniden tanımlıyor. Misafirlerimize özel karşılama ikramları ve 7/24 VIP asistanlık dahildir.",
    features: [
      "Özel Masajlı Jakuzi & Spa Alanı",
      "Geniş Teras & Şehir Seyir Alanı",
      "Ayrı Yemek ve Toplantı Masası",
      "7/24 Kişiye Özel VIP Asistan & Butler",
      "Gurme Meyve Sepeti ve Hoş Geldiniz İkramı",
      "65 inç OLED Sinema Ekranı & Ses Sistemi",
      "Nespresso & Zengin Bitki Çayı Barı",
      "Ultra Lüks Kaşmir / İpek Dokuma Tekstiller",
      "VIP Ücretsiz Havalimanı Transferi",
      "Ücretsiz Geç Çıkış (Late Check-out) İmkanı",
    ],
    isPopular: false,
    isVIP: true,
  },
];
