import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Senior Software Engineer | .NET, Angular & Azure",
  description:
    "Senior software engineer building resilient .NET applications, distributed systems, and cloud-native products with Angular and Azure.",
  openGraph: {
    title: "Senior Software Engineer | .NET, Angular & Azure",
    description:
      "Building resilient applications and distributed systems that are made to evolve.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}