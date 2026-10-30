
import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lab 5 Dashboard",
  description: "Next.js Dashboard Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
