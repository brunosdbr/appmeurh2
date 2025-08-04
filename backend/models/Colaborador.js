import mongoose from 'mongoose';

const colaboradorSchema = new mongoose.Schema({
  nome: String,
  email: String,
  cargo: String,
  departamento: String,
  dataAdmissao: Date,
});

const Colaborador = mongoose.model('Colaborador', colaboradorSchema);

export default Colaborador;