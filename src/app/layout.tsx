import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fishisnow.AI | 太善",
  description: "AI Native Coder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="scroll-smooth">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <SiteHeader />
          <main className="pt-16">{children}</main>
          <footer className="py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} fishisnow. All rights reserved.
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
