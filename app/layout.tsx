import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "FAMES Hawaii - Mentorship & Entrepreneurship",
  description: "Empowering young entrepreneurs through mentoring, leadership, networking, and fundraising",
  generator: "v0.app",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: "FAMES Hawaii - Mentorship & Entrepreneurship",
    description: "Empowering young entrepreneurs through mentoring, leadership, networking, and fundraising",
    url: "https://www.fameshawaii.org/",
    siteName: "FAMES Hawaii",
    images: [
      {
        url: "https://www.fameshawaii.org/images/Fames-OpenGraph.webp",
        width: 1200,
        height: 630,
        alt: "FAMES Hawaii",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAMES Hawaii - Mentorship & Entrepreneurship",
    description: "Empowering young entrepreneurs through mentoring, leadership, networking, and fundraising",
    images: ["https://www.fameshawaii.org/images/Fames-OpenGraph.webp"],
  },
  metadataBase: new URL("https://www.fameshawaii.org"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
