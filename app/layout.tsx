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
    "Layanan copy trading dan expert advisor dengan kontrol dana penuh di tangan pengguna.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
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
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-name">PT. Bettazon Sukses Indonesia</div>
              <p className="footer-address">
                Jl. Husin Basri Perumahan Grand Berdikari Blok G.16 Rt/Rw. 005/002
                Kel. Sukamulya Kec. Sematang Borang.
              </p>
              <a
                className="footer-link"
                href="https://wa.me/6282186287929?text=Halo%20admin%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20EA%20dan%20copy%20trading.%20Mohon%20info%20jadwal%20konsultasi%20yang%20tersedia."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp: 0821 8628 7929
              </a>
            </div>
            <div className="footer-links">
              <a className="footer-link" href="/terms">
                Syarat & Ketentuan
              </a>
              <a className="footer-link" href="/pks">
                Ringkasan PKS
              </a>
              <a className="footer-link" href="/setup">
                Panduan Setup
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
