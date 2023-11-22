// import { GoogleSpreadsheet } from 'google-spreadsheet';
// import { GoogleAuth } from 'google-auth-library';

// const auth = new GoogleAuth({
//   keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
//   scopes: 'https://www.googleapis.com/auth/spreadsheets',
// });
// const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID!, auth);

// export async function POST(request: Request) {
//   const { firstName, lastName, company, phone, email, id } = await request.json();

//   if (!firstName || !lastName || !phone || !email) {
//     return NextResponse.json({ error: 'All fields are required' });
//   }

//   const companyValue = company || 'N/A';

//   try {
//     await doc.loadInfo();
//     const sheet = doc.sheetsByIndex[0];

//     const rows = await sheet.addRow({
//       id: id,
//       first_name: firstName,
//       last_name: lastName,
//       phone: phone,
//       email: email,
//       company: companyValue,
//       created_at: new Date(),
//     });

//     await rows.save();
//     return NextResponse.json(rows);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }

import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function POST(request: Request) {
  const { firstName, lastName, company, phone, email } = await request.json();

  if (!firstName || !lastName || !phone || !email) {
    return NextResponse.json({ error: 'All fields are required' });
  }

  const companyValue = company || 'N/A';

  try {
    // await sql`
    // INSERT INTO users (Id, First_name, Last_name, Phone, email,)
    // VALUES( "jack", "bob", "463745674", "aeingekng@mee.com");
    // `;
    await sql`
    INSERT INTO users ( First_name, Last_name, Phone, Email,)
    VALUES( "jack", "bob", "463745674", "aeingekng@mee.com");
  `;

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
