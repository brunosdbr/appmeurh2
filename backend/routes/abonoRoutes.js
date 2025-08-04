import express from 'express';
import { criarAbono } from '../controllers/abonoController.js';

const router = express.Router();

router.post('/', criarAbono); // POST /api/abonos

export default router;