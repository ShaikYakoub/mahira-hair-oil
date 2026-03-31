import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import ClientLayout from "@/components/ClientLayout";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Navbar from "@/components/Navbar";
import { kadapaLocations } from "@/lib/locations";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahiraherbals.com"),
  title: {
    default: "Mahira Herbals | Traditional Ayurvedic Hair Care",
    template: "%s | Mahira Herbals",
  },
  description:
    "Mahira Herbals offers traditional Ayurvedic hair oil and shampoo made using natural herbs and village preparation methods.",
  keywords: [
    "Ayurvedic hair oil",
    "Herbal shampoo",
    "Traditional hair care",
    "Natural hair oil India",
    "Mahira Herbal Hair Oil",
    "Kadapa district hair oil",
    "Andhra Pradesh Ayurvedic hair care",
    ...kadapaLocations.map((loc) => `herbal hair oil ${loc}`),
    ...kadapaLocations.map((loc) => `Ayurvedic hair oil ${loc}`),
  ],
  openGraph: {
    title: "Mahira Herbals",
    description: "Traditional Ayurvedic hair care crafted with natural herbs.",
    url: "https://mahiraherbals.com",
    siteName: "Mahira Herbals",
    images: [
      {
        url: "/images/story-garden-hero.webp",
        width: 2816,
        height: 1536,
        alt: "Mahira Ayurvedic Hair Care",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahira Herbals",
    description:
      "Traditional Ayurvedic hair oil and shampoo crafted naturally.",
    images: ["/images/story-garden-hero.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/webp" href="/favicon.webp" />
        <link rel="apple-touch-icon" href="/favicon.webp" />
      </head>
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1502214947931260');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1502214947931260&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
