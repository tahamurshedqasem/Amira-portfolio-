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
  title: "Amirah Sofyani | AI & Data Science Enthusiast | Full Stack Developer",
  description:
    "Portfolio of Amirah Sofyani – Computer Science student at Jazan University. Passionate about AI, Data Science, Cybersecurity, and Renewable Energy projects including AI-driven Solar Energy Efficiency.",
  keywords: [
    "Amirah Sofyani",
    "Portfolio",
    "Computer Science",
    "Full Stack Developer",
    "Python",
    "Java",
    "JavaScript",
    "Next.js",
    "React",
    "Flask",
    "Laravel",
    "MySQL",
    "Docker",
    "AI",
    "Data Science",
    "Cybersecurity",
    "Solar Energy",
    "Machine Learning",
  ],
  authors: [{ name: "Amirah Sofyani" }],
  openGraph: {
    title:
      "Amirah Sofyani | AI & Data Science Enthusiast | Full Stack Developer",
    description:
      "Portfolio of Amirah Sofyani – showcasing projects in AI, Data Science, Web Development, and Renewable Energy.",
    url: "https://amirahsofyani.com", // replace with your real domain
    siteName: "Amirah Sofyani Portfolio",
    images: [
      {
        url: "/avatar.jpg", // keep in public/
        width: 800,
        height: 600,
        alt: "Amirah Sofyani Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirah Sofyani | AI & Data Science Enthusiast",
    description:
      "Explore the portfolio of Amirah Sofyani – AI-driven projects, data science, and renewable energy solutions.",
    images: ["/avatar.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
