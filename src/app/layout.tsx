import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anand Kumar | Data Analyst & ML Enthusiast",
  description:
    "Explore the portfolio of Anand Kumar, a Data Analyst and Machine Learning enthusiast skilled in Python, Power BI, and data visualization. Experienced in building AI-powered systems and insightful dashboards.",
  keywords: [
    "Anand Kumar",
    "Data Analyst Portfolio",
    "Machine Learning Developer",
    "Python Developer",
    "Power BI Dashboard",
    "Data Visualization",
    "Streamlit Projects",
    "AI Developer",
    "Data Science Portfolio",
  ],
  authors: [{ name: "Anand Kumar" }],

  openGraph: {
    title: "Anand Kumar | Data Analyst Portfolio",
    description:
      "Data Analyst & ML Enthusiast — Building AI-powered systems, dashboards, and data-driven solutions using Python, Power BI, and Streamlit.",
    url: "https://aaniket21.vercel.app",
    siteName: "Anand Kumar Portfolio",
    images: [
      {
        url: "/assets/og/og-image.png",
        width: 1200,
        height: 630,
        alt: "Anand Kumar Data Analyst Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/assets/logo/logo.png",
    apple: "/assets/logo/logo.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
