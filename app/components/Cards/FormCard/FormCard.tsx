import styles from "./FormCard.module.css";
import { Form } from "../../Form";
import { Card } from "../Card";

const FormCard = () => {
  return (
    <Card>
      <h2>Contact Us</h2>
      <Form />
    </Card>
  );
};

export { FormCard };
