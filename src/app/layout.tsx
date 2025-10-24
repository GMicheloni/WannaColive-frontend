import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wanna App",
  description: "Aplicacion para gestionar WannaColive",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
