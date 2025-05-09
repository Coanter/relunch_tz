import React, { useState } from "react";
import "./ZakupPage.css";
import { useNavigate } from "react-router-dom";


function ZakupPage() {
    const navigate = useNavigate();
      const goToback = () => {
        navigate("/menu");
      };

  // Переключатель «Неделя» / «Месяц»
  const [viewMode, setViewMode] = useState("week"); // "week" или "month"

  // Товары (данные для левой части)
  const productsData = [
    {
      id: 1,
      name: "Хлеб черный",
      price: 2500,
      image: "logo2-1.png",
    },
    {
      id: 2,
      name: "Чай черный",
      price: 2500,
      image: "logo2-1.png",
    },
    {
      id: 3,
      name: "Картошка",
      price: 450,
      image: "logo2-1.png",
    },
    {
      id: 4,
      name: "Лук",
      price: 310,
      image: "logo2-1.png",
    },
    {
      id: 5,
      name: "Перец",
      price: 340,
      image: "logo2-1.png",
    },
    {
      id: 6,
      name: "Банан",
      price: 400,
      image: "logo2-1.png",
    },
    {
      id: 7,
      name: "Яблоки",
      price: 350,
      image: "logo2-1.png",
    },
    {
      id: 8,
      name: "Яйца",
      price: 330,
      image: "logo2-1.png",
    },
    {
      id: 9,
      name: "Орехи",
      price: 560,
      image: "logo2-1.png",
    },
  ];

  // Состояние корзины (массив товаров с количеством)
  const [cart, setCart] = useState([]);

  // Функция для добавления/увеличения количества товара
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // Если уже в корзине, увеличить count
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count + 1 }
            : item
        );
      } else {
        // Если нового товара нет в корзине, добавить его
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  // Функция для уменьшения количества товара
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem && existingItem.count > 1) {
        // Уменьшаем количество
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, count: item.count - 1 }
            : item
        );
      } else {
        // Удаляем товар, если count становится 0
        return prevCart.filter((item) => item.id !== product.id);
      }
    });
  };

  // Подсчёт количества товаров и общей суммы
  const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  // Переключатель режимов «Неделя» / «Месяц»
  const handleViewMode = (mode) => {
    setViewMode(mode);
  };

  // Форматирование цены (примерно, без учёта валютных форматов)
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " сом";
  };

  return (
    <div className="zakup-page">
      {/* Верхняя часть: кнопка «назад», заголовок «Закуп», вкладки «Неделя» / «Месяц» */}
      <div className="zakup-header">
        <button className="back-btn" onClick={goToback}   >←</button>
        <div className="tabs">
          <button
            className={viewMode === "week" ? "active" : ""}
            onClick={() => handleViewMode("week")}
          >
            Неделя
          </button>
          <button
            className={viewMode === "month" ? "active" : ""}
            onClick={() => handleViewMode("month")}
          >
            Месяц
          </button>
        </div>
      </div>

      <div className="zakup-container">
        {/* Левая колонка — список товаров */}
        <div className="products-list-">
          {productsData.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="image-container">
                <img src={product.image} alt={product.name} />
              </div>
              <h3>{product.name}</h3>
              <div className="price-row">
                <span className="price">{formatPrice(product.price)}</span>
                <div className="add-btns">
                  <button onClick={() => removeFromCart(product)}>-</button>
                  <button onClick={() => addToCart(product)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Правая колонка — корзина */}
        <div className="cart">
          <h2>
            {totalItems} продукт{totalItems !== 1 ? "ов" : ""} в корзине
          </h2>
          <button className="clear-cart-btn" onClick={() => setCart([])}>
            Очистить
          </button>

          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <span className="cart-item-name">{item.name}</span>
                <div className="cart-controls">
                  <button onClick={() => removeFromCart(item)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>
                <span className="cart-item-price">
                  {formatPrice(item.price * item.count)}
                </span>
              </div>
            ))}
          </div>

          <div className="cart-total">
            Итого: <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZakupPage;
