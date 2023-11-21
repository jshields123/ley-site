import { NextResponse } from 'next/server';

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { GoogleAuth } from 'google-auth-library';

const auth = new GoogleAuth({
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  scopes: 'https://www.googleapis.com/auth/spreadsheets',
});
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID!, auth);

export async function POST(request: Request) {
  const { firstName, lastName, company, phone, email, id } = await request.json();

  if (!firstName || !lastName || !company || !phone || !email) {
    return NextResponse.json({ error: 'All fields are required' });
  }

  try {
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.addRow({
      id: id,
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      company: company,
      created_at: new Date(),
    });

    await rows.save();
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
