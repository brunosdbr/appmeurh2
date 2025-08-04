import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import './cadastro.css'; // ✅ importa o CSS externo
import { useNavigate } from 'react-router-dom';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('colaborador');
  const [mensagem, setMensagem] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, 'usuarios', uid), {
        nome,
        email,
        tipo,
      });

      setMensagem('Cadastro realizado com sucesso!');
      await signOut(auth);
      setNome('');
      setEmail('');
      setSenha('');
      setTipo('colaborador');
    } catch (error) {
      console.error('Erro no cadastro:', error);
      setMensagem('Erro ao cadastrar: ' + error.message);
    }
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-card">
        <h2>Cadastro</h2>
        <form className="cadastro-form" onSubmit={handleCadastro}>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
            <option value="colaborador">Colaborador</option>
            <option value="rh">RH</option>
          </select>
          <button type="submit">Cadastrar</button>
        </form>

        {mensagem && (
          <div className="cadastro-sucesso">
            <p className="cadastro-mensagem">{mensagem}</p>
            <button className="btn-login" onClick={() => navigate('/login')}>
              Ir para Login
            </button>
          </div>
        )}

        {/* ✅ Botão de voltar para Home */}
        <button className="btn-voltar-home" onClick={() => navigate('/')}>
          Voltar para Home
        </button>
      </div>
    </div>
  );
}

export default Cadastro;