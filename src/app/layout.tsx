import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xntrova Technologies | Premier Digital Marketing & Web Agency in Delhi NCR",
  description:
    "Accelerate your business with Xntrova Technologies. Award-winning digital marketing, technical SEO, high-ROAS performance advertising, and modern web application development in Delhi NCR.",
  keywords: [
    "Digital Marketing Agency Delhi",
    "Best SEO Company Delhi NCR",
    "Performance Marketing Agency",
    "Web Development Company Dwarka",
    "PPC Agency India",
    "Xntrova Technologies",
  ],
  authors: [{ name: "Xntrova Technologies" }],
  openGraph: {
    title: "Xntrova Technologies | Driven By Ideas. Focused on Results.",
    description:
      "Transforming digital potential into compounding business performance. Full-stack digital marketing, high-performance web development, and revenue engineering.",
    url: "https://www.xntrova.com",
    siteName: "Xntrova Technologies",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xntrova Technologies | Premier Digital Marketing & Web Agency",
    description:
      "Scale your brand with data-backed digital marketing, SEO, and enterprise web solutions.",
    creator: "@xntrova",
  },
  icons: {
    icon: "https://res.cloudinary.com/di93stsbz/image/upload/v1787209650/xntrova-wp-media/xntrova-wp-media/favicon-8b58f83f05b073a4.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.xntrova.com/#organization",
        name: "Xntrova Technologies",
        url: "https://www.xntrova.com",
        logo: "https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91 91424-79986",
          contactType: "customer service",
          areaServed: ["IN", "US", "AE", "UK"],
          availableLanguage: ["English", "Hindi"],
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "A107, 2nd Floor, Sector 8, Dwarka",
          addressLocality: "New Delhi",
          postalCode: "110077",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.xntrova.com/#localbusiness",
        name: "Xntrova Technologies - Digital Marketing & Web Agency",
        image: "https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png",
        telephone: "+91 91424-79986",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "A107, 2nd Floor, Sector 8, Dwarka",
          addressLocality: "New Delhi",
          postalCode: "110077",
          addressCountry: "IN",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "250",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.xntrova.com/#website",
        name: "Xntrova Technologies",
        url: "https://www.xntrova.com",
      },
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-sky-500 selection:text-white min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
