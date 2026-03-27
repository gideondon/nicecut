import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nice Cut Barbershop – Curaçao",
  description:
    "Premium barbershop op Curaçao. Fades, baardverzorging, kinderknippen en meer. Boek nu jouw afspraak online.",
  keywords: "barbershop, Curaçao, kapper, fade, baard, kinderknip, Nice Cut",
  openGraph: {
    title: "Nice Cut Barbershop – Curaçao",
    description: "Premium barbershop op Curaçao. Boek nu jouw afspraak.",
    type: "website",
  },
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${oswald.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
