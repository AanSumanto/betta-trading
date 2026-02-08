import "./globals.css";
import { Crimson_Pro, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata = {
  title: "Betta Trading | Copy Trading & Expert Advisor",
  description:
    "Layanan copy trading dan expert advisor dengan kontrol dana penuh di tangan pengguna."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${spaceGrotesk.variable} ${crimsonPro.variable}`}>
        {children}
      </body>
    </html>
  );
}
