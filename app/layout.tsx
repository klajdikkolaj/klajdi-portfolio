import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(portfolioContent.site.url),
  title: {
    default: portfolioContent.site.title,
    template: `%s | ${portfolioContent.site.shortTitle}`,
  },
  description: portfolioContent.site.description,
  keywords: [...portfolioContent.site.keywords],
  openGraph: {
    title: portfolioContent.site.title,
    description: portfolioContent.site.description,
    url: portfolioContent.site.url,
    siteName: portfolioContent.site.shortTitle,
    type: "website",
    images: [
      {
        url: portfolioContent.site.ogImage,
        width: 800,
        height: 1200,
        alt: portfolioContent.person.photo.alt,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans text-slate-100">{children}</body>
    </html>
  );
}
