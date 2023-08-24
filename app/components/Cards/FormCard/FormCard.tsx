import styles from './FormCard.module.css';
import { Form } from '../../Form';
import { Card } from '../Card';
import { SubTitle } from '../../SubTitle';

const FormCard = () => {
  return (
    <Card>
      <SubTitle text={'Contact Us'}></SubTitle>
      <Form />
    </Card>
  );
};

export { FormCard };
