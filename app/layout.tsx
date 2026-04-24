import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono } from "next/font/google";
import { portfolioContent } from "@/content/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioContent.site.url),
  title: {
    default: portfolioContent.site.title,
    template: `%s | ${portfolioContent.site.shortTitle}`,
  },
  description: portfolioContent.site.description,
  keywords: [...portfolioContent.site.keywords],
  alternates: {
    canonical: portfolioContent.site.canonicalUrl,
  },
  openGraph: {
    title: portfolioContent.site.title,
    description: portfolioContent.site.description,
    url: portfolioContent.site.url,
    siteName: portfolioContent.site.shortTitle,
    type: "website",
    images: [
      {
        url: portfolioContent.site.ogImage,
        width: 1672,
        height: 941,
        alt: "Iridescent sphere artwork for Klajdi Kolaj portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioContent.site.title,
    description: portfolioContent.site.description,
    images: [portfolioContent.site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${portfolioContent.site.canonicalUrl}#profile-page`,
      url: portfolioContent.site.canonicalUrl,
      name: portfolioContent.site.profilePageName,
      description: portfolioContent.site.description,
      mainEntity: {
        "@id": `${portfolioContent.site.canonicalUrl}#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${portfolioContent.site.canonicalUrl}#person`,
      name: portfolioContent.person.name,
      jobTitle: portfolioContent.person.role,
      email: `mailto:${portfolioContent.person.email}`,
      url: portfolioContent.site.canonicalUrl,
      image: `${portfolioContent.site.url}${portfolioContent.person.photo.src}`,
      sameAs: [portfolioContent.person.linkedin, portfolioContent.person.github],
      knowsAbout: [...portfolioContent.site.knowsAbout],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
