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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <main className={inter.className}>
          <div className={`${styles.intro__container} ${styles.hidden}`}>
            <IntroSection />
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
