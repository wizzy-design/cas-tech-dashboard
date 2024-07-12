import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PURITY UI DASHBOARD",
  description: "Cas-tech interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-helvetica">{children}</body>
    </html>
  );
}
