import Abono from '../models/Abono.js';

export const criarAbono = async (req, res) => {
  try {
    const novoAbono = new Abono(req.body);
    const abonoSalvo = await novoAbono.save();
    res.status(201).json(abonoSalvo);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao enviar solicitação de abono', erro: error.message });
  }
};