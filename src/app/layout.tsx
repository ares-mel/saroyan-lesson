import type { Metadata } from "next";
import { Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";
import { AudioPlayer } from "@/components/AudioPlayer";

const crimsonPro = Crimson_Pro({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "The Highlands Experience",
  description: "A deep interactive lesson on William Saroyan's work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${crimsonPro.variable} antialiased bg-background text-foreground font-sans`}
      >
        <AudioPlayer />
        {children}
      </body>
    </html>
  );
}
