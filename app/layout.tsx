import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunitoFont = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HouseRentalHub",
  description: "House rental for holiday",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>{children}</body>
    </html>
  );
}
