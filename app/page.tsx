import styles from "./page.module.css";
import Layout from "./layout";
import { Footer, SignUpSection } from "./components";
import { IntroSection } from "./components/IntroSection/IntroSection";
import { AboutSection } from "./components/AboutSection/AboutSection";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <IntroSection />
        <div className={styles.about__container}>
          <AboutSection />
        </div>
        <div className={styles.form__container}>
          <SignUpSection />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
