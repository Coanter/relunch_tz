import React, { useState } from "react";
import "./SettingsPage.css";

function SettingsPage() {
  // Состояние для выбранной вкладки
  const [activeTab, setActiveTab] = useState("profile");

  // Переключатель вкладок
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="settings-page">
      {/* Заголовок и «шапка» */}
      <div className="settings-header">
        <h1>Настройки</h1>

        {/* Пример поля поиска и кнопки «Выйти» (как на скриншоте) */}
        <div className="header-right">
          <input type="text" placeholder="Найти..." />
          <button className="exit-btn">Выйти</button>
        </div>
      </div>

      {/* Вкладки */}
      <div className="settings-tabs">
        <button
          className={activeTab === "profile" ? "active" : ""}
          onClick={() => handleTabChange("profile")}
        >
          Профиль
        </button>
        <button
          className={activeTab === "food" ? "active" : ""}
          onClick={() => handleTabChange("food")}
        >
          Пищевые ограничения
        </button>
        <button
          className={activeTab === "notifications" ? "active" : ""}
          onClick={() => handleTabChange("notifications")}
        >
          Уведомления
        </button>
      </div>

      {/* Содержимое вкладок */}
      <div className="settings-content">
        {/* Вкладка «Профиль» */}
        {activeTab === "profile" && (
          <div className="profile-tab">
            <h2>Профиль</h2>

            {/* Аватар + кнопки «Изменить» / «Удалить» */}
            <div className="avatar-section">
              <div className="avatar-placeholder">
                {/* Здесь можно вставить <img src="..." /> вместо div */}
              </div>
              <div className="avatar-buttons">
                <button>Изменить</button>
                <button>Удалить</button>
              </div>
            </div>

            {/* Форма с данными */}
            <div className="profile-form">
              <div className="form-row">
                <label>Название детского сада</label>
                <input type="text" />
              </div>
              <div className="form-row">
                <label>Адрес</label>
                <input
                  type="text"
                />
              </div>
              <div className="form-row">
                <label>Телефон / email</label>
                <input type="text" />
              </div>

              <div className="form-row">
                <label>Сайт</label>
                <input type="text" placeholder="Ссылка на ваш сайт..." />
              </div>

              <div className="form-row full-width">
                <label>О вас</label>
                <textarea
                  rows="3"
                  placeholder="Напишите информацию о себе..."
                />
              </div>
            </div>

            <button className="save-btn">Сохранить</button>
          </div>
        )}

        {/* Вкладка «Пищевые ограничения» */}
        {activeTab === "food" && (
          <div className="food-tab">
            <h2>Пищевые ограничения</h2>

            <div className="allergies-block">
              <h3>Укажите аллергии</h3>
              <div className="allergy-groups">
                <div className="allergy-column">
                  <label>
                    <input type="checkbox" />
                    Молочные продукты
                  </label>
                  <label>
                    <input type="checkbox" />
                    Орехи
                  </label>
                  <label>
                    <input type="checkbox" />
                    Морепродукты
                  </label>
                </div>
                <div className="allergy-column">
                  <label>
                    <input type="checkbox" />
                    Яйца
                  </label>
                  <label>
                    <input type="checkbox" />
                    Рыба
                  </label>
                  <label>
                    <input type="checkbox" />
                    Злаки
                  </label>
                </div>
              </div>

              {/* Пример текстовых полей для уточнения аллергий */}
              <div className="allergy-details">
                <label>
                  Молочные продукты:  
                  <input type="text" defaultValue="Молоко, сыр" />
                </label>
                <label>
                  Морепродукты:
                  <input type="text" defaultValue="Форель, икра" />
                </label>
              </div>
            </div>

            <div className="preferences-block">
              <h3>Предпочтения</h3>
              <textarea rows="3" placeholder="Какие у вас предпочтения..." />
            </div>

            <button className="save-btn">Сохранить</button>
          </div>
        )}

        {/* Вкладка «Уведомления» */}
        {activeTab === "notifications" && (
          <div className="notifications-tab">
            <h2>Уведомления</h2>
           
            <div className="tasks-block">
              <h3>Задачи</h3>
              <div className="task-item">
                <label>
                  <input type="checkbox" />
                  Собрать пищевые отходы
                </label>
              </div>
              <div className="task-item">
                <label>
                  <input type="checkbox" />
                  Проверить склад
                </label>
              </div>
              <div className="task-item">
                <label>
                  <input type="checkbox" />
                  Закуп продуктов
                </label>
              </div>
              <div className="see-all-tasks">
                <a href="#allTasks">Все задачи</a>
              </div>
            </div>

            <div className="calendar-block">
              <h3>Ноябрь 2024</h3>
              <div className="calendar-grid">
                {/* Заголовки дней недели */}
                <div>Пн</div>
                <div>Вт</div>
                <div>Ср</div>
                <div>Чт</div>
                <div>Пт</div>
                <div>Сб</div>
                <div>Вс</div>
                {/* Условная сетка: 30 дней, упрощённо */}
                {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
                  <div key={day} className="calendar-cell">
                    {day}
                  </div>
                ))}
              </div>
            </div>

            <div className="messages-block">
              <h3>Уведомления</h3>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>От кого</th>
                    <th>Тема</th>
                    <th>Дата</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Анна Сергеевна</td>
                    <td>Отчёт по занятиям в группе «Ромашка»</td>
                    <td>5 Дек</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Екатерина Викторовна</td>
                    <td>Напоминание о меню</td>
                    <td>15 Фев</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Проверка и проверка</td>
                    <td>22 Февраля — день внутренней проверки</td>
                    <td>22 Фев</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>Татьяна Петровна</td>
                    <td>Корректировка меню / Поступили сообщения, шт</td>
                    <td>10 Мар</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsPage;
