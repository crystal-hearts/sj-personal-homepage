import type { Metadata } from "next";
import localFont from "next/font/local";
import React from "react";
import "./globals.css";

const rubik = localFont({
  src: "./fonts/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  weight: "100 900",
});

const rubikMonoOne = localFont({
  src: "./fonts/RubikMonoOne-Regular.ttf",
  variable: "--font-rubik-mono-one",
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
        className={`${rubik.variable} ${rubikMonoOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
