import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/common/scroll-to-top";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "../../public/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  viewport: "width=device-width, initial-scale=1.0",
  keywords: [
    "house removal services uk",
    "removals uk",
    "moving company uk",
    "furniture removals",
    "office relocation",
    "man and van uk",
    "galaxy removals",
    "affordable removals",
    "long distance moves",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 512, height: 512, alt: `${siteConfig.name} Logo` }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "Galaxy Removals",
              url: siteConfig.url,
              logo: `${siteConfig.url}/assets/blueLogo.png`,
              telephone: "+447424047682",
              address: {
                "@type": "PostalAddress",
                streetAddress: "13 Coronation Road",
                addressLocality: "Hayes",
                postalCode: "UB3 4JS",
                addressCountry: "UK",
              },
              areaServed: "United Kingdom",
            }),
          }}
        />
      </head>
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
