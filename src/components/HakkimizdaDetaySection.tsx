"use client";

import { motion } from "framer-motion";
import { Compass, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function HakkimizdaDetaySection() {
  return (
    <section
      id="hizmetler"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-luxury-sand/20 to-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Bölüm Başlığı */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-primary rounded-full" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-bold">
              Kurumsal Değerlerimiz
            </span>
            <span className="h-[2px] w-6 bg-primary rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-secondary tracking-tight">
            Zarafet ve Kusursuzluğun Hikayesi
          </h2>

          <p className="mt-4 text-base sm:text-lg text-secondary/70 max-w-2xl mx-auto font-sans leading-relaxed">
            Elazığ&apos;ın kalbinde misafirlerimize yalnızca bir konaklama değil; her ayrıntısı incelikle planlanmış ayrıcalıklı bir yaşam kültürü sunuyoruz.
          </p>
        </motion.div>

        {/* 3 Ana Blok: Misyonumuz, Vizyonumuz, Neler Sunuyoruz? */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Blok 1: Misyonumuz */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="group bg-white rounded-3xl p-8 sm:p-10 border border-secondary/10 hover:border-primary/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Arka Plan Hafif Altın Vurgu */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />

            <div>
              {/* İkon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary transition-all duration-300 shadow-sm">
                <Compass className="w-8 h-8 transition-colors duration-300" />
              </div>

              {/* Başlık */}
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2 font-sans">
                İlkelerimiz
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                Misyonumuz
              </h3>

              {/* Açıklama Metni */}
              <p className="text-sm sm:text-base text-secondary/75 font-sans leading-relaxed mb-6">
                Misafirlerimizin kendilerini evlerinin huzurunda, ancak en üst düzey lüksün konforunda hissetmelerini sağlamak; Doğu Anadolu&apos;nun kadim misafirperverliğini modern mimari, kusursuz hijyen ve kişiye özel VIP hizmet standartlarıyla harmanlamaktır.
              </p>
            </div>

            {/* Değer Maddeleri */}
            <div className="pt-6 border-t border-secondary/10 space-y-2.5 text-xs sm:text-sm text-secondary/80 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Koşulsuz Misafir Memnuniyeti</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Kişiselleştirilmiş Hizmet Standartları</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Kusursuz Hijyen &amp; Konfor Güvencesi</span>
              </div>
            </div>
          </motion.div>

          {/* Blok 2: Vizyonumuz */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="group bg-white rounded-3xl p-8 sm:p-10 border border-secondary/10 hover:border-primary/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />

            <div>
              {/* İkon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary transition-all duration-300 shadow-sm">
                <Award className="w-8 h-8 transition-colors duration-300" />
              </div>

              {/* Başlık */}
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2 font-sans">
                Gelecek Hedefimiz
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                Vizyonumuz
              </h3>

              {/* Açıklama Metni */}
              <p className="text-sm sm:text-base text-secondary/75 font-sans leading-relaxed mb-6">
                Bölgenin ve Türkiye&apos;nin en seçkin butik süit otel markası olarak; yenilikçi otelcilik yaklaşımları, çevreye duyarlı sürdürülebilir mimarimiz ve lüks konaklama kültürümüzle sektörde öncü ve ilham verici bir referans noktası olmaktır.
              </p>
            </div>

            {/* Değer Maddeleri */}
            <div className="pt-6 border-t border-secondary/10 space-y-2.5 text-xs sm:text-sm text-secondary/80 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Bölgesel Otelcilikte Lider Standartlar</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Sürdürülebilir &amp; Yenilikçi Mimari</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Unutulmaz Anılar Biriktirme Tutkusu</span>
              </div>
            </div>
          </motion.div>

          {/* Blok 3: Neler Sunuyoruz? */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="group bg-white rounded-3xl p-8 sm:p-10 border border-secondary/10 hover:border-primary/50 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden lg:col-span-1"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />

            <div>
              {/* İkon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-secondary transition-all duration-300 shadow-sm">
                <Sparkles className="w-8 h-8 transition-colors duration-300" />
              </div>

              {/* Başlık */}
              <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2 font-sans">
                Ayrıcalıklarımız
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                Neler Sunuyoruz?
              </h3>

              {/* Açıklama Metni */}
              <p className="text-sm sm:text-base text-secondary/75 font-sans leading-relaxed mb-6">
                PiAR Süit Otel bünyesinde her misafirimize özel ayrıcalıklar dünyası sunuyoruz. Geniş ve ses yalıtımlı süit odalar, özel jakuzili banyolar, 24 saat oda servisi ve kesintisiz concierge desteğimizle seyahatlerinizi sanata dönüştürüyoruz.
              </p>
            </div>

            {/* Değer Maddeleri */}
            <div className="pt-6 border-t border-secondary/10 space-y-2.5 text-xs sm:text-sm text-secondary/80 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Özel Jakuzili &amp; Teraslı VIP Süitler</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>7/24 Kesintisiz Concierge &amp; Oda Servisi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Fiber Hızlı Wi-Fi &amp; Kapalı Güvenli Otopark</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
