import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter} from "next/font/google"
import { Toaster } from 'sonner';

const inter = Inter({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Altbucks",
  description: "Get Paid for Simple Tasks Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
