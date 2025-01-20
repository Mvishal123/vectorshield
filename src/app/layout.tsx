import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Poppins = localFont({
  src: [
    { path: "/fonts/Poppins-Light.ttf", weight: "300" },
    { path: "/fonts/Poppins-Regular.ttf", weight: "400" },
    { path: "/fonts/Poppins-Medium.ttf", weight: "500" },
    { path: "/fonts/Poppins-SemiBold.ttf", weight: "600" },
    { path: "/fonts/Poppins-Bold.ttf", weight: "700" },
  ],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Vectorshield",
  description: "Security layer for AI Applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
