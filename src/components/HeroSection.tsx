"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface HeroSectionProps {
  /**
   * Rezervasyon yönlendirmesi için WhatsApp telefon numarası
   */
  phoneNumber?: string;
  /**
   * WhatsApp üzerinden iletilecek otomatik rezervasyon mesajı
   */
  message?: string;
}

export default function HeroSection({
  phoneNumber = "905056331196",
  message = "Merhaba, PiAR Süit Otel'de hemen rezervasyon yaptırmak istiyorum. Müsaitlik durumu ve fiyatlar hakkında bilgi alabilir miyim?",
}: HeroSectionProps) {
  const sanitizedPhone = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;

  const handleReservationClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="anasayfa"
      className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Arka Plan Görsel Katmanı (Full-screen Hero Image) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
        <Image
          src="/images/hero-bg.jpg"
          alt="PiAR Süit Otel Elazığ"
          fill
          priority
          sizes="100vw"
          className="object-contain md:object-cover object-center scale-100 w-full h-full"
          quality={90}
        />
      </div>

      {/* Koyu Degrade Katman (Dark Gradient Overlay - bg-black/50) */}
      <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/85 via-black/50 to-black/60 z-10 backdrop-brightness-90" />

      {/* Merkez İçerik (Kademeli Fade-up Animasyonu) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white flex flex-col items-center">
        {/* Üst Rozet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/50 border border-primary/40 backdrop-blur-md mb-6 shadow-xl"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-semibold">
            Elazığ&apos;da Ayrıcalıklı Konaklama
          </span>
        </motion.div>

        {/* Ana Başlık (Fade up) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#faf9f6] leading-[1.15] max-w-4xl drop-shadow-lg"
        >
          PiAR Süit Otel&apos;e <span className="text-primary italic">Hoş Geldiniz</span>
        </motion.h1>

        {/* Türkçe Alt Başlık (Fade up) */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#faf9f6]/90 font-sans font-light max-w-2xl leading-relaxed drop-shadow-md"
        >
          Zarafet, konfor ve kusursuz misafirperverliğin buluştuğu seçkin süitlerimizde unutulmaz bir tatil ve konaklama deneyimi sizleri bekliyor.
        </motion.p>

        {/* Rezervasyon Aksiyon Alanı (Fade up) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={handleReservationClick}
            type="button"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-dark text-secondary font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-primary/40 hover:scale-105 active:scale-95 border border-primary-light/50"
          >
            {/* WhatsApp İkonu */}
            <svg
              className="w-5 h-5 fill-current text-secondary transition-transform duration-300 group-hover:rotate-12"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.507 14.307l-.009.075c-.301-.15-1.777-.876-2.053-.976-.277-.1-.478-.15-.68.15-.202.3-.78 1.002-.956 1.203-.177.2-.353.226-.654.075s-1.272-.469-2.423-1.496c-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.302-.35.453-.526.151-.175.201-.3.302-.501.101-.2.05-.376-.025-.526-.076-.151-.68-1.64-.932-2.247-.245-.591-.494-.511-.68-.521-.176-.009-.377-.01-.578-.01-.201 0-.528.075-.805.376s-1.056 1.028-1.056 2.508 1.082 2.91 1.233 3.111c.151.2 2.128 3.25 5.156 4.557.72.311 1.282.497 1.721.636.723.23 1.38.197 1.9.12.58-.087 1.777-.727 2.028-1.429.252-.702.252-1.304.177-1.429-.076-.125-.277-.201-.578-.351z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 1.892.527 3.66 1.442 5.168L2.05 21.66a.8.8 0 00.99.99l4.582-1.387A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 1.6A8.4 8.4 0 1020.4 12 8.41 8.41 0 0012 3.6z"
              />
            </svg>
            <span>Hemen Rezervasyon Yap</span>
            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <a
            href="#suitler"
            className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium text-[#faf9f6] hover:text-primary px-6 py-4 rounded-full border border-white/20 hover:border-primary/50 bg-black/40 backdrop-blur-sm transition-all duration-300"
          >
            Süitleri Keşfet
          </a>
        </motion.div>

        {/* Otel Özellikleri Küçük Bilgi Şeridi (Fade up) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 text-center w-full max-w-3xl"
        >
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block">
              24/7
            </span>
            <span className="text-xs text-[#faf9f6]/80 uppercase tracking-wider font-sans">
              Oda Servisi
            </span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block">
              %100
            </span>
            <span className="text-xs text-[#faf9f6]/80 uppercase tracking-wider font-sans">
              Misafir Memnuniyeti
            </span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block">
              Merkezi
            </span>
            <span className="text-xs text-[#faf9f6]/80 uppercase tracking-wider font-sans">
              Elazığ Konumu
            </span>
          </div>
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-bold text-primary block">
              VIP
            </span>
            <span className="text-xs text-[#faf9f6]/80 uppercase tracking-wider font-sans">
              Süit Konsepti
            </span>
          </div>
        </motion.div>
      </div>

      {/* Aşağı Kaydır Oku */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-white/70 flex flex-col items-center gap-1 animate-bounce pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest text-primary font-medium">Aşağı Kaydır</span>
        <svg
          className="w-4 h-4 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
