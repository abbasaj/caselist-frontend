import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Caselist Portal",
  description: "Lawyer–Client Matching Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-pixel-gray text-gray-900`}>
        <Navbar />
        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}

