import styles from "./page.module.css";
import Layout from "./layout";
import Header from "./components/Header/Header";
import IntroText from "./components/IntroText/IntroText";
import Title from "./components/Title/Title";
import HeroImage from "./components/HeroImage/HeroImage";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <Layout>
      <Header />
      <main className={styles.main}>
        <div>
          <HeroImage />
          <Title />
          <IntroText />
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
