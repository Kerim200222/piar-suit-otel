import HeroSection from "@/components/HeroSection";
import HakkimizdaSection from "@/components/HakkimizdaSection";
import SuitlerSection from "@/components/SuitlerSection";
import HizmetlerSection from "@/components/HizmetlerSection";
import GaleriSection from "@/components/GaleriSection";

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

      {/* Fotoğraf Galerisi */}
      <GaleriSection />
    </main>
  );
}
