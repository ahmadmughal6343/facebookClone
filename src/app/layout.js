import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  title: {
    default: "Web Facebook",
    template: "%s — Facebook Clone UI",
  },

  description:
    "A modern Facebook-inspired social media interface showcasing multiple responsive pages including Home, Reels, Marketplace, Gaming, and Groups.",

  keywords: [
    "facebook clone",
    "social media ui",
    "frontend project",
    "reels ui",
    "marketplace ui",
    "gaming ui",
    "groups ui",
  ],

  openGraph: {
    type: "website",
    siteName: "Facebook Clone UI",
    url: "/",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/facebook.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
