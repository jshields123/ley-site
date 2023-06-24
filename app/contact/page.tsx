import Layout from "../layout";
import NavBar from "../components/NavBar/NavBar";
import styles from "../page.module.css";

export default function Contact() {
  return (
    <Layout>
      <NavBar />
      <main className={styles.main}>
        <div>
          <h1>Contact Us</h1>
        </div>
      </main>
    </Layout>
  );
}
