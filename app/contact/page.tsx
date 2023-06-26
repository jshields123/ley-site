import Layout from "../layout";
import styles from "../page.module.css";
import { Header } from "../components";
import { Footer } from "../components";

export default function Contact() {
  return (
    <Layout>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>Contact Us</h1>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
