import type { Metadata } from "next";
import "./globals.css";
import { gotham } from '@/app/font'; 
import Navbar from "@/components/manual/Navbar";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Young Leader Program",
  description: "Shaping the leaders of tomorrow",
  icons: {
    icon: '/tab.png', 
    // You can also add other sizes if needed:
    // icon: [
    //   { url: '/tab.png' },
    //   { url: '/tab-32x32.png', sizes: '32x32', type: 'image/png' },
    //   { url: '/tab-16x16.png', sizes: '16x16', type: 'image/png' },
    // ],
    // apple: '/apple-touch-icon.png', // For Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gotham.variable}`}>
      <head>
      </head>
      <body className="font-sans bg-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}