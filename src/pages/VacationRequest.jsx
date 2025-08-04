import { useState } from 'react';

function VacationRequest() {
  const [formData, setFormData] = useState({
    nome: '',
    inicio: '',
    fim: '',
    motivo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Solicitação enviada:', formData);
    alert('Solicitação de férias enviada com sucesso!');
  };

  return (
    <div style={styles.container}>
      <h2>Solicitação de Férias</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

        <label>Data de Início:</label>
        <input type="date" name="inicio" value={formData.inicio} onChange={handleChange} required />

        <label>Data de Término:</label>
        <input type="date" name="fim" value={formData.fim} onChange={handleChange} required />

        <label>Motivo (opcional):</label>
        <textarea name="motivo" value={formData.motivo} onChange={handleChange} />

        <button type="submit">Enviar Solicitação</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    fontFamily: 'Arial',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default VacationRequest;