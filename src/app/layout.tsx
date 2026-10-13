import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piar Suit Otel | Lüks ve Konforun Buluşma Noktası",
  description:
    "Piar Suit Otel - Ayrıcalıklı lüks konaklama, zarif süit odalar ve üstün misafirperverlik deneyimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppButton
          phoneNumber="9054242330000"
          message="Merhaba, PiAR SÜİT OTEL rezervasyon ve konaklama hakkında bilgi almak istiyorum."
        />
      </body>
    </html>
  );
}

