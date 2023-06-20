import styles from "../app/page.module.css";
import Layout from "../app/layout";
import NavBar from "../app/components/NavBar/NavBar";

export default function About() {
  return (
    <Layout>
      <NavBar />
      <main className={styles.main}>
        <div>
          <h1>About LEY</h1>
        </div>
      </main>
    </Layout>
  );
}
