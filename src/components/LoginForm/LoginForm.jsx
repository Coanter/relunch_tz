import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Импортируем Link для переходов
import "./LoginForm.css";

const LoginForm = () => {
  const navigate = useNavigate(); // Хук для навигации

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь могла бы быть логика аутентификации
    // ...

    // Перенаправляем на страницу главного меню
    navigate("/create-menu");
  };


  return (
  <div className="login-body">
    <div className="login-container">
      <img src="/logo2-1.png" alt="Relunch Logo" className="logo" />
      <h2 className="welcome-text">Добро пожаловать!</h2>
      <p className="register-text">
        Нет аккаунта? <Link to="/register" className="register-link">Зарегистрироваться</Link> {/* Изменили на Link */}
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="email" placeholder="Email" required />
          <span className="icon"></span>
        </div>
        <div className="input-group">
          <input type="password" placeholder="Пароль" required />
          <span className="icon"></span>
        </div>
        <div className="options">
          <label className="remember-me">
            <input type="checkbox" /> <span className="remember">Запомнить меня</span>
          </label>
          <a href="#" className="forgot-password">Восстановить пароль</a>
        </div>
        <button type="submit" className="login-button">Войти</button>
      </form>
      <button className="google-button">
        <img src="/logo4.png" alt="Google Icon" className="google-icon" />
        <span className="remember">Войти с помощью Google</span>
      </button>
    </div>
  </div>
  );
};

export default LoginForm;
