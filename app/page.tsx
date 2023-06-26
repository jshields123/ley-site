import styles from "./page.module.css";
import Layout from "./layout";

import { IntroText } from "./components";
import { Title } from "./components";
import { HeroImage } from "./components";
import { Header } from "./components";
import { Footer } from "./components";
import { ImageOverlay } from "./components";

export default function Home() {
  return (
    <Layout>
      <Header />
      <main className={styles.main}>
        <div className={styles.intro__container}>
          <ImageOverlay />
          <IntroText />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
