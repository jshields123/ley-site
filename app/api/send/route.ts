import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { EmailTemplate } from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, phone, email } = await req.json();
  console.log(email, 'email');
  try {
    const data = await resend.emails.send({
      from: 'LEY <hello@leyconsulting.com.au>',
      bcc: 'LEY <hello@leyconsulting.com.au>',
      to: [`${email}`],
      subject: 'Thanks for contacting LEY',
      react: EmailTemplate({ firstName, lastName, phone }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
