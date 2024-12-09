import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";
import NavBar from "@/components/Header/NavBar";



export const metadata: Metadata = {
  title: "VideoStream",
  description: "VideoStream - videos sharing platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
        <NavBar/>
        {children}
        </AppRouterCacheProvider> 
      </body>
    </html>
  );
}
