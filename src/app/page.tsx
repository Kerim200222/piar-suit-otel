import HeroSection from "@/components/HeroSection";
import HakkimizdaSection from "@/components/HakkimizdaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Bölümü */}
      <HeroSection />

      {/* Hakkımızda Bölümü */}
      <HakkimizdaSection />

      {/* Süitlerimiz */}
      <section id="suitler" className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold">
            Konfor & Zarafet
          </span>
          <h2 className="text-3xl font-serif font-bold text-secondary mt-2">
            Öne Çıkan Süitlerimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-secondary/10 overflow-hidden shadow-sm hover:border-primary/50 transition-all">
            <div className="h-48 bg-secondary/10 flex items-center justify-center font-serif text-secondary/40 text-lg">
              Deluxe Süit
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif font-semibold text-secondary">
                Deluxe Kral Süiti
              </h3>
              <p className="text-xs text-secondary/70 mt-2 leading-relaxed">
                Panoramik şehir manzarası, jakuzi ve özel oturma alanı ile üst düzey konfor.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-secondary/10 overflow-hidden shadow-sm hover:border-primary/50 transition-all">
            <div className="h-48 bg-secondary/10 flex items-center justify-center font-serif text-secondary/40 text-lg">
              Junior Süit
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif font-semibold text-secondary">
                Junior Aile Süiti
              </h3>
              <p className="text-xs text-secondary/70 mt-2 leading-relaxed">
                Geniş aileler için tasarlanmış, ferah ve huzurlu bir yaşam alanı.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-secondary/10 overflow-hidden shadow-sm hover:border-primary/50 transition-all">
            <div className="h-48 bg-secondary/10 flex items-center justify-center font-serif text-secondary/40 text-lg">
              Executive Süit
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif font-semibold text-secondary">
                Executive İş Süiti
              </h3>
              <p className="text-xs text-secondary/70 mt-2 leading-relaxed">
                İş seyahatleriniz için çalışma alanı ve üstün ses yalıtımı ile donatılmış özel oda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler / Ayrıcalıklar */}
      <section id="hizmetler" className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold">
            Seçkin Hizmetler
          </span>
          <h2 className="text-3xl font-serif font-bold text-secondary mt-2">
            Neden Piar Suit Otel?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-secondary/10 hover:border-primary/50 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-serif text-xl font-bold mb-5">
              01
            </div>
            <h3 className="text-xl font-serif font-semibold text-secondary mb-3">
              Kral Dairesi ve Süitler
            </h3>
            <p className="text-sm text-secondary/70 leading-relaxed font-sans">
              Şık mimari, ferah yaşam alanları ve modern olanaklarla donatılmış lüks süit seçenekleri.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-secondary/10 hover:border-primary/50 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-serif text-xl font-bold mb-5">
              02
            </div>
            <h3 className="text-xl font-serif font-semibold text-secondary mb-3">
              Gurme Lezzet Deneyimi
            </h3>
            <p className="text-sm text-secondary/70 leading-relaxed font-sans">
              Usta şeflerimiz tarafından hazırlanan Türk ve dünya mutfağından seçkin tatlar.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-secondary/10 hover:border-primary/50 transition-all shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-serif text-xl font-bold mb-5">
              03
            </div>
            <h3 className="text-xl font-serif font-semibold text-secondary mb-3">
              Kişiye Özel Konsept Hizmet
            </h3>
            <p className="text-sm text-secondary/70 leading-relaxed font-sans">
              Günün her saati concierge hizmeti ve her ihtiyacınıza anında yanıt veren profesyonel ekip.
            </p>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-semibold">
            Görsel Tur
          </span>
          <h2 className="text-3xl font-serif font-bold text-secondary mt-2">
            Otelimizden Kareler
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-44 bg-secondary/5 rounded-xl border border-secondary/10 flex items-center justify-center text-xs text-secondary/50 font-medium">
            Lobi & Karşılama
          </div>
          <div className="h-44 bg-secondary/5 rounded-xl border border-secondary/10 flex items-center justify-center text-xs text-secondary/50 font-medium">
            Süit Odalar
          </div>
          <div className="h-44 bg-secondary/5 rounded-xl border border-secondary/10 flex items-center justify-center text-xs text-secondary/50 font-medium">
            Restoran & Bar
          </div>
          <div className="h-44 bg-secondary/5 rounded-xl border border-secondary/10 flex items-center justify-center text-xs text-secondary/50 font-medium">
            Spa & Dinlenme
          </div>
        </div>
      </section>
    </main>
  );
}
