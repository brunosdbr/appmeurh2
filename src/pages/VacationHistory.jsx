function VacationHistory() {
  const solicitacoes = [
    {
      id: 1,
      nome: 'Bruno Silva',
      inicio: '2025-07-01',
      fim: '2025-07-15',
      motivo: 'Viagem em família',
      status: 'Aprovado',
    },
    {
      id: 2,
      nome: 'Ana Costa',
      inicio: '2025-08-10',
      fim: '2025-08-20',
      motivo: '',
      status: 'Pendente',
    },
  ];

  return (
    <div style={styles.container}>
      <h2>Histórico de Solicitações</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Início</th>
            <th>Fim</th>
            <th>Motivo</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {solicitacoes.map((s) => (
            <tr key={s.id}>
              <td>{s.nome}</td>
              <td>{s.inicio}</td>
              <td>{s.fim}</td>
              <td>{s.motivo || '—'}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '20px',
    fontFamily: 'Arial',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f2f2f2',
    padding: '10px',
    border: '1px solid #ccc',
  },
  td: {
    padding: '10px',
    border: '1px solid #ccc',
  },
};

export default VacationHistory;