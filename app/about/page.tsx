import Layout from "../layout";
import NavBar from "../components/NavBar/NavBar";
import styles from "../page.module.css";

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
