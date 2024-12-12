import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

import { SITE_CONSTANTS } from "@/constants/site-constants";

import previewImage from "@/images/preview.png";

const rubik = localFont({
  src: "./fonts/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  weight: "100 900",
});
const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sarah Jacques - Web Developer, eCommerce Consultant",
  description: "Description",
  openGraph: {
    images: SITE_CONSTANTS.BASE_URL + previewImage.src,
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
        className={`${rubik.variable} antialiased ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
