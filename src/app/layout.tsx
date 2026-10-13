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
  metadataBase: new URL("https://piarsuitotel.com"),
  title: {
    default: "PiAR Süit Otel | Elazığ",
    template: "%s | PiAR Süit Otel",
  },
  description:
    "Elazığ'ın kalbinde lüks ve konforun buluşma noktası. PiAR Süit Otel; özel tasarım süit odaları, 7/24 oda servisi, spa & jakuzi ayrıcalığı ve üstün misafirperverlik anlayışıyla unutulmaz bir konaklama deneyimi sunar.",
  keywords: [
    "PiAR Süit Otel",
    "Elazığ Otel",
    "Elazığ Lüks Otel",
    "Elazığ Süit Oda",
    "Elazığ Konaklama",
    "VIP Süit Elazığ",
    "Elazığ Otelleri",
    "Jakuzili Otel Elazığ",
  ],
  authors: [{ name: "PiAR Süit Otel", url: "https://piarsuitotel.com" }],
  creator: "PiAR Süit Otel",
  publisher: "PiAR Süit Otel",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "PiAR Süit Otel | Elazığ",
    description:
      "Elazığ'ın kalbinde lüks ve konforun buluşma noktası. Seçkin süitlerimiz, jakuzili odalar ve ayrıcalıklı olanaklarımızla eşsiz bir konaklama deneyimi sizleri bekliyor.",
    url: "https://piarsuitotel.com",
    siteName: "PiAR Süit Otel",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "PiAR Süit Otel | Elazığ Lüks Konaklama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PiAR Süit Otel | Elazığ",
    description:
      "Elazığ'ın merkezinde lüks ve konforlu süit odalar. Unutulmaz bir konaklama deneyimi için rezervasyon yapın.",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=85",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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

