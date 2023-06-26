import styles from "./HeroImage.module.css";
import Image from "next/image";
const HeroImage = () => {
  return (
    <>
      <Image
        src={"/lauren.jpeg"}
        alt="hero"
        priority={true}
        width={700}
        height={500}
      />
    </>
  );
};

export { HeroImage };
