import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";
import SocialBar from "@/components/SocialBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NM Sujon | UI/UX Designer Portfolio",
  description: "NM Sujon - UI/UX Designer with 2 years of experience crafting intuitive, human-centered digital experiences and sleek interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-200">
        <Cursor />
        <Navbar />
        <SocialBar />
        {children}
      </body>
    </html>
  );
}
