import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/header";
import "./globals.css";

const dmSans = localFont({
  src: "./fonts/dm-sans-latin.woff2",
  variable: "--font-dm-sans",
  weight: "400 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "r/IGCSE Resource Repository",
  description:
    "Community-created IGCSE and A Level study resources from r/IGCSE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Header />
        {children}
      </body>
    </html>
  );
}
