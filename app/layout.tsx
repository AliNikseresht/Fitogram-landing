import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitogram-landing.vercel.app/"),
  title: {
    default: "Fitogram | Fitness Journeys",
    template: "%s | Fitogram",
  },
  description:
    "Achieve your fitness goals with Fitogram. Personalized plans, expert guidance, and motivation to stay on track.",
  keywords: [
    "Fitogram",
    "Fitness",
    "Workout Plans",
    "Personal Training",
    "Health",
    "Nutrition",
    "Wellness",
    "Gym",
  ],
  authors: [
    { name: "Ali Nikseresht", url: "https://fitogram-landing.vercel.app/" },
  ],
  creator: "Fitogram",
  themeColor: "#ffffff",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitogram-landing.vercel.app/",
    siteName: "Fitogram",
    title: "Fitogram | Fitness Journeys",
    description:
      "Transform your fitness lifestyle with personalized training and expert support at Fitogram.",
    images: [
      {
        url: "https://fitogram-landing.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fitogram Hero Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fitogram | Fitness Journeys",
    description:
      "Achieve your fitness goals with expert training plans and personalized guidance at Fitogram.",
    creator: "@fitogram",
    images: ["https://fitogram-landing.vercel.app/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
