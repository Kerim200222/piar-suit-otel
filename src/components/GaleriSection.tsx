"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  aspectRatio: "portrait" | "landscape" | "square";
  spanClass: string;
  description: string;
}

const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: "lobi-karsilama",
    src: "/images/gallery/gallery-lobby.jpg",
    alt: "PiAR Süit Otel Lobi, Asansör ve Karşılama Alanı",
    title: "Lobi & Karşılama Alanı",
    category: "İç Mekan & Konfor",
    aspectRatio: "portrait",
    spanClass: "md:col-span-1 md:row-span-2 min-h-[380px] md:min-h-full",
    description: "Modern mermer kaplamalı asansör, konforlu dinlenme koltukları ve sıcak koridor aydınlatması.",
  },
  {
    id: "giris-tabela",
    src: "/images/gallery/gallery-sign.jpg",
    alt: "PiAR Süit Otel Işıklı Tabela ve Giriş Mimarisi",
    title: "Işıklı Tabela & Giriş Kanopisi",
    category: "Mimari & Karşılama",
    aspectRatio: "landscape",
    spanClass: "md:col-span-2 md:row-span-1 min-h-[260px] md:min-h-full",
    description: "Gece ışıl ışıl parlayan lüks marka tabelası ve caddeye bakan seçkin giriş mimarisi.",
  },
  {
    id: "suit-oda",
    src: "/images/gallery/gallery-suite.jpg",
    alt: "PiAR Süit Otel Lüks Süit Yatak Odası ve Yaşam Alanı",
    title: "Lüks Süit Oda & Dinlenme Alanı",
    category: "Süit Yaşam",
    aspectRatio: "square",
    spanClass: "md:col-span-1 md:row-span-1 min-h-[260px] md:min-h-full",
    description: "Geniş çift kişilik yatak, modern kadife kanepe ve huzur veren gizli tavan ışıkları.",
  },
  {
    id: "gece-cephesi",
    src: "/images/gallery/gallery-facade-aerial.jpg",
    alt: "PiAR Süit Otel Gece Cephesi ve Sıcak Aydınlatma",
    title: "Gece Cephesi & Aydınlatma Detayları",
    category: "Dış Mimari",
    aspectRatio: "landscape",
    spanClass: "md:col-span-1 md:row-span-1 min-h-[260px] md:min-h-full",
    description: "Özel altın aydınlatma hatları ve vitrin camlarıyla geceleri parlayan otel binası.",
  },
  {
    id: "sehir-dokusu",
    src: "/images/gallery/gallery-street.jpg",
    alt: "PiAR Süit Otel Şehir Dokusu ve Cadde Perspektifi",
    title: "Şehir Dokusu & Prestijli Konum",
    category: "Elazığ Merkez",
    aspectRatio: "landscape",
    spanClass: "md:col-span-3 md:row-span-1 min-h-[280px] md:min-h-[340px]",
    description: "Elazığ'ın merkezinde, tarihi ve kültürel lokasyonlara birkaç adım mesafede huzurlu bir vaha.",
  },
];

export default function GaleriSection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // ESC tuşu ile modal kapatma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section
      id="galeri"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Bölüm Başlığı */}
        <div className="text-center mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-primary rounded-full" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-bold">
              Görsel Tur
            </span>
            <span className="h-[2px] w-6 bg-primary rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-secondary tracking-tight">
            Fotoğraf Galerisi
          </h2>

          <p className="mt-4 text-base sm:text-lg text-secondary/70 max-w-2xl mx-auto font-sans leading-relaxed">
            PiAR Süit Otel&apos;in estetik mimarisini, özenle dizayn edilmiş konaklama alanlarını ve benzersiz detaylarını keşfedin.
          </p>
        </div>

        {/* Bento Box Tasarımlı Dinamik Görsel Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 md:auto-rows-[280px] lg:auto-rows-[310px]">
          {GALLERY_IMAGES.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedImage(item);
                }
              }}
              className={`group relative overflow-hidden rounded-3xl border border-secondary/10 bg-secondary/5 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${item.spanClass}`}
            >
              {/* Gerçek Otel Fotoğrafı (Hover ile yumuşak yakınlaşma) */}
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={90}
              />

              {/* Koyu Degradeli Katman (Hover durumunda derinleşen) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Büyüteç İkonu (Sağ Üst Köşe) */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                <ZoomIn className="w-4 h-4 text-primary" />
              </div>

              {/* Kart Bilgileri (Kategori & Türkçe Başlık) */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 pointer-events-none">
                <span className="text-[11px] uppercase tracking-widest text-primary font-bold mb-1 opacity-90 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide drop-shadow-sm transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-white/75 mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tıklanan Görsel için İnteraktif Lightbox Modalı */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-10 flex items-center justify-center cursor-zoom-out"
          >
            {/* Kapat Butonu */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              type="button"
              className="absolute top-5 right-5 sm:top-7 sm:right-7 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Fotoğrafı kapat"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal İçerik Kutusu */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full bg-secondary/95 border border-primary/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col cursor-default"
            >
              {/* Fotoğraf Alanı */}
              <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Alt Bilgi Başlığı */}
              <div className="p-5 sm:p-6 bg-secondary border-t border-primary/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-1">
                    {selectedImage.category}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold">
                    {selectedImage.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 font-sans">
                    {selectedImage.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="self-start sm:self-center px-4 py-2 rounded-xl bg-primary hover:bg-primary-dark text-secondary font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Kapat
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
