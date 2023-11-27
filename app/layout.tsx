import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';

import styles from './layout.module.css';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className={styles.html}>
      <title>LEY Consulting - Sales & Career Coach, Tailored Solutions</title>
      <Head>
        <meta
          name="description"
          content="Empowering Professionals, Elevating Businesses | Sales & Career Coach | Author of TalentBites | Tailored Solutions"
          key={'description'}
        />
      </Head>
      <body className={styles.layout}>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default Layout;
