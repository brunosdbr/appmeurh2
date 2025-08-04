import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Erro ao sair:', error.message);
    }
  };

  const showLogout = user && location.pathname !== '/';

  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Meu RH</h1>

      {user && (
        <div style={styles.userArea}>
          <div style={styles.userMenu}>
            <span style={styles.userIcon}>👤</span>
            <select style={styles.select}>
              <option>{user.displayName || 'Colaborador'}</option>
              <option>Perfil</option>
              <option>Opções</option>
            </select>
          </div>

          {showLogout && (
            <button onClick={handleLogout} style={styles.button}>Sair</button>
          )}
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 32px',
    backgroundColor: '#3e66acff',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  userArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  userIcon: {
    fontSize: '18px',
  },
  select: {
    padding: '6px',
    borderRadius: '6px',
    border: 'none',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    color: '#2a5298',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default Navbar;