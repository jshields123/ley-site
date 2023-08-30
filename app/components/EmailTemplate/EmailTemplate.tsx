import { EmailTemplateProps } from './EmailTemplate.interfaces';

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

export { EmailTemplate };
