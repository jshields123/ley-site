import styles from "./Carousel.module.css";
import Image from "next/image";

const images = [
  { src: "/3m.svg", alt: "3m" },
  { src: "/barstool-store.svg", alt: "barstool-store" },
  { src: "/budweiser.svg", alt: "budweiser" },
  { src: "/buzzfeed.svg", alt: "buzzfeed" },
  { src: "/forbes.svg", alt: "forbes" },
  { src: "/macys.svg", alt: "macys" },
  { src: "/menshealth.svg", alt: "menshealth" },
  { src: "/mrbeast.svg", alt: "mrbeast" },
];

const Carousel = () => {
  return (
    <div className={styles.brands}>
      <div className={styles.brands__slide}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            height={50}
            width={100}
          />
        ))}
      </div>
      <div className={styles.brands__slide}>
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            height={50}
            width={100}
          />
        ))}
      </div>
    </div>
  );
};

export { Carousel };
