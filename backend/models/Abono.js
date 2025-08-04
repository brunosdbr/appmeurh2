import mongoose from 'mongoose';

const abonoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  data: { type: Date, required: true },
  justificativa: { type: String, required: true }
}, {
  timestamps: true
});

const Abono = mongoose.model('Abono', abonoSchema);
export default Abono;