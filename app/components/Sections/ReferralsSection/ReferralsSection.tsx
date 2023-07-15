import { Carousel } from "../../Carousel";
import styles from "../ReferralsSection/ReferralsSection.module.css";
import { SubTitle } from "../../SubTitle";
import { TextCard } from "../../Cards";
import Image from "next/image";

const ReferralsSection = () => {
  return (
    <div className={styles.referrals_container__wrapper}>
      <SubTitle text={"Referrals"}></SubTitle>
      <div className={styles.referral_group}>
        <div className={styles.referral_single}>
          <TextCard
            text={
              "“Lauren is great and is a true expert in her field, she helped me get a job! Life Changer!”"
            }
          />
          <Image
            className={styles.another_random_lady}
            src={"/another_random.jpeg"}
            alt={"random lady"}
            width={140}
            height={140}
          />
        </div>
        <div className={styles.referral_single}>
          <TextCard
            text={
              "“Lauren has helped us multiple times to fill positions and always does with exceptional service and delivers results!”"
            }
          />
          <Image
            className={styles.random_lady}
            src={"/random_lady.jpeg"}
            alt={"random lady"}
            width={140}
            height={140}
          />
        </div>
      </div>
      <Carousel />
    </div>
  );
};

export { ReferralsSection };
