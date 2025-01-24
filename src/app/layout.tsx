// src/app/layout.tsx
import { ReactNode } from "react";
import Navbar from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Aileron:wght@400;600&display=swap"
          />
        </head>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default Layout;
