import React, { useEffect, useState } from 'react';
import './Arquivos.css';
import { FaFilePdf, FaBuilding, FaUser } from 'react-icons/fa';

const Arquivos = () => {
  const [arquivosEmpresa, setArquivosEmpresa] = useState([]);
  const [arquivosPessoais, setArquivosPessoais] = useState([]);

  useEffect(() => {
    const fetchArquivos = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/arquivos');
        const data = await res.json();

        setArquivosEmpresa(data.filter(a => a.tipo === 'empresa'));
        setArquivosPessoais(data.filter(a => a.tipo === 'pessoal'));
      } catch (err) {
        console.error('Erro ao buscar arquivos:', err);
      }
    };

    fetchArquivos();
  }, []);

  const renderLista = (lista) =>
    lista.map((arquivo, index) => (
      <div key={index} className="arquivo-card">
        <FaFilePdf className="arquivo-icon" />
        <span>{arquivo.nome}</span>
      </div>
    ));

  return (
    <div className="arquivos-container">
      <h2 className="arquivos-titulo">📁 Seus Arquivos</h2>

      <div className="arquivos-secao">
        <h3><FaBuilding /> Arquivos da Empresa</h3>
        <div className="arquivos-grid">
          {renderLista(arquivosEmpresa)}
        </div>
      </div>

      <div className="arquivos-secao">
        <h3><FaUser /> Seus Arquivos Pessoais</h3>
        <div className="arquivos-grid">
          {renderLista(arquivosPessoais)}
        </div>
      </div>
    </div>
  );
};

export default Arquivos;