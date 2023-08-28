import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI as string);
      console.log('MongoDB Connected');
    }
  } catch (error) {
    console.error(error);
  }
};

export { connectDB };
