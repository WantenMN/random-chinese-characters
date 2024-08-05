import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";

import Credit from "@/components/credit";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" richColors />
          <Credit />
        </ThemeProvider>
      </body>
    </html>
  );
}
