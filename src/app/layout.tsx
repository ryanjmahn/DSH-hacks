import type { Metadata } from "next";
import { Archivo, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

/* Folio type system (§3): a humanist grotesque for display + body, a quiet
   literary serif for the folio voice, mono for numerals and metadata only.
   Free stand-ins for the brief's named faces —
     Archivo    ~ Söhne Breit / Founders Grotesk  (grotesque, Akzidenz lineage,
                  variable width axis for the wide display cut)
     Newsreader ~ GT Alpina                         (literary serif, true italic)
     IBM Plex Mono                                  (kept from the prior build) */

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DSH Hacks",
  description:
    "DSH Hacks V2: a free, global, online student hackathon focused on AI x Healthcare, hosted by DeltaForge Hacks, NXT Horizon, and STEMise.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${newsreader.variable} ${plexMono.variable}`}>
      <body className="antialiased font-body">
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
      </body>
    </html>
  );
}
