export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Bölümü */}
      <section
        id="anasayfa"
        className="relative py-20 lg:py-28 px-6 bg-gradient-to-b from-background via-luxury-sand/30 to-background"
      >
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/5 border border-primary/30 text-xs tracking-wider uppercase text-secondary font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Unutulmaz Bir Tatil Deneyimi
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-secondary tracking-tight leading-tight">
            Zarafet, Lüks ve <span className="text-primary italic">Kusursuz Konfor</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-secondary/75 leading-relaxed font-sans">
            Piar Suit Otel’in özenle tasarlanmış seçkin süitlerinde ayrıcalıklı bir konaklama deneyimine adım atın. Size özel hizmet anlayışımızla her anınızı eşsiz kılıyoruz.
          </p>

          {/* Hızlı Rezervasyon Çubuğu */}
          <div className="mt-10 p-4 sm:p-6 bg-white rounded-2xl shadow-xl border border-secondary/10 max-w-4xl mx-auto text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-xs uppercase tracking-wider text-secondary/70 mb-1.5 font-medium">
                  Giriş Tarihi
                </label>
                <input
                  type="date"
                  className="w-full bg-background border border-secondary/20 rounded-lg px-3 py-2.5 text-sm text-secondary focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-secondary/70 mb-1.5 font-medium">
                  Çıkış Tarihi
                </label>
                <input
                  type="date"
                  className="w-full bg-background border border-secondary/20 rounded-lg px-3 py-2.5 text-sm text-secondary focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-secondary/70 mb-1.5 font-medium">
                  Misafir Sayısı
                </label>
                <input
                  type="text"
                  placeholder="2 Yetişkin, 1 Çocuk"
                  className="w-full bg-background border border-secondary/20 rounded-lg px-3 py-2.5 text-sm text-secondary placeholder:text-secondary/40 focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <button className="w-full bg-secondary hover:bg-secondary-light text-primary font-semibold text-sm py-2.5 px-4 rounded-lg border border-primary/40 transition-colors flex items-center justify-center gap-2">
                <span>Oda Ara</span>
                <span className="text-primary">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

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

      {/* Alt Bilgi / İletişim / Footer */}
      <footer id="iletisim" className="mt-auto border-t border-secondary/10 bg-secondary text-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <span className="font-serif text-xl tracking-widest text-primary font-bold">
              PiAR SÜİT OTEL
            </span>
            <p className="text-xs text-white/60 mt-1">
              Lüks konaklama ve unutulmaz anıların buluşma noktası.
            </p>
          </div>
          <div className="text-xs text-white/50">
            © {new Date().getFullYear()} PiAR SÜİT OTEL. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </main>
  );
}
