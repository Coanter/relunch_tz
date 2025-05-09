// HistoryPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HistoryPage.css";

function HistoryPage() {
  const navigate = useNavigate();

  // Функция-обработчик перехода
  const goToMenu = (id) => {
    // Можно передать id, если нужно
    navigate("/menu"); 
  };



  // Состояния для полей фильтра
  const [keyword, setKeyword] = useState("");
  const [age, setAge] = useState("");
  const [season, setSeason] = useState("");

  // Пример данных для таблицы
  const [menuHistory] = useState([
    { id: 1, name: "Меню для детей 3-5 лет.pdf", age: "3-5", season: "Осень", lastUpdate: "10.09.2024", size: "7.8 MB" },
    { id: 2, name: "Меню для детей 5-7 лет.pdf", age: "5-7", season: "Весна", lastUpdate: "06.02.2024", size: "4.6 MB" },
    { id: 3, name: "Меню для детей 3-5 лет.pdf", age: "3-5", season: "Весна", lastUpdate: "08.03.2025", size: "2.3 MB" },
    { id: 4, name: "Меню для детей 5-7 лет.pdf", age: "5-7", season: "Лето", lastUpdate: "14.06.2024", size: "5.2 MB" },
    { id: 5, name: "Меню для детей 3-5 лет.pdf", age: "3-5", season: "Зима", lastUpdate: "22.12.2024", size: "3.1 MB" },
    { id: 6, name: "Меню для детей 5-7 лет.pdf", age: "5-7", season: "Осень", lastUpdate: "19.09.2024", size: "9.4 MB" },
  ]);

  // Фильтрация
  const filteredData = menuHistory.filter(item => {
    const matchKeyword = item.name.toLowerCase().includes(keyword.toLowerCase());
    const matchAge     = age ? item.age === age : true;
    const matchSeason  = season ? item.season === season : true;
    return matchKeyword && matchAge && matchSeason;
  });

  const handleFilter = e => {
    e.preventDefault();
  };

  const handleClear = () => {
    setKeyword("");
    setAge("");
    setSeason("");
  };

  return (
    <div className="history-page">
      <div className="history-header">
        <h1>История меню</h1>
      </div>

      <form className="filter-form" onSubmit={handleFilter}>
        <div className="filter-group">
          <label>Ключевое слово</label>
          <input
            type="text"
            placeholder="Например: Овсяная каша"
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label>Возраст</label>
          <select value={age} onChange={e => setAge(e.target.value)}>
            <option value="">Выбрать</option>
            <option value="3-5">3-5</option>
            <option value="5-7">5-7</option>
          </select>
        </div>
        <div className="filter-group">
          <label>Сезонность</label>
          <select value={season} onChange={e => setSeason(e.target.value)}>
            <option value="">Выбрать</option>
            <option value="Зима">Зима</option>
            <option value="Весна">Весна</option>
            <option value="Лето">Лето</option>
            <option value="Осень">Осень</option>
          </select>
        </div>
        <div className="buttons-group">
          <button type="submit" className="filter-btn">Фильтр</button>
          <button type="button" className="clear-btn" onClick={handleClear}>Очистить</button>
        </div>
      </form>

      <table className="history-table">
        <thead>
          <tr>
            <th></th>
            <th>Меню</th>
            <th>Возраст</th>
            <th>Сезонность</th>
            <th>Недавние изменения</th>
            <th>Размер файла</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="6" className="no-results">Нет результатов</td>
            </tr>
          ) : (
            filteredData.map(item => (
              <tr
                key={item.id}
                onClick={() => goToMenu(item.id)}
                style={{ cursor: "pointer" }}
              >
                <td><div className="pdf-icon">PDF</div></td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.season}</td>
                <td>{item.lastUpdate}</td>
                <td>{item.size}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryPage;
