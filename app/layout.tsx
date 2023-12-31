// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AuthStatus from "@/components/auth-status";
import { Suspense } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

//TODO update
const title = "Titlu";
const description = "Descriere";

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
      <body className={inter.variable}>
        <Toaster />
        <Suspense fallback="Loading...">
          <AuthStatus />
        </Suspense>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
