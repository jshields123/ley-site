interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  company: string;
  phone: string;
}

const EmailTemplate = ({ firstName, lastName, company, phone }: EmailTemplateProps) => (
  <div>
    <h1>
      Welcome, {firstName} {lastName}!
    </h1>
    <p>Thank you for registering with LEY.</p>
    <p>
      We will contact you on {phone} to discuss partnering with yourself and {!company ? 'your company' : company}.
    </p>
    <p>Kind regards,</p>
    <p>The LEY Team</p>
  </div>
);

export { EmailTemplate };
