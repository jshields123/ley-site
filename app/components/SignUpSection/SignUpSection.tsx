import { HeroImage } from "../HeroImage";
import styles from "./SignUpSection.module.css";
import { Form } from "../Form";
import { Card } from "../Cards";

const SignUpSection = () => {
  return (
    <div className={styles.sign_up_section__wrapper}>
      <HeroImage />
      <div className={styles.overlay}>
        <Card>
          <h2 className={styles.form__title}>Sign Up</h2>
          <Form />
        </Card>
      </div>
    </div>
  );
};

export { SignUpSection };
