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
    <Layout>
      <main className={inter.className}>
        <IntroSection />
        <div className={styles.about__container}>
          <AboutSection />
        </div>
        <div className={styles.referral_container}>
          <ReferralsSection />
        </div>
        <div className={styles.signup__container}>
          <SignUpSection />
        </div>
        <Footer text={"2023 LEY. All rights reserved."} />
      </main>
    </Layout>
  );
}
