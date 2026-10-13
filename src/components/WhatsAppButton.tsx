"use client";

import React from "react";

export interface WhatsAppButtonProps {
  /**
   * WhatsApp telefon numarası (ülke kodu ile, örn: "905301234567" veya "+90 530 123 45 67")
   */
  phoneNumber?: string;
  /**
   * Varsayılan ön mesaj (Türkçe)
   */
  message?: string;
  /**
   * Özel sınıf isimleri (opsiyonel)
   */
  className?: string;
}

export default function WhatsAppButton({
  phoneNumber = "9054242330000",
  message = "Merhaba, PiAR SÜİT OTEL konaklama ve rezervasyon hakkında bilgi almak istiyorum.",
  className = "",
}: WhatsAppButtonProps) {
  // Telefon numarasındaki boşluk, artı ve parantez gibi karakterleri temizle
  const sanitizedPhone = phoneNumber.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;

  return (
    <aside aria-label="WhatsApp İletişim" className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geçin"
        className={`group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 ${className}`}
      >
        {/* Lüks Nabız / Dalgalanma Efekti (Pulsing Glow) */}
        <span
          className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* WhatsApp İkonu */}
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

        {/* Hover / Masaüstü Bilgilendirme Balonu (Tooltip) */}
        <span
          role="tooltip"
          className="absolute right-full mr-3.5 hidden md:flex items-center gap-1.5 whitespace-nowrap rounded-xl bg-secondary text-primary border border-primary/30 px-3.5 py-2 text-xs font-semibold shadow-xl opacity-0 translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span>WhatsApp Destek Hattı</span>
        </span>
      </a>
    </aside>
  );
}
