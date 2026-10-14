"use client";

import React from "react";
import { Phone } from "lucide-react";

export interface FloatingContactProps {
  /**
   * Doğrudan arama yapılacak telefon numarası (örn: "+905308441723")
   */
  callPhoneNumber?: string;
  /**
   * WhatsApp mesajı için telefon numarası (örn: "905308441723")
   */
  whatsappPhoneNumber?: string;
  /**
   * WhatsApp ile gönderilecek varsayılan Türkçe mesaj
   */
  whatsappMessage?: string;
  /**
   * Instagram profil URL bağlantısı
   */
  instagramUrl?: string;
  /**
   * İsteğe bağlı ek sınıf ismi
   */
  className?: string;
}

export default function FloatingContact({
  callPhoneNumber = "+905308441723",
  whatsappPhoneNumber = "905308441723",
  whatsappMessage = "Merhaba, PiAR SÜİT OTEL rezervasyon ve konaklama hakkında bilgi almak istiyorum.",
  instagramUrl = "https://www.instagram.com/piarsuitotel/",
  className = "",
}: FloatingContactProps) {
  const sanitizedWhatsApp = whatsappPhoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${sanitizedWhatsApp}?text=${encodedMessage}`;

  return (
    <aside
      aria-label="Hızlı İletişim Kanalları"
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3.5 ${className}`}
    >
      {/* Buton 1: Instagram (Zarif Instagram Gradient & Hover) */}
      <div className="relative group flex items-center">
        {/* Türkçe Hover Bilgilendirme Balonu (Tooltip) */}
        <span
          role="tooltip"
          className="absolute right-full mr-3.5 hidden md:flex items-center gap-2 whitespace-nowrap rounded-xl bg-secondary text-primary border border-primary/40 px-3.5 py-2 text-xs font-semibold shadow-2xl opacity-0 translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 font-sans"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
          <span>Instagram&apos;da Takip Edin</span>
        </span>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram sayfamızı ziyaret edin"
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/90 focus:outline-none focus:ring-4 focus:ring-pink-500/40"
        >
          {/* Pembe Nabız Efekti */}
          <span
            className="absolute -inset-1 rounded-full bg-pink-500/30 animate-ping pointer-events-none -z-10"
            aria-hidden="true"
          />
          {/* Instagram SVG İkonu */}
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 fill-current drop-shadow-sm transition-transform duration-300 group-hover:rotate-12"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      {/* Buton 2: Hemen Ara (Phone Call - Altın Tema) */}
      <div className="relative group flex items-center">
        {/* Türkçe Hover Bilgilendirme Balonu (Tooltip) */}
        <span
          role="tooltip"
          className="absolute right-full mr-3.5 hidden md:flex items-center gap-2 whitespace-nowrap rounded-xl bg-secondary text-primary border border-primary/40 px-3.5 py-2 text-xs font-semibold shadow-2xl opacity-0 translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 font-sans"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>Hemen Bizi Arayın</span>
        </span>

        <a
          href={`tel:${callPhoneNumber}`}
          aria-label="Otelimizi hemen telefonla arayın"
          className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary hover:bg-primary-dark text-secondary shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/90 focus:outline-none focus:ring-4 focus:ring-primary/40"
        >
          {/* Hafif Altın Nabız Efekti */}
          <span
            className="absolute -inset-1 rounded-full bg-primary/30 animate-ping pointer-events-none -z-10"
            aria-hidden="true"
          />
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current transition-transform duration-300 group-hover:rotate-12" />
        </a>
      </div>

      {/* Buton 2: WhatsApp Mesaj (Dinamik Mesaj ve İkon) */}
      <div className="relative group flex items-center">
        {/* Türkçe Hover Bilgilendirme Balonu (Tooltip) */}
        <span
          role="tooltip"
          className="absolute right-full mr-3.5 hidden md:flex items-center gap-2 whitespace-nowrap rounded-xl bg-secondary text-primary border border-primary/40 px-3.5 py-2 text-xs font-semibold shadow-2xl opacity-0 translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 font-sans"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span>WhatsApp Destek Hattı</span>
        </span>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp üzerinden iletişime geçin"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/90 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          {/* Yeşil Nabız / Dalgalanma Efekti */}
          <span
            className="absolute -inset-1 rounded-full bg-[#25D366]/35 animate-ping pointer-events-none -z-10"
            aria-hidden="true"
          />

          {/* WhatsApp SVG İkonu */}
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
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
        </a>
      </div>
    </aside>
  );
}
