import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";
import { JsonLd } from "@/components/json-ld";
import { CookieConsentManager } from "@/components/cookie-consent-manager";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TextStyler - AI-Powered Professional Text Formatting SaaS Platform",
  description: "Transform your content strategy with our AI-powered text styling platform. Trusted by 50,000+ professionals to increase engagement by 340%. API-first, enterprise-ready.",
  keywords: "text styling API, content marketing SaaS, LinkedIn engagement, social media automation, unicode text converter, professional text formatting, content optimization platform",
  authors: [{ name: "TextStyler Team" }],
  creator: "TextStyler Inc.",
  publisher: "TextStyler Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://textstyler.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TextStyler - AI-Powered Professional Text Formatting SaaS",
    description: "Join 50,000+ professionals using our platform to increase content engagement by 340%. API-first text styling solution for modern businesses.",
    url: 'https://textstyler.com',
    siteName: 'TextStyler',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TextStyler - Professional Text Styling SaaS Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TextStyler - AI-Powered Text Formatting SaaS',
    description: 'Increase content engagement by 340% with our professional text styling platform. Trusted by 50,000+ users.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <JsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <CookieConsentManager />
        </ThemeProvider>
      </body>
    </html>
  );
}