import styles from "./page.module.css";
import Layout from "./layout";
import { Footer } from "./components";
import { ImageOverlay } from "./components";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.intro__container}>
          <ImageOverlay />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
