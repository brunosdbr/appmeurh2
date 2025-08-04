import { useState } from 'react';

function FolgaRequest() {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    motivo: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Solicitação de folga enviada:', formData);
    alert('Solicitação de folga enviada com sucesso!');
  };

  return (
    <div style={styles.container}>
      <h2>Solicitação de Folga</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />

        <label>Data da Folga:</label>
        <input type="date" name="data" value={formData.data} onChange={handleChange} required />

        <label>Motivo:</label>
        <textarea name="motivo" value={formData.motivo} onChange={handleChange} required />

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

export default FolgaRequest;