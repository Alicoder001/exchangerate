import express from 'express';
import { getAll } from '../controller/data.controller.js';
const dataRouter = express.Router();
dataRouter.get('/all',getAll);
export default dataRouter;
