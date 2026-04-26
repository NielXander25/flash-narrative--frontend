import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flash Narrative — Enterprise PR Intelligence",
  description:
    "Real-time narrative intelligence and systemic risk monitoring for enterprise communications teams.",
  authors: [{ name: "Flash Narrative" }],
  openGraph: {
    title: "Flash Narrative — Enterprise PR Intelligence",
    description: "Bloomberg-grade narrative intelligence for global enterprises.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
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
