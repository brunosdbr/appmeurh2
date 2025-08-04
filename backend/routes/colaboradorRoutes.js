import express from 'express';
import { listarColaboradores, criarColaborador } from '../controllers/colaboradorController.js';

const router = express.Router();

router.get('/', listarColaboradores);
router.post('/', criarColaborador);

export default router;