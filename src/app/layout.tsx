import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Inter} from "next/font/google"
import {ToastContainer} from "react-toastify"

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
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          theme="light"
        />
      </body>
    </html>
  );
}
