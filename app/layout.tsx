import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Superclear",
  description: "Research for human optimization.",
  openGraph: {
    title: "Superclear",
    description: "Research for human optimization.",
    images: [
      {
        url: "https://superclear.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Superclear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Superclear",
    description: "Research for human optimization.",
    images: ["https://superclear.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}