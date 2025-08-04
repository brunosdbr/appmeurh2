import express from 'express';
import Usuario from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await Usuario.findOne({ email });
  if (!usuario) return res.status(400).json({ message: 'Usuário não encontrado' });

  const senhaValida = await bcrypt.compare(senha, usuario.senha);
  if (!senhaValida) return res.status(400).json({ message: 'Senha incorreta' });

  const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

  res.json({ token });
});

router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  // Verifica se todos os campos foram enviados
  if (!nome || !email || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  // Verifica se o email já está cadastrado
  const usuarioExistente = await Usuario.findOne({ email });
  if (usuarioExistente) {
    return res.status(400).json({ message: 'Email já cadastrado' });
  }

  try {
    const novoUsuario = new Usuario({ nome, email, senha });
    await novoUsuario.save();

    // Gera token JWT
    const token = jwt.sign({ id: novoUsuario._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({
      message: 'Usuário cadastrado com sucesso',
      token,
      usuario: {
        id: novoUsuario._id,
        nome: novoUsuario.nome,
        email: novoUsuario.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar usuário' });
  }
});

export default router;