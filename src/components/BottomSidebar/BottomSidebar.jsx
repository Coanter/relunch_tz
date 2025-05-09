import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BottomSidebar.css';

const BottomSidebar = () => {
  const location = useLocation();

  // Скрываем на страницах логина и регистрации
  if (location.pathname === '/' || location.pathname === '/register' || location.pathname === '/dashboard') {
    return null;
  }

  return (
    <div className="bottom-sidebar">
      <nav className="bottom-sidebar-nav">
        <ul>
          <li><Link to="/settings"><span className="icon"></span>Настройки</Link></li>
          <li><Link to="/support"><span className="icon"></span>Служба поддержки</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomSidebar;