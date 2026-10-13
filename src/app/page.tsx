import HeroSection from "@/components/HeroSection";
import HakkimizdaSection from "@/components/HakkimizdaSection";
import SuitlerSection from "@/components/SuitlerSection";
import HizmetlerSection from "@/components/HizmetlerSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Bölümü */}
      <HeroSection />

      {/* Hakkımızda Bölümü */}
      <HakkimizdaSection />

      {/* Süitler Vitrini */}
      <SuitlerSection />

      {/* Hizmetler / Olanaklar */}
      <HizmetlerSection />

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
