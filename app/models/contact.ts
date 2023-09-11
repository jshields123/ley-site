import { Schema, Document, Model, model } from 'mongoose';

interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  createdAt?: Date;
}

const contactSchema = new Schema<IContact>({
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

const Contact: Model<IContact> = model<IContact>('Contact', contactSchema);

export default Contact;
