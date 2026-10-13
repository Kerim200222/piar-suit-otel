import { Wifi, Sparkles, Clock, ShieldCheck } from "lucide-react";

interface AmenityItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const AMENITIES: AmenityItem[] = [
  {
    icon: Wifi,
    title: "Ücretsiz Wi-Fi",
    description: "Tüm süitlerimizde ve ortak alanlarda kesintisiz, yüksek hızlı fiber internet bağlantısı.",
  },
  {
    icon: Sparkles,
    title: "Spa & Masaj",
    description: "Günün yorgunluğunu geride bırakacağınız jakuzili dinlenme alanları ve özel terapiler.",
  },
  {
    icon: Clock,
    title: "7/24 Oda Servisi",
    description: "Günün her saatinde odanıza özel gurme lezzetler, taze ikramlar ve kesintisiz concierge desteği.",
  },
  {
    icon: ShieldCheck,
    title: "Güvenli Otopark",
    description: "Misafirlerimize özel 24 saat güvenlik kameralı, vale hizmeti sunulan kapalı ve açık otopark.",
  },
];

export default function HizmetlerSection() {
  return (
    <section
      id="hizmetler"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-luxury-sand/20 to-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Başlık Alanı */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-primary rounded-full" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-bold">
              Konfor & Rahatlık
            </span>
            <span className="h-[2px] w-6 bg-primary rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-secondary tracking-tight">
            Ayrıcalıklı Hizmetlerimiz
          </h2>

          <p className="mt-4 text-base sm:text-lg text-secondary/70 max-w-2xl mx-auto font-sans leading-relaxed">
            PiAR Süit Otel&apos;de konaklamanızı kusursuz kılmak için sunduğumuz birinci sınıf otel olanakları.
          </p>
        </div>

        {/* 4 Kolonlu Temiz Grid (Mobilde 1, Tablette 2, Masaüstünde 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {AMENITIES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl border border-secondary/10 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center relative"
              >
                {/* İkon Taşıyıcı / Altın Halka */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary transition-all duration-300 shadow-sm">
                  <IconComponent className="w-8 h-8 transition-colors duration-300" />
                </div>

                {/* İstenen Türkçe Başlık */}
                <h3 className="font-serif text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Türkçe Kısa Açıklama */}
                <p className="text-sm text-secondary/70 font-sans leading-relaxed">
                  {item.description}
                </p>

                {/* Alt Dekoratif Çizgi */}
                <span className="w-0 group-hover:w-12 h-0.5 bg-primary mt-6 transition-all duration-300 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
