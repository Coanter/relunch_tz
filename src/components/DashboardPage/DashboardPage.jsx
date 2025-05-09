import React, { useState } from 'react';
import './DashboardPage.css';
import logo from '/logo2-1.png?url';     // ваш логотип
import avatar from '/logo2-1.png?url';  // ваш аватар
import { useNavigate } from 'react-router-dom';

export default function DashboardPage() {

  const navigate = useNavigate();
  const today = new Date().toLocaleDateString('ru-RU', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  // пример задач
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Собрать пищевые отходы', due: 'Сегодня', status: false, color: '#4FCF98' },
    { id: 2, title: 'Проверить склад',           due: 'Сегодня', status: false, color: '#F48282' },
    { id: 3, title: 'Закуп продуктов',           due: 'Сегодня', status: false, color: '#FDBB58' },
  ]);

  const toggleTask = id => {
    setTasks(tasks.map(t => t.id === id ? { ...t, status: !t.status } : t));
  };

  // навигационные карточки
  const navItems = [
    { id: 'history',   label: 'Просмотреть созданное меню', icon: '🗓', path: '/menu-history'},
    { id: 'newMenu',   label: 'Создать новое меню',         icon: '➕', path: '/create-menu' },
    { id: 'warehouse', label: 'Склад',                      icon: '🛒', path: '/warehouse' },
    { id: 'settings',  label: 'Настройки',                  icon: '⚙️', path: '/settings' },
    { id: 'support',   label: 'Служба поддержки',           icon: '💬', path: '/support' },
    { id: 'library',   label: 'Библиотека',                 icon: '📁', path: '/library' },
  ];

  return (
    <div className="dashboard-page">
      <header className="dash-header">
        <input className="dash-search" placeholder="Найти..." />
        <div className="dash-date">📅 {today}</div>
        <img src={avatar} alt="avatar" className="dash-avatar" />
      </header>
     
     <div className='welcome-tasks'>
      <section className="welcome-section">
        <img src={logo} alt="Relunch" className="welcome-logo" />
        <div className="welcome-text">
          <h2>Добро пожаловать!</h2>
          <p>С чего вы хотите начать ваш день?</p>
        </div>
      </section>

      <aside className="tasks-section">
        <h3>Ваши задачи на сегодня</h3>
        <ul>
          {tasks.map(t => (
            <li key={t.id}>
              <span className="task-color" style={{ background: t.color }} />
              <div className="task-info">
                <strong>{t.title}</strong>
                <span className="task-due">{t.due}</span>
              </div>
              <input
                type="checkbox"
                checked={t.status}
                onChange={() => toggleTask(t.id)}
              />
            </li>
          ))}
        </ul>
      </aside>
     </div>
      <section className="nav-cards">
        {navItems.map(item => (
          <button key={item.id} className="nav-card" onClick={() => navigate(item.path)}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </section>
    </div>
  );
}
