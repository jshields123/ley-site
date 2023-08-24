import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import styles from './layout.module.css';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className={styles.html}>
      <Head>
        <meta
          name="description"
          content="Empowering Professionals, Elevating Businesses | Your trusted partner for recruitment services, sales consulting and HR software consulting"
          key={'description'}
        />
        <title>LEY Consulting - Recruitment, Sales and HR Specialist</title>
      </Head>
      <body className={styles.layout}>{children}</body>
    </html>
  );
};

export default Layout;
