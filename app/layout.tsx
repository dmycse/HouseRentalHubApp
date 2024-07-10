import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

import Header from "./components/header/Header";
import Modal from "./components/modals/Modal";

const nunitoFont = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HouseRentalHub",
  description: "House rental for holiday",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={nunitoFont.className}>
        <Modal isOpen title="Hello World!" />
        <Header/>
        {children}
      </body>
    </html>
  );
}
