import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import LayoutShell from "./components/LayoutShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kura House",
  description:
    "Providing shelter, education, and care for vulnerable children and youth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <link
          href="/lib/animate/animate.min.css"
          precedence="default"
          rel="stylesheet"
        />
        <link
          href="/lib/owlcarousel/assets/owl.carousel.min.css"
          precedence="default"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="/css/bootstrap.min.css"
          precedence="default"
        />
        <link rel="stylesheet" href="/css/style.css" precedence="default" />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <LayoutShell>{children}</LayoutShell>
        </body>

        <script async src="/lib/jquery-3.4.1.min.js"></script>
        <script async src="/lib/js/bootstrap.bundle.min.js"></script>
        <script async src="/lib/wow/wow.min.js"></script>
        <script async src="/lib/easing/easing.min.js"></script>
        <script async src="/lib/waypoints/waypoints.min.js"></script>
        <script async src="/lib/owlcarousel/owl.carousel.min.js"></script>
        <script async src="/lib/parallax/parallax.min.js"></script>

        <script async src="/js/main.js"></script>
      </html>
    </ClerkProvider>
  );
}
