import styles from "./page.module.css";
import Layout from "./layout";
import NavBar from "./components/NavBar/NavBar";
import IntroText from "./components/IntroText/IntroText";
import Title from "./components/Title/Title";
import HeroImage from "./components/HeroImage/HeroImage";

export default function Home() {
  return (
    <Layout>
      <NavBar />
      <main className={styles.main}>
        <div>
          <HeroImage />
          <Title />
          <IntroText />
        </div>
      </main>
    </Layout>
  );
}
