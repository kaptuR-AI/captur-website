import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from 'sonner'
    

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CaptuR",
  description: "AI deepfake detector",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar scrollbar-thin">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white` }
      ><main className="font-mono   flex flex-col  space-y-4" >{children} </main>
      <Toaster />
      </body>
    </html>
  );
}
