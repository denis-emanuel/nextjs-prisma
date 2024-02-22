// These styles apply to every route in the application
import { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import "@/styles/globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const title = "AIS";
const description = "Vanzare utilaje";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-white text-black`}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Navbar />

          <main className="relative overflow-hidden">{children}</main>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
