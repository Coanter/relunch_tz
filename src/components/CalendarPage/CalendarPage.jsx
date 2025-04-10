import React, { useState } from "react";
import "./CalendarPage.css";

function CalendarPage() {
  // Переключатель между "Неделя" и "Месяц"
  const [viewMode, setViewMode] = useState("week"); // "week" | "month"
  // Текущая выбранная дата
  const [selectedDay, setSelectedDay] = useState(14);

  const handleViewSwitch = (mode) => {
    setViewMode(mode);
  };

  // Условные данные для недельного вида
  const weekDays = [
    { day: 11, label: "Пн" },
    { day: 12, label: "Вт" },
    { day: 13, label: "Ср" },
    { day: 14, label: "Чт" },
    { day: 15, label: "Пт" },
    { day: 16, label: "Сб" },
    { day: 17, label: "Вс" },
  ];

  // Условные данные для "расписания" блюд
  const meals = [
    {
      title: "Завтрак",
      items: [
        "Овсяная каша с яблоками",
        "Тост с арахисовой пастой",
        "Зелёный чай",
      ],
    },
    {
      title: "Перекус",
      items: ["Орехи", "Фрукты"],
    },
    {
      title: "Обед",
      items: [
        "Куриный суп",
        "Кус-кус с овощами",
        "Салат из свежих огурцов и помидоров",
      ],
    },
    {
      title: "Полдник",
      items: ["Йогурт", "Батончик мюсли"],
    },
    {
      title: "Ужин",
      items: ["Рыба на пару", "Рис с овощами", "Травяной чай"],
    },
  ];

  // Условные данные для мини-календаря
  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="calendar-page">
      {/* Заголовок + переключатель вида */}
      <div className="calendar-header">
        <div className="title-block">
          <h1>Календарь</h1>
          <span className="date-range">11-17 Ноябрь 2024</span>
        </div>
        <div className="view-switcher">
          <button
            className={viewMode === "week" ? "active" : ""}
            onClick={() => handleViewSwitch("week")}
          >
            Неделя
          </button>
          <button
            className={viewMode === "month" ? "active" : ""}
            onClick={() => handleViewSwitch("month")}
          >
            Месяц
          </button>
        </div>
      </div>

      <div className="calendar-content">
        {/* Левая часть (недельное расписание или месячный вид) */}
        <div className="left-side">
          {/* Блок переключения дней (если неделя) */}
          {viewMode === "week" && (
            <div className="week-days">
              {weekDays.map(({ day, label }) => (
                <div
                  key={day}
                  className={`day-box ${day === selectedDay ? "selected" : ""}`}
                  onClick={() => setSelectedDay(day)}
                >
                  <span className="day-number">{day}</span>
                  <span className="day-label">{label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Блок с расписанием приёмов пищи (актуально для выбранного дня) */}
          <div className="meals-schedule">
            {meals.map((meal) => (
              <div className="meal-row" key={meal.title}>
                <h3>{meal.title}</h3>
                <div className="meal-items">
                  {meal.items.map((item, idx) => (
                    <div className="meal-item" key={idx}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Кнопка Экспорт в PDF */}
          <button className="export-btn">Экспорт в PDF</button>
        </div>

        {/* Правая часть (мини-календарь + блок "Поделиться") */}
        <div className="right-side">
          <div className="mini-calendar">
            <h3>Ноябрь 2024</h3>
            <div className="calendar-grid">
              {/* Заголовки дней недели */}
              <div className="day-header">Пн</div>
              <div className="day-header">Вт</div>
              <div className="day-header">Ср</div>
              <div className="day-header">Чт</div>
              <div className="day-header">Пт</div>
              <div className="day-header">Сб</div>
              <div className="day-header">Вс</div>

              {/* Сетка дней (упрощённо 30 дней) */}
              {daysInMonth.map((day) => (
                <div
                  key={day}
                  className={`day-cell ${day === selectedDay ? "current-day" : ""}`}
                  onClick={() => setSelectedDay(day)}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>

          <div className="share-section">
            <h3>Поделиться</h3>
            <label className="access-label">
              Кто имеет доступ
              <input type="text" placeholder="Введите e-mail" />
            </label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" />
                Копировать ссылку
              </label>
              <label>
                <input type="checkbox" />
                Сохранить копию
              </label>
            </div>
            <button className="share-btn">Поделиться</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
