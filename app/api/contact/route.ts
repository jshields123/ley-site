import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  const { firstName, lastName, company, phone, email } = await request.json();

  if (!firstName || !lastName || !phone || !email) {
    return NextResponse.json({ error: 'All fields are required' });
  }

  const companyValue = company || 'N/A';

  try {
    await sql`
    INSERT INTO users ( First_name, Last_name, Phone, Email, Company) VALUES(${firstName}, ${lastName}, ${phone}, ${email}, ${company});
  `;

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
