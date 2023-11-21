import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: any) {
  const { firstName, lastName, company, phone, email } = await req.json();
  console.log(email, 'email');
  try {
    const data = await resend.emails.send({
      from: 'LEY <hello@leyconsulting.com.au>',
      bcc: [`${process.env.LAURENS_EMAIL}`],
      to: [`${email}`],
      subject: 'Thanks for contacting LEY',
      react: EmailTemplate({ firstName, lastName, company, phone }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
