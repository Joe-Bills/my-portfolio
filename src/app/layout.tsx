import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ParticleField from "@/components/ParticleField";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph Billa — Full-Stack Developer",
  description:
    "Portfolio of Joseph Billa — Full-Stack Developer and FX, Stocks & Crypto Trader. Building dynamic, responsive web applications with modern technology.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ParticleField />
        <NavBar />
        <main className="container" style={{ minHeight: "70vh" }}>
          {children}
        </main>
        <footer className="footer">
          <div className="container">
            <p>
              © {new Date().getFullYear()} <span className="code">Joseph Billa</span> —
              Designed &amp; built with <span className="heart">♥</span> using{" "}
              <span className="code">Next.js</span> +{" "}
              <span className="code">React</span>
            </p>
            <p style={{ marginTop: 6, fontSize: 12.5 }}>
              Full-Stack Developer | FX, Stocks &amp; Crypto Trader
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}