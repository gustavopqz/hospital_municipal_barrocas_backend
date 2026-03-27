import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db';
import heartBeatRouter from './modules/heartbeat/heartbeat.routes';

// Load dotend
dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/', heartBeatRouter);

// Port
const PORT = process.env.PORT || 3000;

// DB Connection
connectDB().then(() => {
	// Running server
	app.listen(PORT || 3000, () => {
		console.log(`🔥 Server running at port ${PORT}`);
	});
});