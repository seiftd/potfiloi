import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Touati Seif - Full-Stack Developer & UI/UX Designer",
  description: "A 25-year-old Software Engineering graduate from Algeria, powered by a passion for AI and a mastery of the full stack. I build modern, responsive, and scalable web experiences that convert.",
  keywords: "Full-Stack Developer, UI/UX Designer, React, Next.js, Vue.js, Python, JavaScript, Algeria",
  authors: [{ name: "Touati Seif" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
