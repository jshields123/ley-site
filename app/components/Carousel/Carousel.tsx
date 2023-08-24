import styles from './Carousel.module.css';
import Image from 'next/image';
import { images } from './Carousel.constants';

const Carousel = () => {
  return (
    <div className={styles.brands}>
      <div className={styles.brands__slide}>
        {images.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} height={50} width={100} />
        ))}
      </div>
      <div className={styles.brands__slide}>
        {images.map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} height={50} width={100} />
        ))}
      </div>
    </div>
  );
};

export { Carousel };
