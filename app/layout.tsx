import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from 'sonner'
import { AOSInit } from "@/components/aos";
    

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
  title: "DeepTrack",
  description: "AI deepfake detector",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar scrollbar-thin">
       <AOSInit />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white` }
      >
        {/* <meta property="og:title" content="DeepTrack" />
        <meta property="og:type" content="video.movie" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> */}
        <main className="font-mono  flex flex-col  space-y-4" >{children} </main>
      <Toaster />
      </body>
    </html>
  );
}
