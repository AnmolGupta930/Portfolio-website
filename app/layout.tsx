import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const primary = IBM_Plex_Sans({
  weight: ["600", "500"],
  variable: "--font-primary",
});

const secondary = IBM_Plex_Mono({
  weight: ["400"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Anmol. | Design Engineer",
  description: "Frontend with foresight—designing today for tomorrow's web.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "UI/UX Designer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Anmol Gupta" }],
  creator: "Anmol Gupta",
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#ffffff",
  openGraph: {
    title: "Anmol. | Design Engineer",
    description: "Frontend with foresight—designing today for tomorrow's web.",
    url: "https://www.anmol.digital/",
    siteName: "Anmol Gupta Portfolio",
    images: [
      {
        url: "https://portfolio-website-anmol-gupta.vercel.app/og-img.png", //image
        width: 1200,
        height: 630,
        alt: "Anmol Gupta Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@anmol__003",
    title: "Anmol. | Design Engineer",
    description: "Frontend with foresight—designing today for tomorrow's web.",
    creator: "@anmol__003",
    images: ["https://portfolio-website-anmol-gupta.vercel.app/og-img.png"], //image
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${primary.variable} ${secondary.variable} antialiased`}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
