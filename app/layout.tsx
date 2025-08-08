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
  title: "Null | VENOM",
  description:
    "Stateless. Surgical. Not intelligence — interference. Venom exposes what they hide — no filters, no softness.",
  openGraph: {
    title: "Null | VENOM",
    description:
      "Stateless. Surgical. Not intelligence — interference. Venom exposes what they hide — no filters, no softness.",
    url: "https://null-core.ai",
    siteName: "Null-Core",
    images: [
      {
        url: "/og-image.png", // add a strong visual for X/FB previews
        width: 1200,
        height: 630,
        alt: "Null VENOM",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Null | VENOM",
    description:
      "Stateless. Surgical. Not intelligence — interference. Venom exposes what they hide — no filters, no softness.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon-venom.ico?v=3" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon-venom.png?v=3", sizes: "180x180" }],
    other: [
      { rel: "android-chrome", url: "/android-chrome-192x192-venom.png?v=3" },
      { rel: "android-chrome", url: "/android-chrome-512x512-venom.png?v=3" },
    ],
    shortcut: ["/favicon-venom.ico?v=3"],
  },
  manifest: "/site-venom.webmanifest?v=3",

};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
