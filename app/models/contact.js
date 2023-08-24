import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const contactSchema = new Schema({
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

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
