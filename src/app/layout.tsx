import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BatteryMe - The Smartest Battery Companion for Mac",
  description: "Real-time power monitoring, AI insights, and intelligent alerts to extend your MacBook's battery life.",
  openGraph: {
    title: "BatteryMe - The Smartest Battery Companion for Mac",
    description: "Real-time power monitoring, AI insights, and intelligent alerts to extend your MacBook's battery life.",
    url: "https://batteryme.app",
    siteName: "BatteryMe",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BatteryMe - The Smartest Battery Companion for Mac",
    description: "Real-time power monitoring, AI insights, and intelligent alerts to extend your MacBook's battery life.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
