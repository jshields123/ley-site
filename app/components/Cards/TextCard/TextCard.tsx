import styles from "./TextCard.module.css";
import { Card } from "../Card";

interface TextCardProps {
  text: string;
}

const TextCard = ({ text }: TextCardProps) => {
  return (
    <Card>
      <p>{text}</p>
    </Card>
  );
};

export { TextCard };
