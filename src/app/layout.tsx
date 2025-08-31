import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://two-sisters-coffee.com"),
  title: "Two Sisters Coffee Co.",
  description:
    "Premium coffee shop with a family tradition of rich, aromatic coffee",
  keywords: ["coffee", "premium coffee", "artisan coffee", "coffee shop"],
  authors: [{ name: "Two Sisters Coffee" }],
  creator: "Two Sisters Coffee",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://two-sisters-coffee.com",
    siteName: "Two Sisters Coffee",
    title: "Two Sisters Coffee - Premium Artisan Coffee",
    description:
      "Premium coffee shop with a family tradition of rich, aromatic coffee",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="canonical" href="https://two-sisters-coffee.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
