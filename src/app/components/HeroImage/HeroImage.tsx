import styles from "../components/HeroImage.module.css";
import Image from "next/image";
const HeroImage = () => {
  return (
    <>
      <Image src={"/lauren.jpeg"} alt="hero" width={500} height={500} />
    </>
  );
};

export default HeroImage;
