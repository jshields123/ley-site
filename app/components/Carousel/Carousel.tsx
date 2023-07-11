import styles from "./Caruosel.module.css";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className={styles.brands}>
      <div className={styles.brands__slide}>
        <Image src={"/3m.svg"} alt={"3m"} />
        <Image src={"/barstool-store.svg"} alt={"barstool-store"} />
        <Image src={"/budweiser.svg"} alt={"budweiser"} />
        <Image src={"/buzzfeed.svg"} alt={"buzzfeed"} />
        <Image src={"/forbes.svg"} alt={"forbes"} />
        <Image src={"/macys.svg"} alt={"macys"} />
        <Image src={"/menshealth.svg"} alt={"menshealth"} />
        <Image src={"/mrbeast.svg"} alt={"mrbeast"} />
      </div>
    </div>
  );
};

export { Carousel };
