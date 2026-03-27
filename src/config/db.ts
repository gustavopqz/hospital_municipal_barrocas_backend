import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load dotenv
dotenv.config();

const connectionString = process.env.CONNECTIONSTRING || 'mongodb://localhost:27107/hmb'

export const connectDB = async (): Promise<void> => {
    try {
        await mongoose.connect(connectionString);
        console.log('🌿 MongoDB connected succesfully');
    } catch (error) {
        console.log(`Error connecting to the database: ${error}`);
        process.exit(1);
    }
}