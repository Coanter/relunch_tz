import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link для переходов
import "../RegistrationForm/RegistrationForm.css";

const RegisterForm = () => {
  return (
    <div className="login-container">
      <img src="/logo2-1.png" alt="Relunch Logo" className="logo" />
      <h2 className="welcome-text">Создайте аккаунт</h2>
      <p className="register-text">
        Уже есть аккаунт? <Link to="/" className="register-link">Войти</Link> {/* Переход на страницу логина */}
      </p>
      <form className="login-form">
        <div className="input-group">
          <input type="text" placeholder="Имя" required />
          <span className="icon"></span>
        </div>
        <div className="input-group">
          <input type="email" placeholder="Email" required />
          <span className="icon"></span>
        </div>
        <div className="input-group">
          <input type="password" placeholder="Пароль" required />
          <span className="icon"></span>
        </div>
        <div className="input-group">
          <input type="password" placeholder="Подтвердите пароль" required />
          <span className="icon"></span>
        </div>
        <button type="submit" className="login-button">Зарегистрироваться</button>
      </form>
      <button className="google-button">
        <img src="/logo4.png" alt="Google Icon" className="google-icon" />
        <span className="remember">Зарегистрироваться с помощью Google</span>
      </button>
    </div>
  );
};

export default RegisterForm;
