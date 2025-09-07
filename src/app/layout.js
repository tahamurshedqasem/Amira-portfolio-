import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taha Murshed | Full Stack Web Developer & ML Enthusiast",
  description:
    "Portfolio of Taha Murshed Qasem Mahdi – Full Stack Web Developer, Machine Learning Enthusiast, and Data Analyst. Explore my projects in Next.js, Laravel, Flask, and AI solutions.",
  keywords: [
    "Taha Murshed",
    "Portfolio",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Laravel",
    "Flask",
    "Machine Learning",
    "Data Analyst",
    "Web Development",
  ],
  authors: [{ name: "Taha Murshed Qasem Mahdi" }],
  openGraph: {
    title: "Taha Murshed | Full Stack Web Developer & ML Enthusiast",
    description:
      "Portfolio of Taha Murshed Qasem Mahdi – showcasing projects in Next.js, Laravel, Flask, and Machine Learning.",
    url: "https://tahamurshed.com", // replace with your real domain
    siteName: "Taha Murshed Portfolio",
    images: [
      {
        url: "/avatar.jpg", // should be in public/
        width: 800,
        height: 600,
        alt: "Taha Murshed Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taha Murshed | Full Stack Developer & ML Enthusiast",
    description:
      "Explore the portfolio of Taha Murshed – Full Stack Developer & Machine Learning Enthusiast.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
