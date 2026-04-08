import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Freedom Drinks | Bartenders para Eventos",
  description:
    "Transformamos seu evento em uma experiência inesquecivel. Bartenders profissionais para formaturas, aniversarios, casamentos e eventos corporativos. Desde 1999.",
  openGraph: {
    title: "Freedom Drinks | Bartenders para Eventos",
    description:
      "Bartenders profissionais para formaturas, aniversarios, casamentos e eventos corporativos.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#A61C1C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
