"use client";
import styles from "./page.module.css";
import { Inter } from "next/font/google";
import Layout from "./layout";
import {
  Footer,
  ReferralsSection,
  SignUpSection,
  IntroSection,
  AboutSection,
} from "./components";
import { useEffect } from "react";
import LinkedInIcon from "./components/Icons/LinkedInIcon";

const hind = Inter({
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
        <main className={hind.className}>
          <div className={`${styles.intro__container} ${styles.hidden}`}>
            <IntroSection />
            <LinkedInIcon />
          </div>
          <div className={`${styles.about__container} ${styles.hidden}`}>
            <AboutSection />
          </div>
          <div className={`${styles.referral__container} ${styles.hidden}`}>
            <ReferralsSection />
          </div>
          <div className={`${styles.signup__container} ${styles.hidden}`}>
            <SignUpSection />
          </div>
          <Footer text={"2023 LEY. All rights reserved."} />
        </main>
      </Layout>
    </>
  );
}
