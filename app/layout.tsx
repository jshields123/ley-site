import { ReactNode } from "react";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className={styles.html}>
      <title>LEY Consulting</title>
      <body className={styles.layout}>{children}</body>
    </html>
  );
};

export default Layout;
