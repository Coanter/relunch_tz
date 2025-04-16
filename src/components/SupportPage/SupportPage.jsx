import React, { useState } from "react";
import "./SupportPage.css";

function SupportPage() {
  // Данные часто задаваемых вопросов (FAQ)
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Как восстановить пароль?",
      answer:
        "На экране входа нажмите «Забыли пароль?», введите email, и мы отправим вам инструкцию для восстановления.",
      isOpen: false,
    },
    {
      id: 2,
      question: "Как скопировать прошлые меню?",
      answer:
        "Перейдите в раздел «История меню», выберите нужный PDF-файл, загрузите и используйте в новом плане.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Как скачать меню?",
      answer:
        "Откройте нужное меню и нажмите кнопку «Экспорт в PDF» или «Скачать».",
      isOpen: false,
    },
    {
      id: 4,
      question: "Как поделиться меню с другими?",
      answer:
        "В разделе «Календарь» или «История меню» нажмите «Поделиться», введите адреса коллег и подтвердите отправку.",
      isOpen: false,
    },
    {
      id: 5,
      question: "Как настроить уведомления?",
      answer:
        "В «Настройках» на вкладке «Уведомления» можно включать/выключать отдельные типы уведомлений и редактировать список адресатов.",
      isOpen: false,
    },
    {
      id: 6,
      question: "Как найти новое меню?",
      answer:
        "На главной странице используйте панель поиска или перейдите в раздел «Библиотека» для просмотра доступных меню.",
      isOpen: false,
    },
    {
      id: 7,
      question: "Как посмотреть прошивку меню?",
      answer: "В настоящее время прошивка меню не поддерживается в системе.",
      isOpen: false,
    },
  ]);

  // Обработчик раскрытия/сворачивания вопроса
  const toggleFAQ = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  // Состояние для формы «Обратная связь»
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Хендлер отправки формы (заглушка)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ваш вопрос отправлен!\nМы свяжемся с вами в ближайшее время.");
    // Очистка полей формы
    setName("");
    setContact("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="support-page">
      {/* Шапка — заголовок и кнопка «Выйти» (по аналогии со скриншотом) */}
      <div className="support-header">
        <h1>Служба поддержки</h1>
        <button className="exit-btn">Выйти</button>
      </div>

      {/* Основной заголовок вопроса */}
      <h2 className="main-question">Как мы можем вам помочь?</h2>

      {/* Поисковая строка */}
      <div className="search-block">
        <input type="text" placeholder="Искать..." />
      </div>

      {/* Часто задаваемые вопросы (FAQ) */}
      <section className="faq-section">
        <h3>Частые вопросы</h3>
        <div className="faq-container">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className={`faq-item ${faq.isOpen ? "open" : ""}`}
            >
              <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
                {faq.question}
                {/* Стрелочка-иконка (вверх/вниз) */}
                <span className="arrow-icon">
                  {faq.isOpen ? "▲" : "▼"}
                </span>
              </div>
              {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Форма «Всё ещё нужна помощь?» */}
      <section className="help-form-section">
        <h3>Всё еще нужна помощь?</h3>
        <form onSubmit={handleSubmit} className="help-form">
          <div className="form-row">
            <label>Имя:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label>Email/Телефон:</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label>Тема вопроса:</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-row full-width">
            <label>Сообщение:</label>
            <textarea
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Введите сообщение..."
              required
            />
          </div>
          <button type="submit" className="send-btn">
            Отправить
          </button>
        </form>
      </section>
    </div>
  );
}

export default SupportPage;
