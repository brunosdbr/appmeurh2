import express from 'express';
import Arquivo from '../models/Arquivo.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Rota protegida: lista apenas os arquivos do usuário autenticado
router.get('/', authMiddleware, async (req, res) => {
  try {
    const arquivos = await Arquivo.find({ usuarioId: req.user.id });
    res.json(arquivos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar arquivos' });
  }
});

export default router;