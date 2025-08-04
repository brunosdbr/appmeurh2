import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // conexão limpa, sem opções obsoletas
    console.log('✅ Conectado ao MongoDB local');
  } catch (error) {
    console.error('❌ Erro ao conectar ao MongoDB:', error.message);
    process.exit(1); // encerra o processo em caso de falha
  }
};

export default connectDB(console.log('MOngoDB conectado!'));