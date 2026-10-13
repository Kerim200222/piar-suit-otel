import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-primary border-t border-primary/20">
      {/* Ana Footer Alanı (3 Kolon) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* 1. Kolon: PiAR SÜİT OTEL & Kısa Açıklama */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/40 flex items-center justify-center font-serif text-xl font-bold shadow-sm">
                P
              </span>
              <div>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-primary">
                  PiAR SÜİT OTEL
                </h3>
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary/75 font-semibold">
                  Lüks & Konfor
                </span>
              </div>
            </div>

            <p className="text-sm text-primary/80 leading-relaxed font-sans max-w-sm">
              Elazığ&apos;ın kalbinde, modern mimari ve geleneksel misafirperverliğin buluştuğu eşsiz bir konaklama deneyimi. Size özel lüks süitlerimizde huzuru keşfedin.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-primary/70">
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>7/24 Kesintisiz Resepsiyon & Hizmet</span>
            </div>
          </div>

          {/* 2. Kolon: Hızlı Bağlantılar */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary uppercase tracking-wider relative inline-block after:block after:w-10 after:h-[2px] after:bg-primary after:mt-1">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link
                  href="/"
                  className="text-primary/80 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">
                    ›
                  </span>
                  <span>Anasayfa</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#suitler"
                  className="text-primary/80 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">
                    ›
                  </span>
                  <span>Süitlerimiz</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#hizmetler"
                  className="text-primary/80 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">
                    ›
                  </span>
                  <span>Hizmetler & Ayrıcalıklar</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#galeri"
                  className="text-primary/80 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">
                    ›
                  </span>
                  <span>Fotoğraf Galerisi</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#iletisim"
                  className="text-primary/80 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">
                    ›
                  </span>
                  <span>İletişim & Rezervasyon</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Kolon: İletişim Bilgileri */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-primary uppercase tracking-wider relative inline-block after:block after:w-10 after:h-[2px] after:bg-primary after:mt-1">
              İletişim
            </h4>
            <div className="space-y-3.5 text-sm font-sans text-primary/85">
              {/* Adres */}
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <span className="font-semibold text-primary block">Adres:</span>
                  <p className="text-primary/80 leading-relaxed">
                    İzzetpaşa mahallesi hacı tevfik efendi sokak No.8 Merkez / Elazığ, 23000
                  </p>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <span className="font-semibold text-primary block">Telefon:</span>
                  <a
                    href="tel:+905056331196"
                    className="text-primary/80 hover:text-white transition-colors"
                  >
                    +90 505 633 11 96
                  </a>
                </div>
              </div>

              {/* E-posta */}
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-primary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <span className="font-semibold text-primary block">E-Posta:</span>
                  <a
                    href="mailto:info@piarsuitotel.com"
                    className="text-primary/80 hover:text-white transition-colors"
                  >
                    info@piarsuitotel.com
                  </a>
                </div>
              </div>

              {/* Sosyal Medya Butonları */}
              <div className="pt-2 border-t border-primary/15">
                <span className="font-semibold text-primary block mb-2 text-xs uppercase tracking-wider text-primary/75">
                  Sosyal Medya
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://www.instagram.com/piarsuitotel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between gap-2.5 px-3.5 py-2 border border-gray-500 hover:border-primary rounded-lg text-xs font-medium text-primary hover:text-white bg-transparent hover:bg-white/5 transition-all duration-200 group"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5 text-primary/70 group-hover:text-primary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt Telif Hakkı (Copyright) Şeridi */}
      <div className="border-t border-primary/15 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary/70 font-sans text-center sm:text-left">
          <p>© {currentYear} PiAR SÜİT OTEL. Tüm hakları saklıdır.</p>
          <p className="tracking-wide">Lüks, Zarafet ve Konforun Elazığ&apos;daki Adresi</p>
        </div>
      </div>
    </footer>
  );
}
