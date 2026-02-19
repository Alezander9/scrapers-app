import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scrapers App",
  description: "Scrapers that maintain themselves",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased selection:bg-pumpkin-500/30`}
      >
        {/* Technical grid background */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#0B0B0E] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
