import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { default: "Hydro AI | Intelligent Hydroponics", template: "%s | Hydro AI" },
  description: site.description,
  metadataBase: new URL("https://hydroai.in"),
  openGraph: { title: "Hydro AI", description: site.description, type: "website" },
  twitter: { card: "summary_large_image", title: "Hydro AI", description: site.description }
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><Navbar />{children}<Footer /></body></html>;
}
