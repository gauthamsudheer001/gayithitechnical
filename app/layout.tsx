import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Roboto } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Gayithi Technical Services | HVAC Solutions",
  description:
    "Professional HVAC and technical services including AC installation, maintenance, repair, GI/PI ducting, and ventilation systems for residential and commercial clients.",
  keywords:
    "HVAC, AC installation, AC maintenance, AC repair, ducting, ventilation, Gayithi Technical Services",
  icons: {
    icon: "/images/gayithi-favicon.png",
    apple: "/images/gayithi-favicon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a73e8",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

