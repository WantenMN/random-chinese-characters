import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import Credit from "@/components/credit";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Random Chinese Characters",
  description:
    "A simple web application to display randomly generated common Chinese characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" richColors />
        <Credit />
      </body>
    </html>
  );
}
