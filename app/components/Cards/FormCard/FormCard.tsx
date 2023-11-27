import { Form } from '../../Form';
import { Card } from '../Card';
import { SubTitle } from '../../SubTitle';
import { TertiaryTitle } from '../../TertiaryTitle';

const FormCard = () => {
  return (
    <Card>
      <SubTitle text={'Contact Us'}></SubTitle>
      <TertiaryTitle text={'Reach out for a free consultation'}></TertiaryTitle>
      <Form />
    </Card>
  );
};

export { FormCard };
