import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "fishisnow.AI | 太善",
  description: "AI Native Coder",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh" className="scroll-smooth">
      <body className="font-sans">
        <div className="relative min-h-screen ink-wash-bg">
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
