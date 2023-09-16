import { Schema, Document, Model, model } from 'mongoose';

export interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  createdAt?: Date;
}

const contactSchema = new Schema<any>({
  firstName: { type: String, required: [true, 'First name is required'] },
  lastName: { type: String, required: [true, 'Last name is required'] },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email'],
  },
  phone: { type: String, required: [true, 'Phone is required'] },
  company: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const Contact: Model<any> = model<any>('Contact', contactSchema);
