import Colaborador from '../models/Colaborador.js';

export const listarColaboradores = async (req, res) => {
  const colaboradores = await Colaborador.find();
  res.json(colaboradores);
};

export const criarColaborador = async (req, res) => {
  const novo = new Colaborador(req.body);
  await novo.save();
  res.status(201).json(novo);
};