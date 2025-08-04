import express from 'express';
import multer from 'multer';
import Arquivo from '../models/Arquivo.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router(); // ✅ Agora declarado antes de usar

// Configuração do armazenamento local
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

// Rota de upload com autenticação
router.post('/', authMiddleware, upload.single('arquivo'), async (req, res) => {
  try {
    const novoArquivo = new Arquivo({
      nome: req.file.originalname,
      tipo: req.body.tipo, // 'empresa' ou 'pessoal'
      usuarioId: req.user?.id || null, // se estiver autenticado
    });

    await novoArquivo.save();
    res.status(201).json({ message: 'Arquivo salvo com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao salvar arquivo' });
  }
});

export default router;