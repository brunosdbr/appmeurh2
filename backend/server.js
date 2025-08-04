import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colaboradorRoutes from './routes/colaboradorRoutes.js';
import abonoRoutes from './routes/abonoRoutes.js';
import arquivoRoutes from './routes/arquivoRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import authRoutes from './routes/authRoutes.js';


dotenv.config();
connectDB();

const app = express(); // ✅ Cria o app antes de usar

app.use(express.json()); // Middleware para JSON
app.use('/api/auth', authRoutes);
app.use('/api/abonos', abonoRoutes); // ✅ Agora está na ordem certa
app.use('/api/colaboradores', colaboradorRoutes);
app.use('/api/arquivos', arquivoRoutes);
app.use('/api/upload', uploadRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
