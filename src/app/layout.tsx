import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SubtleNoiseOverlay } from "@/components/SubtleNoiseOverlay";
import { BackToTop } from "@/components/BackToTop";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "EDIEBO LTD - Luxury websites, Manchester UK",
    template: "%s - EDIEBO LTD",
  },
  description: siteConfig.description,
  openGraph: {
    title: "EDIEBO LTD",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "EDIEBO LTD",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <SubtleNoiseOverlay />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: siteConfig.name,
              url: siteConfig.url,
              areaServed: siteConfig.location,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: siteConfig.email,
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteConfig.name,
              url: siteConfig.url,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteConfig.url}/work?search={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
