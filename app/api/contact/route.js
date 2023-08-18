import { connectDB } from 'app/lib/mongodb';
import { NextResponse } from 'next/server';
import Contact from 'app/models/contact';
import mongoose from 'mongoose';

export async function POST(req) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const { firstName, lastName, company, phone, email } = await req.json();
  console.log(firstName, lastName, company, phone, email);

  try {
    await connectDB();
    await Contact.create({
      firstName,
      lastName,
      company,
      phone,
      email,
    });

    return NextResponse.json({ msg: ['success'], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errors = [];
      for (let e in errors.errors) {
        errors.push(errors.errors[e].message);
      }
      return NextResponse.json({ msg: errors });
    } else {
      return NextResponse.json({ msg: ['unable to send message'] });
    }
  }
}
