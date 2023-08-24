import styles from './Carousel.module.css';
import Image from 'next/image';

const images = [
  { src: '/icons/3m.svg', alt: '3m' },
  { src: '/icons/barstool-store.svg', alt: 'barstool-store' },
  { src: '/icons/budweiser.svg', alt: 'budweiser' },
  { src: '/icons/buzzfeed.svg', alt: 'buzzfeed' },
  { src: '/icons/forbes.svg', alt: 'forbes' },
  { src: '/icons/macys.svg', alt: 'macys' },
  { src: 'icons/menshealth.svg', alt: 'menshealth' },
  { src: 'icons/mrbeast.svg', alt: 'mrbeast' },
];

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
