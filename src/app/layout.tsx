import type { Metadata } from "next";
import { Dancing_Script, Great_Vibes } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "💕 Valentine's Day 💕",
  description: "A special Valentine's Day celebration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} ${greatVibes.variable}`}>
        {children}
      </body>
    </html>
  );
}
