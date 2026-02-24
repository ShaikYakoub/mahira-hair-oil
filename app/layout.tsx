import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahiraorganics.com"),
  title: {
    default: "Mahira Organics | Traditional Ayurvedic Hair Care",
    template: "%s | Mahira Organics",
  },
  description:
    "Mahira Organics offers traditional Ayurvedic hair oil and shampoo made using natural herbs and village preparation methods.",
  keywords: [
    "Ayurvedic hair oil",
    "Herbal shampoo",
    "Traditional hair care",
    "Natural hair oil India",
  ],
  openGraph: {
    title: "Mahira Organics",
    description: "Traditional Ayurvedic hair care crafted with natural herbs.",
    url: "https://mahiraorganics.com",
    siteName: "Mahira Organics",
    images: [
      {
        url: "/images/story-garden-hero.png",
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
    title: "Mahira Organics",
    description:
      "Traditional Ayurvedic hair oil and shampoo crafted naturally.",
    images: ["/images/story-garden-hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable}`}>
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
