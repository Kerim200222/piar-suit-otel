"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HakkimizdaSection() {
  return (
    <section
      id="hakkimizda"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Split Layout: Sol Görsel (Fade-in), Sağ Metin (Fade-up) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Sol Taraf: Görsel ve Yüzen Rozet (Scroll into view animasyonu) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative group"
          >
            {/* Dekoratif Arka Plan Çerçevesi */}
            <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent -z-10 transform -rotate-1 group-hover:rotate-0 transition-transform duration-500" />

            <div className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full rounded-2xl overflow-hidden shadow-2xl border border-secondary/10 bg-secondary/10">
              <Image
                src="/images/about-hotel.jpg"
                alt="PiAR Süit Otel İç Mekan ve Konaklama Alanları"
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Yüzen Deneyim Rozeti (Pop-in Efekti) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="absolute -bottom-6 -right-4 sm:right-6 bg-secondary text-primary border border-primary/30 p-4 sm:p-5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-3.5 z-20"
            >
              <span className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center font-serif text-2xl font-bold text-primary">
                ★
              </span>
              <div>
                <span className="font-serif text-lg sm:text-xl font-bold block text-white">
                  Kusursuz Hizmet
                </span>
                <span className="text-xs text-primary/80 font-sans tracking-wide">
                  Elazığ&apos;ın Seçkin Oteli
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Sağ Taraf: Başlık ve 2 Paragraf Türkçe Metin (Fade-up) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="space-y-6 lg:pl-4"
          >
            {/* Üst Kategori Etiketi */}
            <div className="inline-flex items-center gap-2">
              <span className="h-[2px] w-8 bg-primary rounded-full" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-bold">
                Hakkımızda
              </span>
            </div>

            {/* İstenen Ana Başlık */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight tracking-tight">
              Elazığ&apos;da <span className="text-primary italic">Lüksü Yaşayın</span>
            </h2>

            {/* 1. Paragraf (Türkçe Tanıtım Metni) */}
            <p className="text-base sm:text-lg text-secondary/80 font-sans leading-relaxed">
              PiAR Süit Otel, modern mimari çizgileri ile Doğu Anadolu&apos;nun köklü misafirperverliğini bir araya getirerek konuklarına standartların ötesinde bir konaklama vaat ediyor. Şehrin merkezinde, her ayrıntısı titizlikle düşünülmüş lüks süitlerimizde, kendinizi evinizin sıcaklığında ancak beş yıldızlı bir konforun ayrıcalığında hissedeceksiniz.
            </p>

            {/* 2. Paragraf (Türkçe Deneyim Metni) */}
            <p className="text-base sm:text-lg text-secondary/75 font-sans leading-relaxed">
              Geniş ve ferah yaşam alanları, üstün ses yalıtımı, ergonomik tasarım ve günün her anında hizmetinizde olan profesyonel ekibimizle hem iş hem de tatil seyahatleriniz için mükemmel bir atmosfer sunuyoruz. Zarafetin dinginlikle buluştuğu PiAR Süit Otel&apos;de, her anınızı unutulmaz bir deneyime dönüştürmek için sizleri ağırlamaktan onur duyuyoruz.
            </p>

            {/* Öne Çıkan Değerler Şeridi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-4 grid grid-cols-2 gap-4 border-t border-secondary/10"
            >
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <span className="text-sm font-semibold text-secondary">
                  Merkezi & Sakin Lokasyon
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">
                  ✓
                </span>
                <span className="text-sm font-semibold text-secondary">
                  Özel VIP Süit Tasarımı
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
