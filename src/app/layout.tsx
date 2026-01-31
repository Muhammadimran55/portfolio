import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muhammad Imran | Portfolio",
  description: "Professional portfolio of Muhammad Imran",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <h2>Muhammad Imran</h2>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>

        <div className="container">{children}</div>

        <footer className="footer">
          © {new Date().getFullYear()} Muhammad Imran. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
