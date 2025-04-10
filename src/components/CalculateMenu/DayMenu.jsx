import React, { useState } from 'react';
import './DayMenu.css';

function DayMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="day-menu-container">
      {/* Шапка (заголовок дня и карточки с показателями) */}
      <div className="day-menu-header" onClick={toggleOpen}>
        <h2>День 1</h2>
        <div className="nutrients">
          <div className="nutrient-card calories">
            <span>Калории</span>
            <span>1937.58</span>
          </div>
          <div className="nutrient-card proteins">
            <span>Белки</span>
            <span>75.15</span>
          </div>
          <div className="nutrient-card fats">
            <span>Жиры</span>
            <span>49.36</span>
          </div>
          <div className="nutrient-card carbs">
            <span>Углеводы</span>
            <span>302.49</span>
          </div>
        </div>
        {/* Стрелочка, которая поворачивается при открытии/закрытии */}
        <div className={`arrow ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Основное содержимое, которое раскрывается по клику */}
      {isOpen && (
        <div className="day-menu-content">
          <div className="meal-section">
            <h3>Завтрак</h3>
            <div className="meal-items">
              <div className="meal-item">Яичница с картофелем — 200 ккал</div>
              <div className="meal-item">Чай с сахаром — 100 ккал</div>
              <div className="meal-item">Свежий фрукт — 70 ккал</div>
            </div>
          </div>

          <div className="meal-section">
            <h3>Перекус</h3>
            <div className="meal-items">
              <div className="meal-item">Йогурт — 120 ккал</div>
              <div className="meal-item">Орехи — 150 ккал</div>
            </div>
          </div>

          <div className="meal-section">
            <h3>Обед</h3>
            <div className="meal-items">
              <div className="meal-item">Суп с овощами — 200 ккал</div>
              <div className="meal-item">Куриное филе — 160 ккал</div>
              <div className="meal-item">Салат — 80 ккал</div>
              <div className="meal-item">Компот из сухофруктов — 100 ккал</div>
            </div>
          </div>

          <div className="meal-section">
            <h3>Полдник</h3>
            <div className="meal-items">
              <div className="meal-item">Хлебцы — 60 ккал</div>
              <div className="meal-item">Чай зелёный — 0 ккал</div>
            </div>
          </div>

          <div className="meal-section">
            <h3>Ужин</h3>
            <div className="meal-items">
              <div className="meal-item">Овощное рагу с индейкой — 250 ккал</div>
              <div className="meal-item">Сок — 90 ккал</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DayMenu;
