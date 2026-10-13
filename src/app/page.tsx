import HeroSection from "@/components/HeroSection";
import HakkimizdaSection from "@/components/HakkimizdaSection";
import SuitlerSection from "@/components/SuitlerSection";
import HakkimizdaDetaySection from "@/components/HakkimizdaDetaySection";
import GaleriSection from "@/components/GaleriSection";
import IletisimVeRezervasyon from "@/components/IletisimVeRezervasyon";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero Bölümü */}
      <HeroSection />

      {/* Hakkımızda Bölümü */}
      <HakkimizdaSection />

      {/* Süitler Vitrini */}
      <SuitlerSection />

      {/* Kurumsal Değerler & Detaylar (Misyon, Vizyon, Neler Sunuyoruz) */}
      <HakkimizdaDetaySection />

      {/* Fotoğraf Galerisi */}
      <GaleriSection />

      {/* İletişim & Hızlı Rezervasyon Formu Bölümü */}
      <IletisimVeRezervasyon />
    </main>
  );
}
