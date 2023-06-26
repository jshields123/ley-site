import Layout from "../layout";
import { Header } from "../components";
import { Footer } from "../components";

import styles from "../page.module.css";

export default function About() {
  return (
    <Layout>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>About LEY</h1>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
