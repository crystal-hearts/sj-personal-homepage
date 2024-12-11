import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

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
  title: "Sarah Jacques Personal Site",
  description: "Description",
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
