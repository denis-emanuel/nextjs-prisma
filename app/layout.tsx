// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Stack from "@mui/material/Stack";
import Link from "next/link";

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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <div className="flex justify-between py-3 px-10 bg-black font-bold text-white">
            <div className="italic font-serif">
              <Link href="/">All Inclusive Special</Link>
            </div>
            <Stack spacing={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
                className="font-bold text-white"
              >
                <Link href="/">Principal</Link>
                <Link href="/about">Utilaje</Link>
                <Link href="/contact">Contact</Link>
              </Breadcrumbs>
            </Stack>
          </div>

          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
