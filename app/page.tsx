import styles from "./page.module.css";
import { Hind } from "next/font/google";
import Layout from "./layout";
import {
  Footer,
  ReferralsSection,
  SignUpSection,
  IntroSection,
  AboutSection,
} from "./components";

const hind = Hind({
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  return (
    <>
      <Layout>
        <main className={hind.className}>
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
