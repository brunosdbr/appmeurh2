// DashboardRH.jsx
import React from 'react';
import './DashboardRH.css';

const DashboardRH = () => {
  const sections = [
    { title: 'Gerenciar Avisos', icon: '📢' },
    { title: 'Solicitações Recebidas', icon: '📥' },
    { title: 'Gerenciar Documentos', icon: '🗂️' },
    { title: 'Metas & Desempenho', icon: '🎯' },
    { title: 'Eventos Internos', icon: '📅' },
    { title: 'Treinamentos', icon: '📚' },
    { title: 'Sugestões dos Colaboradores', icon: '💬' },
  ];

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Painel do RH</h1>
      <div className="dashboard-grid">
        {sections.map((section, index) => (
          <div key={index} className="dashboard-card">
            <span className="card-icon">{section.icon}</span>
            <h2 className="card-title">{section.title}</h2>
            <button className="card-button">Acessar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardRH;
