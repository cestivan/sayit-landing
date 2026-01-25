import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { PostHogProvider } from "@/providers/posthog-provider";
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
  title: "SayIt - AI Voice-to-Text for Mac",
  description: "Turn your voice into perfect text instantly. Lightning-fast transcription with multi-language support and privacy-first design.",
  openGraph: {
    title: "SayIt - AI Voice-to-Text for Mac",
    description: "Turn your voice into perfect text instantly. Lightning-fast transcription with multi-language support and privacy-first design.",
    url: "https://sayit.app",
    siteName: "SayIt",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SayIt - AI Voice-to-Text for Mac",
    description: "Turn your voice into perfect text instantly. Lightning-fast transcription with multi-language support and privacy-first design.",
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
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
