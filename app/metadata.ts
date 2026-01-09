import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://xeedo.in'),
  title: {
    default: "Xeedo - Innovative Technology Solutions | Semiconductor, Embedded, IoT & Software Engineering",
    template: "%s | Xeedo"
  },
  description: "Leading technology solutions provider specializing in semiconductor design, embedded systems, IoT products, and software engineering. 150+ years of combined experience across 5 global offices.",
  keywords: [
    "semiconductor design",
    "embedded systems",
    "IoT solutions",
    "software engineering",
    "VLSI design",
    "ASIC design",
    "FPGA development",
    "technology consulting",
    "product development",
    "innovation",
    "Bangalore",
    "Malaysia",
    "Hyderabad",
    "Mumbai",
    "USA"
  ],
  authors: [{ name: "Xeedo Team" }],
  creator: "Xeedo",
  publisher: "Xeedo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  classification: "Technology Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xeedo.in",
    title: "Xeedo - Innovative Technology Solutions",
    description: "Leading technology solutions provider specializing in semiconductor design, embedded systems, IoT products, and software engineering.",
    siteName: "Xeedo",
    images: [
      {
        url: "/Xeedo-logo.png",
        width: 1200,
        height: 630,
        alt: "Xeedo - Technology Solutions",
      },
      {
        url: "/SS.jpeg",
        width: 1200,
        height: 630,
        alt: "Semiconductor Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xeedo - Innovative Technology Solutions",
    description: "Leading technology solutions provider specializing in semiconductor design, embedded systems, IoT products, and software engineering.",
    images: ["/Xeedo-logo.png"],
    creator: "@xeedo",
    site: "@xeedo",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      bing: "your-bing-site-verification-code",
    },
  },
  alternates: {
    canonical: "https://xeedo.in",
    languages: {
      'en-US': 'https://xeedo.in',
    },
  },
  other: {
    'theme-color': '#1e3a8a',
    'msapplication-TileColor': '#1e3a8a',
    'msapplication-config': '/browserconfig.xml',
  },
};
