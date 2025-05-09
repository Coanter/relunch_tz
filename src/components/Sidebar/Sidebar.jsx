import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation для определения текущего пути
import './Sidebar.css';
import logo from '/logo2-1.png?url';

const Sidebar = () => {
  const location = useLocation();

  // Скрываем сайдбар на страницах логина и регистрации
  if (location.pathname === '/' || location.pathname === '/register' || location.pathname === '/dashboard') {
    return null; // Ничего не рендерим
  }

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/dashboard"><span className="icon"></span> <img src={logo} alt="Relunch" className="welcome-logo2" /> </Link></li>
          <li><Link to="/create-menu"><span className="icon"></span>Создать новое меню</Link></li>
          <li><Link to="/menu-history"><span className="icon"></span>Просмотреть меню</Link></li>
          <li><Link to="/library"><span className="icon"></span>Библиотека</Link></li>
          <li><Link to="/warehouse"><span className="icon"></span>Склад</Link></li>
          <li><Link to="https://cbd.minjust.gov.kg/11953/edition/13732/ru"><span className="icon"></span>СанПиН</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;