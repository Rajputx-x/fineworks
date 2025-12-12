"use client";
import Header from "@/app/ui/Header";
import CustomCursor from "@/app/ui/CustomCursor";
import Footer from "@/app/ui/Footer";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Fine Work Advertisements" />
        <meta name="description" content="Fine Work Advertisements - Premium Signage & Laser Cutting Solutions in Lahore. Specializing in 3D Acrylic & Metal Lettering, Custom Neon Flex Signage, Laser-Cut Interior Decor, and Commercial Advertising Boards. Contact us on WhatsApp: 03206316386" />
        <meta name="keywords" content="signage Lahore, laser cutting Lahore, 3D acrylic lettering, metal signage, neon signs, custom signage, advertising boards, lightbox signs, interior decor, cafe decor, Fine Work Advertisements" />
        <meta property="og:title" content="Fine Work Advertisements - Premium Signage & Laser Cutting in Lahore" />
        <meta property="og:description" content="Transform your brand with high-precision laser cutting and custom fabrication. We craft stunning visual displays from premium acrylic and metal." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fine Work Advertisements - Premium Signage Solutions" />
        <meta name="twitter:description" content="Premium Signage & Laser Cutting Solutions in Lahore. 3D Lettering, Neon Signs, Interior Decor & More." />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <title>Fine Work Advertisements - Premium Signage & Laser Cutting Solutions in Lahore</title>
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
