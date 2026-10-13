import Image from "next/image";

interface GalleryImage {
  src: string;
  title: string;
  category: string;
  spanClass: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
    title: "Görkemli Mimari & Karşılama",
    category: "Lobi & Giriş",
    spanClass: "md:col-span-1 md:row-span-2 min-h-[380px] md:min-h-[500px]",
  },
  {
    src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85",
    title: "Delüks Süit Yaşam Alanı",
    category: "Süit Odalar",
    spanClass: "md:col-span-2 md:row-span-1 min-h-[260px] md:min-h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85",
    title: "Huzurlu Spa & Masaj Odaları",
    category: "Sağlık & Spa",
    spanClass: "md:col-span-1 md:row-span-1 min-h-[260px] md:min-h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85",
    title: "Seçkin Gurme Restoran",
    category: "Gastronomi",
    spanClass: "md:col-span-1 md:row-span-1 min-h-[260px] md:min-h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=85",
    title: "VIP Master Yatak Odası",
    category: "VIP Konsept",
    spanClass: "md:col-span-1 md:row-span-2 min-h-[380px] md:min-h-[500px]",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    title: "Panoramik Lounge & Şehir Terası",
    category: "Manzara & Teras",
    spanClass: "md:col-span-2 md:row-span-1 min-h-[260px] md:min-h-[280px]",
  },
];

export default function GaleriSection() {
  return (
    <section
      id="galeri"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
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

          {/* İstenen Başlık: 'Fotoğraf Galerisi' */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-secondary tracking-tight">
            Fotoğraf Galerisi
          </h2>

          <p className="mt-4 text-base sm:text-lg text-secondary/70 max-w-2xl mx-auto font-sans leading-relaxed">
            PiAR Süit Otel&apos;in estetik mimarisini, özenle dizayn edilmiş konaklama alanlarını ve benzersiz detaylarını keşfedin.
          </p>
        </div>

        {/* Masonry-Style Görsel Izgarası */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px] md:auto-rows-[250px]">
          {GALLERY_IMAGES.map((item, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl border border-secondary/10 shadow-sm hover:shadow-2xl transition-all duration-300 ${item.spanClass}`}
            >
              {/* Unsplash Görseli (Hafif hover scale-up efekti ile) */}
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Koyu Degradeli Katman (Hover durumunda derinleşen) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Kart Bilgisi / Türkçe Başlıklar */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 pointer-events-none">
                <span className="text-[11px] uppercase tracking-widest text-primary font-bold mb-1 opacity-90 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide drop-shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
