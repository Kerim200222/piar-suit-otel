"use client";

import { motion } from "framer-motion";
import { SUITES } from "@/data/suites";
import SuiteCard from "@/components/SuiteCard";

export default function SuitlerSection() {
  return (
    <section
      id="suitler"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative"
    >
      {/* Başlık Alanı (Scroll Fade-up Animasyonu) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-14 lg:mb-16"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="h-[2px] w-6 bg-primary rounded-full" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-bold">
            Ayrıcalıklı Konaklama
          </span>
          <span className="h-[2px] w-6 bg-primary rounded-full" />
        </div>

        {/* İstenen Başlık: 'Lüks Süitlerimiz' */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-secondary tracking-tight">
          Lüks Süitlerimiz
        </h2>

        {/* Türkçe Açıklama Metni */}
        <p className="mt-4 text-base sm:text-lg text-secondary/70 max-w-2xl mx-auto font-sans leading-relaxed">
          PiAR Süit Otel ayrıcalığıyla her detayı özenle tasarlanmış, konfor ve zarafeti bir arada sunan seçkin odalarımızı keşfedin.
        </p>
      </motion.div>

      {/* Duyarlı CSS Grid: Kademeli (Staggered) Kart Giriş Animasyonları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SUITES.map((suite, index) => (
          <motion.div
            key={suite.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.18,
              ease: "easeOut",
            }}
            className="h-full flex flex-col"
          >
            <SuiteCard suite={suite} className="h-full" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
