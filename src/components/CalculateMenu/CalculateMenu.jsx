import React from 'react';
import './CalculateMenu.css';
import DayMenu from './DayMenu';
import { useNavigate } from "react-router-dom";


const CalculateMenu = () => {
  const navigate = useNavigate();
  const goToZakup = () => {
    navigate("/zakup");
  };



    return (
    <div className='calculate-menu-container'>
      <div className='calculate-menu-content'>
        <div className="new-menu-container">
          <h2>Новое меню для детей 3 - 5 лет</h2>
          <button onClick={goToZakup}>Закуп</button>
        </div>
        <div className="day-menus">
          <DayMenu />
          <DayMenu />
          <DayMenu />
          <DayMenu />
          <DayMenu />
          <DayMenu />
          <DayMenu />
          <DayMenu />
        </div>
      </div>
    </div>
    );
  }

  
  
  export default CalculateMenu;