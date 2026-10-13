"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Anasayfa", href: "/" },
  { name: "Süitler", href: "#suitler" },
  { name: "Hizmetler", href: "#hizmetler" },
  { name: "Galeri", href: "#galeri" },
  { name: "İletişim", href: "#iletisim" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sayfa kaydırıldığında arka plan kontrastını dinamik olarak destekle
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü açıkken arka plan kaydırmasını engelle (mobil)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-4 sm:top-6 left-0 right-0 mx-auto w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-full md:max-w-4xl lg:max-w-5xl z-50 rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3.5 ${
          isScrolled
            ? "bg-secondary/95 backdrop-blur-md shadow-2xl shadow-black/30 border border-primary/30"
            : "bg-white/10 backdrop-blur-md shadow-xl shadow-black/20 border border-white/20"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Sol: Metin Logosu (PiAR SÜİT OTEL) */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.01]"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary text-primary flex items-center justify-center font-serif text-base sm:text-lg font-bold border border-primary/50 shadow-sm transition-colors group-hover:border-primary">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white drop-shadow-sm leading-none">
                PiAR SÜİT OTEL
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-primary font-semibold mt-0.5">
                Lüks Konaklama
              </span>
            </div>
          </Link>

          {/* Sağ: Masaüstü Navigasyon Linkleri (Yalnızca Türkçe) */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <nav className="flex items-center gap-5 lg:gap-7 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-white/90 hover:text-primary drop-shadow-sm transition-colors duration-200 py-1 font-sans after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Rezervasyon Aksiyon Butonu */}
            <Link
              href="#suitler"
              className="bg-primary hover:bg-primary-dark text-secondary font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 border border-primary-light/40"
            >
              Rezervasyon Yap
            </Link>
          </div>

          {/* Mobil Hamburger Butonu */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors backdrop-blur-sm"
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                <span
                  className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-200 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transform transition-all duration-300 origin-center ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobil Menü (Floating Glassmorphism Katmanı) */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Karartma / Arka plan örtüsü */}
        <div
          onClick={closeMobileMenu}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        />

        {/* Menü Kartı - Pill navbar ile uyumlu zarif açılır kart */}
        <div
          className={`absolute top-20 sm:top-24 inset-x-4 max-w-md mx-auto bg-secondary/95 backdrop-blur-2xl border border-primary/25 rounded-3xl shadow-2xl p-6 transition-all duration-300 ease-out text-white ${
            isMobileMenuOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-4 scale-95 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                style={{ transitionDelay: `${idx * 40}ms` }}
                className="flex items-center justify-between text-base font-medium text-white/90 hover:text-primary py-2.5 px-3 rounded-xl hover:bg-white/5 border-b border-white/10 transition-colors"
              >
                <span>{item.name}</span>
                <span className="text-primary text-xs font-serif">→</span>
              </Link>
            ))}

            <div className="pt-3">
              <Link
                href="#suitler"
                onClick={closeMobileMenu}
                className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-secondary font-semibold text-sm uppercase tracking-wider py-3 px-6 rounded-full transition-all shadow-md active:scale-98"
              >
                Rezervasyon Yap
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
