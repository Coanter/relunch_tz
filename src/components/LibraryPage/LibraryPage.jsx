import React, { useState } from "react";
import "./LibraryPage.css";

function LibraryPage() {
  // Состояние для выбранной вкладки
  const [activeTab, setActiveTab] = useState("Завтрак");

  // Пример списка вкладок
  const tabs = ["Завтрак", "Перекус", "Обед", "Полдник", "Ужин"];

  // Пример данных для карточек (можно расширять/изменять)
  const recipes = [
    {
      id: 1,
      title: "Овсяная каша с земляникой",
      composition: [
        { label: "Калории", value: "100-150" },
        { label: "Белки", value: "3-4" },
        { label: "Жиры", value: "2-3" },
        { label: "Углеводы", value: "15-20" },
      ],
      ingredients: [
        "1 чашка овсяных хлопьев",
        "1 стакан молока",
        "Горсть земляники",
        "Немного сахара/соли по вкусу",
      ],
    },
    {
      id: 2,
      title: "Каша с бананами",
      composition: [
        { label: "Калории", value: "200-250" },
        { label: "Белки", value: "5-7" },
        { label: "Жиры", value: "3-5" },
        { label: "Углеводы", value: "25-30" },
      ],
      ingredients: [
        "1 чашка овсяных хлопьев",
        "1 стакан воды или молока",
        "1 банан",
        "Щепотка корицы",
      ],
    },
    {
      id: 3,
      title: "Овсяные хлопья",
      composition: [
        { label: "Калории", value: "220-270" },
        { label: "Белки", value: "6-8" },
        { label: "Жиры", value: "3-4" },
        { label: "Углеводы", value: "30-35" },
      ],
      ingredients: ["1 чашка овсяных хлопьев", "Щепотка соли", "Вода/молоко"],
    },
  ];

  // Фильтрация рецептов по выбранной вкладке (если нужно)
  // Пока просто возвращаем все рецепты, но можно реализовать логику фильтра
  const filteredRecipes = recipes;

  return (
    <div className="library-page">
      {/* Шапка страницы */}
      <div className="library-header">
        <h1>Библиотека</h1>
        <div className="search-filter">
          <input type="text" placeholder="Поиск..." />
          <button className="filter-btn">Фильтр</button>
          <button className="favorite-btn">
            <span>♥</span>
          </button>
        </div>
      </div>

      {/* Вкладки (Завтрак, Перекус и т.д.) */}
      <div className="meal-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Контейнер для карточек */}
      <div className="cards-container">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2>{recipe.title}</h2>

            {/* Пустой блок вместо фотографии */}
            <div className="image-placeholder" />

            {/* Блок «Состав (на 100 г)» */}
            <div className="composition">
              <h3>Состав (на 100 г):</h3>
              {recipe.composition.map((comp, index) => (
                <div key={index} className="composition-item">
                  <strong>{comp.label}:</strong> {comp.value}
                </div>
              ))}
            </div>

            {/* Блок «Ингредиенты» */}
            <div className="ingredients">
              <h3>Ингредиенты:</h3>
              <ul>
                {recipe.ingredients.map((ingredient, idx) => (
                  <li key={idx}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Кнопка «избранное» (сердечко) */}
            <button className="heart-btn">♥</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibraryPage;
