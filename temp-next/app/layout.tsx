import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flash Narrative — Enterprise PR Intelligence",
  description:
    "Real-time narrative intelligence and systemic risk monitoring for enterprise communications teams.",
  authors: [{ name: "Flash Narrative" }],
  themeColor: "#0A0A0B",
  openGraph: {
    title: "Flash Narrative — Enterprise PR Intelligence",
    description: "Bloomberg-grade narrative intelligence for global enterprises.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}