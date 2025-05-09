// src/components/MenuPage/MenuPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuPage.css';

export default function MenuPage() {
  const navigate = useNavigate();
  const [expandedWeek, setExpandedWeek] = useState(null);

  const goToHistory = () => {
    navigate("/menu-history");
  };

  const goToZakup = () => {
    navigate("/zakup");
  };

  // Пример данных — замените на реальные из API/стора
  const weeks = [
    {
      id: 1,
      summary: { calories: 1937.58, proteins: 75.15, fats: 49.36, carbs: 302.49 },
      days: [
      {
        date: 18,
        day: 'Пн',
        meals: {
          breakfast: [
            'Запеканка из кабачков с картофелем',
            'Чай с сахаром',
            'Хлеб ржаной с маслом',
            'Вареное яйцо'
          ],
          lunch: [
            'Суп из чечевицы',
            'Куриные котлеты с картофельным пюре',
            'Компот'
          ],
          dinner: [
            'Творожная запеканка',
            'Кефир'
          ]
        },
        calories: { breakfast: 430, lunch: 680, dinner: 420 }
      },
      {
        date: 19,
        day: 'Вт',
        meals: {
          breakfast: ['Гречневая каша с молоком', 'Хлеб с маслом', 'Какао'],
          lunch: ['Борщ со сметаной', 'Говядина с гречкой', 'Морковный салат', 'Компот'],
          dinner: ['Омлет с овощами', 'Ряженка']
        },
        calories: { breakfast: 420, lunch: 690, dinner: 430 }
      },
      {
        date: 20,
        day: 'Ср',
        meals: {
          breakfast: ['Пшённая каша с тыквой', 'Хлеб с джемом', 'Чай'],
          lunch: ['Суп с фрикадельками', 'Рис с овощами', 'Салат', 'Компот'],
          dinner: ['Творог со сметаной', 'Печенье', 'Кефир']
        },
        calories: { breakfast: 425, lunch: 675, dinner: 425 }
      },
      {
        date: 21,
        day: 'Чт',
        meals: {
          breakfast: ['Манная каша с ягодами', 'Хлеб с маслом', 'Чай'],
          lunch: ['Грибной суп', 'Куриное филе с макаронами', 'Салат', 'Компот'],
          dinner: ['Запеканка из картофеля и рыбы', 'Кефир']
        },
        calories: { breakfast: 430, lunch: 680, dinner: 430 }
      },
      {
        date: 22,
        day: 'Пт',
        meals: {
          breakfast: ['Рисовая каша с молоком', 'Хлеб с сыром', 'Какао'],
          lunch: ['Суп-пюре из овощей', 'Говядина с гречкой', 'Салат из свеклы', 'Компот'],
          dinner: ['Овощное рагу с курицей', 'Ряженка']
        },
        calories: { breakfast: 435, lunch: 670, dinner: 430 }
      }
    ] 
    },
    {
      id: 2,
      summary: { calories: 1900.58, proteins: 80.15, fats: 60.36, carbs: 280.49 },
      days: [
      {
        date: 18,
        day: 'Пн',
        meals: {
          breakfast: [
            'Запеканка из кабачков с картофелем',
            'Чай с сахаром',
            'Хлеб ржаной с маслом',
            'Вареное яйцо'
          ],
          lunch: [
            'Суп из чечевицы',
            'Куриные котлеты с картофельным пюре',
            'Компот'
          ],
          dinner: [
            'Творожная запеканка',
            'Кефир'
          ]
        },
        calories: { breakfast: 430, lunch: 680, dinner: 420 }
      },
      {
        date: 19,
        day: 'Вт',
        meals: {
          breakfast: ['Гречневая каша с молоком', 'Хлеб с маслом', 'Какао'],
          lunch: ['Борщ со сметаной', 'Говядина с гречкой', 'Морковный салат', 'Компот'],
          dinner: ['Омлет с овощами', 'Ряженка']
        },
        calories: { breakfast: 420, lunch: 690, dinner: 430 }
      },
      {
        date: 20,
        day: 'Ср',
        meals: {
          breakfast: ['Пшённая каша с тыквой', 'Хлеб с джемом', 'Чай'],
          lunch: ['Суп с фрикадельками', 'Рис с овощами', 'Салат', 'Компот'],
          dinner: ['Творог со сметаной', 'Печенье', 'Кефир']
        },
        calories: { breakfast: 425, lunch: 675, dinner: 425 }
      },
      {
        date: 21,
        day: 'Чт',
        meals: {
          breakfast: ['Манная каша с ягодами', 'Хлеб с маслом', 'Чай'],
          lunch: ['Грибной суп', 'Куриное филе с макаронами', 'Салат', 'Компот'],
          dinner: ['Запеканка из картофеля и рыбы', 'Кефир']
        },
        calories: { breakfast: 430, lunch: 680, dinner: 430 }
      },
      {
        date: 22,
        day: 'Пт',
        meals: {
          breakfast: ['Рисовая каша с молоком', 'Хлеб с сыром', 'Какао'],
          lunch: ['Суп-пюре из овощей', 'Говядина с гречкой', 'Салат из свеклы', 'Компот'],
          dinner: ['Овощное рагу с курицей', 'Ряженка']
        },
        calories: { breakfast: 435, lunch: 670, dinner: 430 }
      }
    ] 
    },
    {
      id: 3,
      summary: { calories: 1400.90, proteins: 60.15, fats: 65.36, carbs: 279.49 },
      days: [
      {
        date: 18,
        day: 'Пн',
        meals: {
          breakfast: [
            'Запеканка из кабачков с картофелем',
            'Чай с сахаром',
            'Хлеб ржаной с маслом',
            'Вареное яйцо'
          ],
          lunch: [
            'Суп из чечевицы',
            'Куриные котлеты с картофельным пюре',
            'Компот'
          ],
          dinner: [
            'Творожная запеканка',
            'Кефир'
          ]
        },
        calories: { breakfast: 430, lunch: 680, dinner: 420 }
      },
      {
        date: 19,
        day: 'Вт',
        meals: {
          breakfast: ['Гречневая каша с молоком', 'Хлеб с маслом', 'Какао'],
          lunch: ['Борщ со сметаной', 'Говядина с гречкой', 'Морковный салат', 'Компот'],
          dinner: ['Омлет с овощами', 'Ряженка']
        },
        calories: { breakfast: 420, lunch: 690, dinner: 430 }
      },
      {
        date: 20,
        day: 'Ср',
        meals: {
          breakfast: ['Пшённая каша с тыквой', 'Хлеб с джемом', 'Чай'],
          lunch: ['Суп с фрикадельками', 'Рис с овощами', 'Салат', 'Компот'],
          dinner: ['Творог со сметаной', 'Печенье', 'Кефир']
        },
        calories: { breakfast: 425, lunch: 675, dinner: 425 }
      },
      {
        date: 21,
        day: 'Чт',
        meals: {
          breakfast: ['Манная каша с ягодами', 'Хлеб с маслом', 'Чай'],
          lunch: ['Грибной суп', 'Куриное филе с макаронами', 'Салат', 'Компот'],
          dinner: ['Запеканка из картофеля и рыбы', 'Кефир']
        },
        calories: { breakfast: 430, lunch: 680, dinner: 430 }
      },
      {
        date: 22,
        day: 'Пт',
        meals: {
          breakfast: ['Рисовая каша с молоком', 'Хлеб с сыром', 'Какао'],
          lunch: ['Суп-пюре из овощей', 'Говядина с гречкой', 'Салат из свеклы', 'Компот'],
          dinner: ['Овощное рагу с курицей', 'Ряженка']
        },
        calories: { breakfast: 435, lunch: 670, dinner: 430 }
      }
    ] 
    },
    {
      id: 4,
      summary: { calories: 1560.58, proteins: 80.15, fats: 70.36, carbs: 240.29 },
      days: [
      {
        date: 18,
        day: 'Пн',
        meals: {
          breakfast: [
            'Запеканка из кабачков с картофелем',
            'Чай с сахаром',
            'Хлеб ржаной с маслом',
            'Вареное яйцо'
          ],
          lunch: [
            'Суп из чечевицы',
            'Куриные котлеты с картофельным пюре',
            'Компот'
          ],
          dinner: [
            'Творожная запеканка',
            'Кефир'
          ]
        },
        calories: { breakfast: 430, lunch: 680, dinner: 420 }
      },
      {
        date: 19,
        day: 'Вт',
        meals: {
          breakfast: ['Гречневая каша с молоком', 'Хлеб с маслом', 'Какао'],
          lunch: ['Борщ со сметаной', 'Говядина с гречкой', 'Морковный салат', 'Компот'],
          dinner: ['Омлет с овощами', 'Ряженка']
        },
        calories: { breakfast: 420, lunch: 690, dinner: 430 }
      },
      {
        date: 20,
        day: 'Ср',
        meals: {
          breakfast: ['Пшённая каша с тыквой', 'Хлеб с джемом', 'Чай'],
          lunch: ['Суп с фрикадельками', 'Рис с овощами', 'Салат', 'Компот'],
          dinner: ['Творог со сметаной', 'Печенье', 'Кефир']
        },
        calories: { breakfast: 425, lunch: 675, dinner: 425 }
      },
      {
        date: 21,
        day: 'Чт',
        meals: {
          breakfast: ['Манная каша с ягодами', 'Хлеб с маслом', 'Чай'],
          lunch: ['Грибной суп', 'Куриное филе с макаронами', 'Салат', 'Компот'],
          dinner: ['Запеканка из картофеля и рыбы', 'Кефир']
        },
        calories: { breakfast: 430, lunch: 680, dinner: 430 }
      },
      {
        date: 22,
        day: 'Пт',
        meals: {
          breakfast: ['Рисовая каша с молоком', 'Хлеб с сыром', 'Какао'],
          lunch: ['Суп-пюре из овощей', 'Говядина с гречкой', 'Салат из свеклы', 'Компот'],
          dinner: ['Овощное рагу с курицей', 'Ряженка']
        },
        calories: { breakfast: 435, lunch: 670, dinner: 430 }
      }
    ] 
    }
  ];

  const toggleWeek = (id) => {
    setExpandedWeek(prev => (prev === id ? null : id));
  };

  // Типы приёмов пищи для рендера
  const mealTypes = [
    { key: 'breakfast', label: 'Завтрак', css: 'bg-breakfast' },
    { key: 'lunch',     label: 'Обед',     css: 'bg-lunch'     },
    { key: 'dinner',    label: 'Ужин',     css: 'bg-dinner'    }
  ];

  return (
    <div className="menu-page">
      <header className="menu-header">
        <button className="back-btn" onClick={goToHistory}>← Назад</button>
        <h1 className="menu-title">Меню для детей 3 - 5 лет</h1>
        <button onClick={goToZakup} className="purchase-btn">Закуп</button>
      </header>

      <div className="menu-container">
        {/* Аккордеон недель */}
        <div className="weeks-accordion">
          {weeks.map(week => (
            <div
              key={week.id}
              className={`week-section ${expandedWeek === week.id ? 'expanded' : ''}`}
            >
              <div
                className="week-summary"
                onClick={() => toggleWeek(week.id)}
              >
                <span className="week-name">Неделя {week.id}</span>
                <div className="nutrients">
                  <div className="nutrient calories">
                    Калории <b>{week.summary.calories}</b>
                  </div>
                  <div className="nutrient proteins">
                    Белки <b>{week.summary.proteins}</b>
                  </div>
                  <div className="nutrient fats">
                    Жиры <b>{week.summary.fats}</b>
                  </div>
                  <div className="nutrient carbs">
                    Углеводы <b>{week.summary.carbs}</b>
                  </div>
                </div>
                <span className="arrow">{expandedWeek === week.id ? '▲' : '▼'}</span>
              </div>

              {expandedWeek === week.id && (
                <div className="week-details">
                  
                  <div className="days-header">
                  <div className='empty'></div>
                    {week.days.map(d => (
                      <div key={d.date} className="day-header">
                        <div className="day-number">{d.date}</div>
                        <div className="day-name">{d.day}</div>
                      </div>
                    ))}
                  </div>

                  <div className="meals-grid">
                    {mealTypes.map(mt => (
                      <div key={mt.key} className="meal-row">
                        <div className="meal-label">{mt.label}</div>
                        {week.days.map(d => (
                          <div
                            key={d.date}
                            className={`meal-cell ${mt.css}`}
                          >
                            <ol className="meal-list">
                              {d.meals[mt.key].map((dish, i) => (
                                <li key={i}>{dish}</li>
                              ))}
                            </ol>
                            <div className="meal-calories">
                              {d.calories[mt.key]} ккал
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Правый блок: календарь */}
        <div className="calendar-block">
          <div className="calendar-container">
            {/* Header */}
            <div className="calendar-header">
              <h3>Ноябрь 2024</h3>
              <div className="calendar-nav">
                <button className="cal-btn">←</button>
                <button className="cal-btn">→</button>
              </div>
            </div>

            {/* Weekdays */}
            <div className="calendar-weekdays">
              {['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС'].map(d => (
                <div key={d} className="weekday">{d}</div>
              ))}
            </div>

            {/* Days (пример статической сетки) */}
            <div className="calendar-days">
              {/* 28–31 предыдущего месяца */}
              <div className="day dimmed"></div>
              <div className="day dimmed"></div>
              <div className="day dimmed"></div>
              <div className="day dimmed"></div>
              {/* 1–3 */}
              <div className="day">1</div>
              <div className="day">2</div>
              <div className="day">3</div>
              {/* 4–10 */}
              {[4,5,6,7,8,9,10].map(n => (
                <div key={n} className="day">{n}</div>
              ))}
              {/* 11–15 зелёные точки */}
              {[11,12,13,14,15].map(n => (
                <div key={n} className="day with-dot green">{n}<span/></div>
              ))}
              {/* 16–17 */}
              <div className="day">16</div>
              <div className="day">17</div>
              {/* 18–22 выделенный диапазон + точки */}
              {[18,19,20,21,22].map(n => (
                <div key={n} className="day selected with-dot">
                  {n}<span className={n<20?'green':n<22?'yellow':'yellow'} />
                </div>
              ))}
              {/* 23–24 */}
              <div className="day">23</div>
              <div className="day">24</div>
              {/* 25–29 красные точки */}
              {[25,26,27,28,29].map(n => (
                <div key={n} className="day with-dot red">{n}<span/></div>
              ))}
              {/* 30 */}
              <div className="day">30</div>
              {/* 1 следующий месяц */}
              <div className="day dimmed">1</div>
            </div>

            <hr/>

            {/* Поделиться */}
            <div className="share-block">
              <h4>Поделиться</h4>
              <input
                type="text"
                className="share-input"
                placeholder="Пригласить по email или по имени"
              />

              <div className="access-row">
                <div>Кто имеет доступ</div>
                <div className="access-rights">
                  <span>Все</span>
                  <button className="rights-btn">Может просматривать ›</button>
                </div>
              </div>

              <button className="invite-btn">Пригласить</button>

              <div className="share-links">
                <button className="link-btn">📋 Копировать ссылку</button>
                <button className="link-btn">🔗 Поделиться ссылкой</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
