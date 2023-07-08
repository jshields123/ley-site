import { HeroImage } from "../HeroImage";
import styles from "./SignUpSection.module.css";
import { FormCard } from "../Cards/FormCard/FormCard";

const SignUpSection = () => {
  return (
    <div className={styles.sign_up_section__wrapper}>
      <HeroImage />
      <div className={styles.overlay}>
        <FormCard />
      </div>
    </div>
  );
};

export { SignUpSection };
