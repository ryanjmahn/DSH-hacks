import type { Metadata } from "next";
import { Amarante } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const amarante = Amarante({
  subsets: ["latin"],
  weight: "400",
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
    <html lang="en" className={amarante.className}>
      <body className="antialiased">
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
