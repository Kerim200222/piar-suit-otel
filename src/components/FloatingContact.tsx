"use client";

import React from "react";
import { Phone } from "lucide-react";

export interface FloatingContactProps {
  /**
   * Doğrudan arama yapılacak telefon numarası (örn: "+904242330000")
   */
  callPhoneNumber?: string;
  /**
   * WhatsApp mesajı için telefon numarası (örn: "9054242330000")
   */
  whatsappPhoneNumber?: string;
  /**
   * WhatsApp ile gönderilecek varsayılan Türkçe mesaj
   */
  whatsappMessage?: string;
  /**
   * İsteğe bağlı ek sınıf ismi
   */
  className?: string;
}

export default function FloatingContact({
  callPhoneNumber = "+904242330000",
  whatsappPhoneNumber = "9054242330000",
  whatsappMessage = "Merhaba, PiAR SÜİT OTEL rezervasyon ve konaklama hakkında bilgi almak istiyorum.",
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
      {/* Buton 1: Hemen Ara (Phone Call - Altın Tema) */}
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
