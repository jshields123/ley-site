'use client';
import styles from './page.module.css';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Layout from './layout';
import { Footer, ReferralsSection, SignUpSection, IntroSection, AboutSection } from './components';
import { useEffect, useRef, useState } from 'react';
import { ServicesSection } from './components/Sections';

const hind = Montserrat({
  subsets: ['latin'],
  weight: '300',
});

export default function Home() {
  const observer = useRef<IntersectionObserver | null>(null);
  const [animatedElements, setAnimatedElements] = useState<Set<Element>>(new Set());

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains(styles.show) && !animatedElements.has(entry.target)) {
            entry.target.classList.add(styles.show);
            setAnimatedElements((prevSet) => new Set(prevSet.add(entry.target)));
          }
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
    hiddenElements.forEach((element) => {
      observer.current!.observe(element);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [animatedElements]);

  return (
    <>
      <Layout>
        <main className={`${hind.className} ${styles.main}`}>
          <div className={`${styles.container} ${styles.hidden}`}>
            <IntroSection />
          </div>
          <div className={`${styles.container} ${styles.hidden}`}>
            <ServicesSection />
          </div>
          <div className={`${styles.container} ${styles.hidden}`}>
            <AboutSection />
          </div>
          <div className={`${styles.container} ${styles.hidden}`}>
            <ReferralsSection />
          </div>
          <div className={`${styles.container} ${styles.hidden}`}>
            <SignUpSection />
          </div>
          <Footer text={'2023 LEY. All rights reserved.'} />
        </main>
      </Layout>
    </>
  );
}
