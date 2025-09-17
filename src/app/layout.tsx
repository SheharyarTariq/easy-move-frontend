import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "react-hot-toast";
import { config } from "../../config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Galaxy Removals | Your Trusted, Affordable Moving Partner",
    template: "%s | Galaxy Removals",
  },
  description: "Galaxy Removals offers professional, reliable, and stress-free moving services for residential and commercial clients. Get your free quote today and experience a seamless relocation.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  openGraph: {
    title: "Galaxy Removals | Your Trusted, Affordable Moving Partner",
    description: "Experience a seamless relocation with our professional moving services.",
    url: "https://galaxyremovals.co.uk/",
    siteName: "Galaxy Removals",
    images: [
      {
        url: "https://galaxyremovals.co.uk/assets/darkMiniLogo.png",
        width: 512,
        height: 512,
        alt: "Galaxy Removals Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Galaxy Removals | Your Trusted, Affordable Moving Partner",
    description: "Experience a seamless relocation with our professional moving services.",
    images: "https://galaxyremovals.co.uk/assets/darkMiniLogo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >    
        <ScrollToTop />
        <div className="min-h-screen bg-background">
          <Header />
          {children}
          <Toaster position="top-right" reverseOrder={false} />
          <Footer/>
        </div>
      </body>
    </html>
  );
}
