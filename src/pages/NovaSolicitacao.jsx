import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NovaSolicitacao.css';

function NovaSolicitacao() {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!tipo) {
      alert('Selecione o tipo de solicitação.');
      return;
    }

    navigate(`/${tipo}`);
  };

  return (
    <div className="nova-solicitacao-card">
      <h2>Nova Solicitação</h2>
      <form onSubmit={handleSubmit} className="formulario-solicitacao">
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome completo"
          required
        />

        <label htmlFor="tipo">Tipo de Solicitação:</label>
        <select
          id="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          required
        >
          <option value="">Selecione o tipo</option>
          <option value="ferias">Férias</option>
          <option value="abono">Abono</option>
          <option value="folga">Folga</option>
        </select>

        <button type="submit">Continuar</button>
      </form>
    </div>
  );
}

export default NovaSolicitacao;