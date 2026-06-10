import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import Providers from "@/app/Providers";

const font = Poppins({
  variable: "--font-poppins-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/favicon-logo.svg",
    shortcut: "/images/favicon-logo.svg",
  },
  title: {
    absolute: "Task Hub",
    template: "%s | Task Hub",
  },
  description: "task managment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.variable}  h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
