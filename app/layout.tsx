import { ReactNode } from "react";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import { Navbar } from "./components/Navbar";
import { NAVBAR_ITEMS } from "./components/Navbar/Navbar.constants";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={styles.layout}>{children}</body>
    </html>
  );
};

export default Layout;
