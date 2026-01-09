import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActionButtons from "@/components/FloatingActionButtons";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className={inter.className}>
        {/* Force include Tailwind classes */}
        <div className="absolute -top-10 -left-10 opacity-0 bg-white/95 bg-white/90 pointer-events-none"></div>
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <FloatingActionButtons />
      </body>
    </html>
  );
}
