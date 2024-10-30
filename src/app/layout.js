import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navigation/NavBar";
import StripBanner from "@/components/banners/StripBanner";
import Footer from "@/components/Footer";

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

export const metadata = {
  title: "Indian Skill Development Academy",
  description:
    "ISDA’s Accelerated Business Executive Program empowers students and professionals with job-ready skills in business communication, analytics, and Generative AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StripBanner />
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
