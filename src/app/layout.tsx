import type { Metadata } from "next";
import { Inter, Poppins, Syne } from "next/font/google";
import "./globals.css";
import UIProvider from "./provider";
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "500"],
  variable: "--font-syne",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Furnuture",
  description: "Make a room comfortable & elegant",
  authors: [{ name: "AVANCODER", url: "https://t.me/avancoder" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${syne.variable} ${poppins.variable}`}
      >
        <UIProvider>
          <TheNavbar />
          {children}
          <TheFooter />
        </UIProvider>
      </body>
    </html>
  );
}
