"use client";
import styles from "./page.module.css";
import "./globals.css";
import { Montserrat } from "next/font/google";
import Layout from "./layout";
import {
  Footer,
  ReferralsSection,
  SignUpSection,
  IntroSection,
  AboutSection,
} from "./components";
import { useEffect } from "react";
import { ServicesSection } from "./components/Sections";

const hind = Montserrat({
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        } else {
          entry.target.classList.remove(styles.show);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${styles.hidden}`);
    hiddenElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);
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
          <Footer text={"2023 LEY. All rights reserved."} />
        </main>
      </Layout>
    </>
  );
}
