import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

const serviceAccountAuth = new JWT({
  // env var values here are copied from service account credentials generated by google
  // see "Authentication" section in docs for more info
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const doc = new GoogleSpreadsheet('11BGL3T6sqrvtUdNKveqI-KnGE59N3QYkpJ2Ht5CHWd4', serviceAccountAuth);

export async function POST(req: any) {
  const { firstName, lastName, company, phone, email } = await req.json();
  try {
    const doc = new GoogleSpreadsheet('11BGL3T6sqrvtUdNKveqI-KnGE59N3QYkpJ2Ht5CHWd4', serviceAccountAuth);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.addRow({
      first_name: firstName,
      last_name: lastName,
      company: company,
      phone: phone,
      email: email,
      created_at: new Date(),
    });
    await rows.save();
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

// const spreadsheetId = process.env.GOOGLE_SHEETS_ID; // Replace with your spreadsheet ID
// const range = 'Sheet1!A1:E1'; // Specify the range where you want to append data
// const valueInputOption = 'RAW'; // Choose an appropriate valueInputOption (e.g., RAW, USER_ENTERED)
// const apiKey = process.env.GOOGLE_SHEETS_API_KEY; // Paste your API key here
// const appendUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:append?valueInputOption=${valueInputOption}&key=${apiKey}`;

// Define the data you want to append
// const rowData = [
//   ['TEST1', 'TEST2', 'TEST3', 'TEST4', 'TEST5'], // Replace with your data
// ];

// Define the request body
// const requestBody = {
//   values: rowData,
// };

// Make the POST request to append data
// fetch(appendUrl, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(requestBody),
// })
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error('Error appending data');
//     }
//   })
//   .then((data) => {
//     console.log('Data appended successfully:', data);
//   })
//   .catch((error) => {
//     console.error('Error appending data:', error);
//   });

// export async function POST(req: any, res: NextApiResponse) {
//   try {
//     fetch(appendUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(requestBody),
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Error appending data');
//         }
//       })
//       .then((data) => {
//         console.log('Data appended successfully:', data);
//       })
//       .catch((error) => {
//         console.error('Error appending data:', error);
//       });
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
