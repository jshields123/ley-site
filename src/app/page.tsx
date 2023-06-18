import styles from "./page.module.css";
import Layout from "./layout";

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div>
          <h1>LEY Consulting</h1>
        </div>
      </main>
    </Layout>
  );
}
