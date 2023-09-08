import express from 'express';
import cors from 'cors';
import dataRouter from './routes/data.routes.js';
const app = express();
app.use(express.json());
app.use(cors());
app.use('', dataRouter);
export default app;
