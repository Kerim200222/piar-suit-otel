"use client";

import Image from "next/image";
import { Suite } from "@/data/suites";

export interface SuiteCardProps {
  suite: Suite;
  phoneNumber?: string;
  className?: string;
}

export default function SuiteCard({
  suite,
  phoneNumber = "905056331196",
  className = "",
}: SuiteCardProps) {
  // Telefon numarasını temizle ve istenilen dinamik Türkçe mesajı URL formatına dönüştür
  const sanitizedPhone = phoneNumber.replace(/\D/g, "");
  const dynamicMessage = `Merhaba, ${suite.name} hakkında bilgi almak ve rezervasyon yapmak istiyorum.`;
  const whatsappUrl = `https://wa.me/${sanitizedPhone}?text=${encodeURIComponent(dynamicMessage)}`;

  const formattedPrice = new Intl.NumberFormat("tr-TR").format(suite.price);

  return (
    <div
      className={`group bg-white rounded-2xl border border-secondary/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col ${className}`}
    >
      {/* Görsel Alanı */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-secondary/5">
        <Image
          src={suite.image}
          alt={suite.name}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

        {/* Rozetler (VIP / Popüler / Kapasite) */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
          {suite.isVIP && (
            <span className="bg-primary text-secondary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              VIP Seçenek
            </span>
          )}
          {suite.isPopular && !suite.isVIP && (
            <span className="bg-secondary text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-primary/30">
              En Çok Tercih Edilen
            </span>
          )}
        </div>

        {/* Kapasite ve Boyut Göstergesi */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#faf9f6] z-10 font-sans">
          <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
            {suite.size}
          </span>
          <span className="bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/10">
            {suite.capacity}
          </span>
        </div>
      </div>

      {/* Kart İçerik Alanı */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Süit Başlığı */}
          <h3 className="font-serif text-2xl font-bold text-secondary group-hover:text-primary transition-colors">
            {suite.name}
          </h3>

          {/* Kısa Açıklama */}
          <p className="mt-2.5 text-sm text-secondary/70 font-sans leading-relaxed line-clamp-2">
            {suite.shortDescription || suite.description}
          </p>

          {/* Öne Çıkan Özellikler (İlk 3 Madde) */}
          {suite.features && suite.features.length > 0 && (
            <div className="mt-4 pt-3 border-t border-secondary/10 flex flex-wrap gap-1.5">
              {suite.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-background text-secondary/80 px-2 py-0.5 rounded-md border border-secondary/15 font-medium"
                >
                  ✓ {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Fiyat ve WhatsApp ile Rezervasyon Butonu */}
        <div className="pt-4 border-t border-secondary/10 flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-secondary/60 block font-medium">
              Gecelik Fiyat
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold text-secondary">
                {formattedPrice}
              </span>
              <span className="text-xs font-semibold text-primary">
                {suite.currency}
              </span>
              <span className="text-xs text-secondary/50">/ gece</span>
            </div>
          </div>

          {/* İstenen Buton: "Bu Süiti Ayırt" */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${suite.name} için WhatsApp ile rezervasyon yap`}
            className="group/btn inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-secondary font-bold text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-102 active:scale-98"
          >
            {/* WhatsApp İkonu */}
            <svg
              className="w-4 h-4 fill-current transition-transform duration-200 group-hover/btn:rotate-12"
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
            <span>Bu Süiti Ayırt</span>
          </a>
        </div>
      </div>
    </div>
  );
}
