import styles from "./page.module.css";
import Layout from "./layout";
import {
  Footer,
  ReferralsSection,
  SignUpSection,
  IntroSection,
  AboutSection,
} from "./components";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <IntroSection />
        <div className={styles.about__container}>
          <AboutSection />
        </div>
        <ReferralsSection />
        <div className={styles.form__container}>
          <SignUpSection />
        </div>
      </main>
      <Footer text={"2023 LEY. All rights reserved."} />
    </Layout>
  );
}
