"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SUITES } from "@/data/suites";
import SuiteCard from "@/components/SuiteCard";

const FILTER_TABS = ["Tüm", "Standart", "Süit & Premium"] as const;
type FilterTab = (typeof FILTER_TABS)[number];

export default function SuitlerSection() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("Tüm");

  // Aktif sekmeye göre süitleri filtrele
  const filteredSuites =
    activeFilter === "Tüm"
      ? SUITES
      : SUITES.filter((suite) => suite.category === activeFilter);

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
        className="text-center mb-10 lg:mb-12"
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

      {/* Şık Sekmeli Navigasyon (Tabbed Navigation - Tüm / Standart / Süit & Premium) */}
      <div className="flex justify-center mb-12 sm:mb-14">
        <div className="inline-flex items-center p-1.5 rounded-full bg-secondary/5 border border-secondary/15 backdrop-blur-sm shadow-inner gap-1">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                type="button"
                className={`relative px-5 sm:px-7 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "text-secondary"
                    : "text-secondary/70 hover:text-secondary hover:bg-secondary/5"
                }`}
              >
                {/* Aktif Sekme Arka Planı (Framer Motion Layout Animasyonu) */}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-primary rounded-full shadow-md border border-primary-light/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Duyarlı CSS Grid: Akıcı Düzen Geçişi (Smooth Layout Transition) */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredSuites.map((suite) => (
            <motion.div
              key={suite.id}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="h-full flex flex-col"
            >
              <SuiteCard suite={suite} className="h-full" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
