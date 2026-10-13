"use client";

import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Calendar, User, Users, MessageSquare } from "lucide-react";

export default function IletisimVeRezervasyon() {
  const [formData, setFormData] = useState({
    adSoyad: "",
    telefon: "",
    tarih: "",
    kisi: "2",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Türkçe WhatsApp mesaj şablonu
    const message = `*PiAR SÜİT OTEL - HIZLI REZERVASYON TALEBİ*\n\n` +
      `👤 *Misafir Adı:* ${formData.adSoyad || "Belirtilmedi"}\n` +
      `📞 *Telefon:* ${formData.telefon || "Belirtilmedi"}\n` +
      `📅 *Giriş Tarihi:* ${formData.tarih || "Belirtilmedi"}\n` +
      `👥 *Kişi Sayısı:* ${formData.kisi} Kişi\n\n` +
      `Merhaba, yukarıdaki tarihler için otelinizde müsaitlik durumu ve fiyat teklifi almak istiyorum. Yardımcı olabilir misiniz?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/905056331196?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="iletisim" className="py-20 lg:py-28 bg-[#faf9f6] text-secondary relative overflow-hidden scroll-mt-20">
      {/* İnce arka plan süslemesi */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Sol Kolon: Başlık, Açıklama, İletişim Detayları ve 3 Aksiyon Butonu */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-widest text-primary-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                İletişim & Rezervasyon
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Elazığ seyahatiniz için <span className="text-primary italic">yerinizi ayırtın.</span>
              </h2>
              <p className="text-base sm:text-lg text-secondary/75 leading-relaxed font-sans max-w-xl">
                PiAR Süit Otel ayrıcalıklarıyla donatılmış lüks odalarımızda kusursuz bir konaklama deneyimi sizleri bekliyor. Dilediğiniz an bizimle iletişime geçebilir veya formu doldurarak hızlıca yerinizi ayırtabilirsiniz.
              </p>
            </div>

            {/* İletişim Detayları Listesi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {/* Telefon */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-secondary/5 shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary/60 font-semibold block">Telefon</span>
                  <a href="tel:+905056331196" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
                    +90 505 633 11 96
                  </a>
                </div>
              </div>

              {/* E-posta */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-secondary/5 shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary/60 font-semibold block">E-posta</span>
                  <a href="mailto:info@piarsuitotel.com" className="text-sm font-semibold text-secondary hover:text-primary transition-colors">
                    info@piarsuitotel.com
                  </a>
                </div>
              </div>

              {/* 7/24 Resepsiyon */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-secondary/5 shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary/60 font-semibold block">7/24 Resepsiyon</span>
                  <span className="text-sm font-semibold text-secondary">
                    Kesintisiz Hizmet & Danışma
                  </span>
                </div>
              </div>

              {/* Adres */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/70 border border-secondary/5 shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary/60 font-semibold block">Adres</span>
                  <span className="text-sm font-semibold text-secondary leading-snug">
                    İzzetpaşa mahallesi hacı tevfik efendi sokak No.8 Merkez / Elazığ, 23000
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Aksiyon Butonu Yan Yana */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Hemen Ara */}
              <a
                href="tel:+905056331196"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-secondary hover:bg-secondary/90 text-primary border border-primary/30 font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] active:scale-95"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>Hemen Ara</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/905056331196?text=Merhaba,%20PiAR%20S%C3%9CiT%20OTEL%20hakk%C4%B1nda%20bilgi%20ve%20rezervasyon%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Haritada Gör */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=İzzetpaşa+mahallesi+hacı+tevfik+efendi+sokak+No.8+Elazığ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white hover:bg-secondary/5 text-secondary border border-secondary/20 font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow hover:scale-[1.02] active:scale-95"
              >
                <MapPin className="w-4 h-4 text-primary-dark" />
                <span>Haritada Gör</span>
              </a>
            </div>
          </div>

          {/* Sağ Kolon: Hızlı Rezervasyon Formu (Açık Renkli Kart) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-7 sm:p-9 shadow-xl border border-primary/20 relative">
              <div className="mb-6 space-y-1.5">
                <span className="text-xs uppercase tracking-widest text-primary font-bold">
                  Kolay & Hızlı
                </span>
                <h3 className="font-serif text-2xl font-bold text-secondary">
                  Hızlı Rezervasyon Formu
                </h3>
                <p className="text-xs sm:text-sm text-secondary/70">
                  Bilgilerinizi doldurun; rezervasyon detaylarınız doğrudan otel resepsiyonuna iletilsin.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Ad Soyad */}
                <div className="space-y-1.5">
                  <label htmlFor="adSoyad" className="block text-xs font-semibold text-secondary uppercase tracking-wider">
                    Ad Soyad
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-secondary/40">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      id="adSoyad"
                      name="adSoyad"
                      required
                      value={formData.adSoyad}
                      onChange={handleChange}
                      placeholder="Örn: Ahmet Yılmaz"
                      className="w-full pl-10 pr-4 py-3 bg-[#faf9f6] border border-secondary/15 rounded-xl text-sm text-secondary placeholder-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Telefon */}
                <div className="space-y-1.5">
                  <label htmlFor="telefon" className="block text-xs font-semibold text-secondary uppercase tracking-wider">
                    Telefon
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-secondary/40">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      required
                      value={formData.telefon}
                      onChange={handleChange}
                      placeholder="Örn: 0532 123 45 67"
                      className="w-full pl-10 pr-4 py-3 bg-[#faf9f6] border border-secondary/15 rounded-xl text-sm text-secondary placeholder-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Tarih ve Kişi Sayısı (2 Kolon) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Tarih */}
                  <div className="space-y-1.5">
                    <label htmlFor="tarih" className="block text-xs font-semibold text-secondary uppercase tracking-wider">
                      Tarih
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-secondary/40">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        id="tarih"
                        name="tarih"
                        required
                        value={formData.tarih}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-3 bg-[#faf9f6] border border-secondary/15 rounded-xl text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Kişi Sayısı */}
                  <div className="space-y-1.5">
                    <label htmlFor="kisi" className="block text-xs font-semibold text-secondary uppercase tracking-wider">
                      Kişi Sayısı
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-secondary/40">
                        <Users className="w-4 h-4" />
                      </div>
                      <input
                        type="number"
                        id="kisi"
                        name="kisi"
                        min="1"
                        max="10"
                        required
                        value={formData.kisi}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 bg-[#faf9f6] border border-secondary/15 rounded-xl text-sm text-secondary focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Gönder Butonu */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark text-secondary font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-md hover:shadow-lg hover:brightness-105 active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Formu WhatsApp&apos;a Gönder</span>
                  </button>
                  <p className="text-[11px] text-center text-secondary/50 mt-2.5">
                    * Bilgileriniz güvenle doğrudan otel WhatsApp hattımıza yönlendirilir.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
