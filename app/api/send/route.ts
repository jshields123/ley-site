import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  const { firstName, lastName, company, phone, email } = await req.json();
  console.log(email, 'email');
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: [`${email}`],
      subject: 'Thanks for contacting LEY',
      react: EmailTemplate({ firstName, lastName, company, phone }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
