import React, { useState, useEffect, useRef } from 'react';
import './DashboardColaborador.css';
import { useNavigate } from 'react-router-dom';
import {
  FaClipboardList,
  FaBullhorn,
  FaCalendarAlt,
  FaFileAlt,
  FaUser,
  FaEnvelope,
  FaChartBar,
  FaClock,
  FaCog
} from 'react-icons/fa';

// Componentes de conteúdo lateral
import Arquivos from './Arquivos';
import Desempenho from './Desempenho';
import Configuracoes from './Configuracoes';
import Perfil from './Perfil';
import Mensagens from './Mensagens';
import FormularioSolicitacao from "../components/FormularioSolicitacao";
import NovaSolicitacao from './NovaSolicitacao';
import VacationRequest from './VacationRequest';
import VacationHistory from './VacationHistory';

const DashboardColaborador = () => {
  const [menuSelecionado, setMenuSelecionado] = useState(null);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();

  const solicitacoes = {
    pendentes: 3,
    aprovadas: 12,
    rejeitadas: 1,
  };

  const nomesMenu = {
    solicitacoes: 'SOLICITAÇÕES',
    avisos: 'COMUNICADOS',
    ferias: 'FÉRIAS',
    dashboard: 'DASHBOARD',
    arquivos: 'ARQUIVOS',
    perfil: 'PERFIL',
    mensagens: 'MENSAGENS',
    desempenho: 'DESEMPENHO',
    historico: 'HISTÓRICO',
    configuracoes: 'CONFIGURAÇÕES',
  };

  const iconesMenu = [
    { id: 'solicitacoes', icon: <FaClipboardList className="icon" /> },
    { id: 'avisos', icon: <FaBullhorn className="icon" /> },
    { id: 'ferias', icon: <FaCalendarAlt className="icon" /> },
    { id: 'arquivos', icon: <FaFileAlt className="icon" /> },
    { id: 'perfil', icon: <FaUser className="icon" /> },
    { id: 'mensagens', icon: <FaEnvelope className="icon" /> },
    { id: 'desempenho', icon: <FaChartBar className="icon" /> },
    { id: 'historico', icon: <FaClock className="icon" /> },
    { id: 'configuracoes', icon: <FaCog className="icon" /> },
  ];

  const componentesLaterais = [
    'arquivos',
    'perfil',
    'mensagens',
    'avisos',
    'desempenho',
    'configuracoes',
    'solicitacoes',
    'ferias',
    'historico'
  ];

  const sidebarClass = menuSelecionado ? 'sidebar expandida' : 'sidebar contraida';

  useEffect(() => {
    const handleClickOutside = (event) => {
      const painel = document.querySelector('.painel-lateral');
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        (!painel || !painel.contains(event.target))
      ) {
        setMenuSelecionado(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (id) => {
    setMenuSelecionado(id);

    const rotasMenu = {
      solicitacoes: '/solicitacao',
      ferias: '/ferias',
      historico: '/historico',
    };

    if (!componentesLaterais.includes(id) && rotasMenu[id]) {
      navigate(rotasMenu[id]);
    }
  };

  const renderPainelLateral = () => {
    switch (menuSelecionado) {
      case 'arquivos':
        return <Arquivos />;
      case 'desempenho':
        return <Desempenho />;
      case 'configuracoes':
        return <Configuracoes />;
      case 'perfil':
        return <Perfil />;
      case 'mensagens':
      case 'avisos':
        return <Mensagens />;
      case 'solicitacoes':
        return <NovaSolicitacao />;
      case 'ferias':
        return <VacationRequest />;
      case 'historico':
        return <VacationHistory />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <aside ref={sidebarRef} className={sidebarClass}>
        <ul className="menu">
          {iconesMenu.map(({ id, icon }) => (
            <li key={id} onClick={() => handleMenuClick(id)}>
              {menuSelecionado === id ? (
                <span className="menu-label-box zoom-in">{nomesMenu[id]}</span>
              ) : (
                icon
              )}
            </li>
          ))}
        </ul>
      </aside>

      <main className="dashboard-content">
        <div className="boas-vindas">
          <h2>Bem-vindo, Bruno 👋</h2>
          <p>Esperamos que seu dia seja produtivo e tranquilo!</p>
        </div>

        <div className="resumo-solicitacoes">
          <div className="card-resumo pendentes">
            <FaClipboardList />
            <h3>Solicitações Pendentes</h3>
            <p>{solicitacoes.pendentes}</p>
          </div>
          <div className="card-resumo aprovadas">
            <FaClipboardList />
            <h3>Aprovadas</h3>
            <p>{solicitacoes.aprovadas}</p>
          </div>
          <div className="card-resumo rejeitadas">
            <FaClipboardList />
            <h3>Rejeitadas</h3>
            <p>{solicitacoes.rejeitadas}</p>
          </div>
        </div>

        {menuSelecionado === 'ferias' && (
          <div className="card-solicitacao">
            <FaCalendarAlt className="icon-top" />
            <div className="solicitacoes-menu">
              <button onClick={() => navigate('/ferias')}>🏖️ Férias</button>
              <button onClick={() => navigate('/folga')}>💤 Folga</button>
              <button onClick={() => navigate('/abono')}>📄 Outros</button>
            </div>
          </div>
        )}

        {componentesLaterais.includes(menuSelecionado) && (
          <div className="painel-lateral">
            {renderPainelLateral()}
          </div>
        )}
      </main>
    </div>
  );
};

export default DashboardColaborador;