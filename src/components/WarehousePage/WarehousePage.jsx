import React, { useState } from "react";
import "./WarehousePage.css";

function WarehousePage() {
  // Пример данных для «Обзора аналитики»
  const analyticsData = [
    {
      id: 1,
      title: "Приход",
      value: "29,5 кг",
      color: "#4FCF98",
    },
    {
      id: 2,
      title: "Внешнее использование",
      value: "27,5 кг",
      color: "#F9A77D",
    },
    {
      id: 3,
      title: "Остаток на складе",
      value: "40,9 кг",
      color: "#7ABCF9",
    },
    {
      id: 4,
      title: "Заканчивающихся продуктов",
      value: "10 кг",
      color: "#F48282",
    },
    {
      id: 5,
      title: "Среднее потребление на день",
      value: "28,7 кг",
      color: "#FDBB58",
    },
  ];

  // Пример данных для «Списка продуктов на складе»
  const [products, setProducts] = useState([
    {
      id: 1,
      date: "01-02-2025",
      name: "Молоко",
      status: "В наличии",
      stockAmount: "2 л",
      used: 1,   // «Потрачено»
      purchase: 0, // «Закуп»
    },
    {
      id: 2,
      date: "02-02-2025",
      name: "Хлеб",
      status: "Низкий запас",
      stockAmount: "2 кг",
      used: 5,
      purchase: 10,
    },
    {
      id: 3,
      date: "03-02-2025",
      name: "Рис",
      status: "В наличии",
      stockAmount: "3 кг",
      used: 1,
      purchase: 0,
    },
    {
      id: 4,
      date: "04-02-2025",
      name: "Манная крупа",
      status: "В наличии",
      stockAmount: "1 кг",
      used: 0,
      purchase: 0,
    },
  ]);

  // Хендлер для изменения «Потрачено»
  const handleUsedChange = (id, delta) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, used: Math.max(item.used + delta, 0) } : item
      )
    );
  };

  // Хендлер для изменения «Закуп»
  const handlePurchaseChange = (id, delta) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, purchase: Math.max(item.purchase + delta, 0) } : item
      )
    );
  };

  // Хендлер «Сохранить» (заглушка)
  const handleSave = () => {
    alert("Изменения сохранены!");
  };

  return (
    <div className="warehouse-page">
      {/* Верхняя панель: заголовок, поиск, иконки (упрощённо) */}
      <div className="warehouse-header">
        <h1>Склад</h1>
        <div className="header-right">
          <input type="text" placeholder="Поиск продукта..." />
          <button className="header-btn">
            <span>♥</span>
          </button>
        </div>
      </div>

      {/* Обзор аналитики */}
      <div className="analytics-overview">
        <h2>Обзор аналитики</h2>
        <div className="analytics-cards">
          {analyticsData.map((item) => (
            <div
              key={item.id}
              className="analytics-card"
              style={{ backgroundColor: item.color }}
            >
              <div className="analytics-value">{item.value}</div>
              <div className="analytics-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Список продуктов на складе */}
      <div className="products-list">
        <h2>Список продуктов на складе</h2>
        <table>
          <thead>
            <tr>
              <th>Дата покупки</th>
              <th>Продукт</th>
              <th>Статус</th>
              <th>На складе</th>
              <th>Потрачено</th>
              <th>Закуп</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.date}</td>
                <td>{prod.name}</td>
                <td>
                  <span
                    className={
                      prod.status === "Низкий запас"
                        ? "status-badge low"
                        : "status-badge"
                    }
                  >
                    {prod.status}
                  </span>
                </td>
                <td>{prod.stockAmount}</td>
                {/* Потрачено */}
                <td>
                  <div className="adjust-box">
                    <button onClick={() => handleUsedChange(prod.id, -1)}>-</button>
                    <span>{prod.used}</span>
                    <button onClick={() => handleUsedChange(prod.id, 1)}>+</button>
                  </div>
                </td>
                {/* Закуп */}
                <td>
                  <div className="adjust-box">
                    <button onClick={() => handlePurchaseChange(prod.id, -1)}>-</button>
                    <span>{prod.purchase}</span>
                    <button onClick={() => handlePurchaseChange(prod.id, 1)}>+</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="save-btn" onClick={handleSave}>
          Сохранить
        </button>
      </div>
    </div>
  );
}

export default WarehousePage;
