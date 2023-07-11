import { Carousel } from "../../Carousel";
import styles from "../ReferralsSection/ReferralsSection.module.css";

const ReferralsSection = () => {
  return (
    <div className={styles.referrals_container__wrapper}>
      <Carousel />
    </div>
  );
};

export { ReferralsSection };
