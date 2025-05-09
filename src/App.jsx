import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import RegisterForm from "./components/RegistrationForm/RegistrationForm.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import BottomSidebar from "./components/BottomSidebar/BottomSidebar.jsx";
import CreateMenu from "./components/CreateMenu/CreateMenu.jsx";
import CalculateMenu from "./components/CalculateMenu/CalculateMenu.jsx";
import CalendarPage from "./components/CalendarPage/CalendarPage.jsx";
import LibraryPage from "./components/LibraryPage/LibraryPage.jsx";
import WarehousePage from "./components/WarehousePage/WarehousePage.jsx";
import HistoryPage from "./components/HistoryPage/HistoryPage.jsx";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import SupportPage from "./components/SupportPage/SupportPage.jsx";
import ZakupPage from "./components/ZakupPage/ZakupPage";
import DashboardPage from './components/DashboardPage/DashboardPage';
import MonthlyMenuPage from './components/MenuPage/MenuPage.jsx';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <BottomSidebar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/create-menu" element={<CreateMenu />} />
          <Route path="/calculate-menu" element={<CalculateMenu />} /> 
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/warehouse" element={<WarehousePage />} />
          <Route path="/menu-history" element={<HistoryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/zakup" element={<ZakupPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/menu" element={<MonthlyMenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;