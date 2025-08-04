import mongoose from 'mongoose';

const arquivoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, enum: ['empresa', 'pessoal'], required: true },
  usuarioId: { type: String }, // opcional, se quiser vincular ao usuário
});

const Arquivo = mongoose.model('Arquivo', arquivoSchema);

export default Arquivo;