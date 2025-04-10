import React from 'react';
import './CreateMenu.css';

const CreateMenu = () => {
  return (
    <div className="create-menu-container">
      <div className="create-menu-content">
        <div className='create-menu-header'>
          <h1 className="create-menu-title">Ввести данные</h1>
          <button className='clear-button'>Очистить</button>
        </div>  
        <div className="input-area">
          <div className="input-section">
            {/* Форма ввода (без изменений) */}
            <label htmlFor="period">Период планирования</label>
            <input type="text" id="period" placeholder="Ввести" />

            <label htmlFor="childrenCount">Количество детей</label>
            <input type="text" id="childrenCount" placeholder="Ввести" />

            <label htmlFor="ageCategory">Возрастная категория</label>
            <select id="ageCategory">
              <option value="">Выбрать</option>
              <option value="1-3">1-3 года</option>
              <option value="3-5">3-5 лет</option>
              <option value="5-7">5-7 лет</option>
            </select>

            <label htmlFor="foodExclusions">Пищевые исключения</label>
            <select id="foodExclusions">
              <option value="">Выбрать</option>
              <option value="lactose">Непереносимость лактозы</option>
              <option value="gluten">Непереносимость глютена</option>
              <option value="diabetes">Диабет</option>
            </select>

            <label>Сезонность</label>
            <div className="season-options">
              <label><input type="radio" name="season" value="autumn" /> Осень</label>
              <label><input type="radio" name="season" value="winter" /> Зима</label>
              <label><input type="radio" name="season" value="spring" /> Весна</label>
              <label><input type="radio" name="season" value="summer" /> Лето</label>
            </div>

            <label>Количество приёмов пищи в день</label>
            <div className="meal-count-options">
              <label><input type="radio" name="mealCount" value="1" /> 1</label>
              <label><input type="radio" name="mealCount" value="2" /> 2</label>
              <label><input type="radio" name="mealCount" value="3" /> 3</label>
              <label><input type="radio" name="mealCount" value="4" /> 4</label>
              <label><input type="radio" name="mealCount" value="5" /> 5</label>
            </div>
            <div className='gensave-buttons'>
              <button className="generate-button">Сгенерировать меню</button>
              <button className='save-button'>Сохранить</button>
            </div>
          </div>

          {/* Секция загрузки меню (новая) */}
          <div className="load-menu-section">
            <h2>Загрузить свое меню</h2>
            <div className="download-buttons">
              <button className="load-button"></button> {/* Пустой квадрат */}
              <button className="load-button"></button> {/* Пустой квадрат */}
              <button className="load-button"></button> {/* Пустой квадрат */}
              <button className="load-button"></button> {/* Пустой квадрат */}
            </div>
            <textarea placeholder="Файлы:"></textarea>
            <textarea placeholder="Добавить комментарий..."></textarea>
            <button className="save-button">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMenu;