import { Geist, Geist_Mono } from "next/font/google";
import "@/app/_styles/globals.css";
import AOSProvider from "@/app/_components/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Edvent',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth md:scroll-auto">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('https://i.pinimg.com/736x/89/da/43/89da43826199b69433b71cdadbd31fb4.jpg')] bg-contain md:bg-fixed bg-size-[auto_auto] md:bg-repeat-x `}
      >
        <AOSProvider />
        {children}
      </body>
    </html>
  );
}
