import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Footer } from "./components";
import { Header } from "./components";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
};

export default Layout;
