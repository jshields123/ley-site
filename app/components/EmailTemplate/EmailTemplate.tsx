import { IContact } from '@/app/interfaces/common/common.interfaces';

const EmailTemplate = ({ firstName, lastName, company, phone }: IContact) => (
  <div>
    <h1>
      Welcome, {firstName} {lastName}!
    </h1>
    <p>Thank you for registering with LEY.</p>
    <p>
      We will contact you on {phone} to discuss partnering with yourself and {company}
    </p>
  </div>
);

export { EmailTemplate };
