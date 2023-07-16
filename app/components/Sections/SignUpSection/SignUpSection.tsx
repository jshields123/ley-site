import styles from "./SignUpSection.module.css";
import { FormCard } from "../../Cards/FormCard/FormCard";
import { ImageOverlay } from "../../ImageOverlay";

const SignUpSection = () => {
  return (
    <div className={styles.sign_up_section__wrapper}>
      <ImageOverlay
        imageSrc={"/meeting.jpg"}
        alt={"business meeting"}
        type={"form"}
      >
        <div className={styles.overlay}>
          <FormCard />
        </div>
      </ImageOverlay>
    </div>
  );
};

export { SignUpSection };