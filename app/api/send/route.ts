import { NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any, res: NextApiResponse) {
  try {
    const { firstName, lastName, company, email, phone } = req.body;
    const data = await resend.emails.send({
      from: 'LEY <lauren-yates@live.co.uk>',
      to: email,
      subject: 'Thanks for contacting LEY',
      react: EmailTemplate({ firstName, lastName, company, phone, email }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
