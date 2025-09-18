import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "react-hot-toast";

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
    default: "House Removal Services | Galaxy Removals UK",
    template: "%s | Galaxy Removals",
  },

  description: "Galaxy Removals provides professional house removal services, full house relocations, and affordable removals across the UK. Trusted movers for furniture removals, long distance moves, and same day services.",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
  openGraph: {
    title: "Professional House Removal Services | Galaxy Removals",
    description: "Affordable removals, full house relocation, and trusted movers across the UK. Book the best removal service today.",
    url: "https://galaxyremovals.co.uk/",
    siteName: "Galaxy Removals",
    images: [
      {
        url: "/assets/darkMiniLogo.png",
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
    title: "House Removal Services | Galaxy Removals",
    description: "Trusted movers for house removals, furniture removals, and long distance relocations.",
    images: [
        "/assets/darkMiniLogo.png",
      ],
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
