import type { Metadata }    from "next";
import { Inder, Calistoga } from "next/font/google"
import { twMerge }          from "tailwind-merge";
// css
import "./globals.css";

const inter     = Inder({subsets: ['latin'], variable: '--font-sans', weight: ["400"]});
const calistoga = Calistoga({subsets: ['latin'], variable: '--font-serif', weight: ["400"]});


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio page",
};

export default function RootLayout ({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
      className={twMerge(
        inter.variable,
        calistoga.variable,
        'bg-gray-900 text-white antialiased font-sans',
      )}
    >
    {children}
    </body>
    </html>
  );
}
