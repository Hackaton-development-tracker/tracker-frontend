import React, { FC } from 'react';
// import bookOpen from '@/assets/icon/book-open.svg';
import './navigation.css';
import { NavLink, useLocation } from 'react-router-dom';

const OpenComponent: React.FC = () => {
  const location = useLocation();
  // const token = localStorage.getItem('accessToken') ?? '';

  return (
    <div className="open">
      <div className="open__menu">
        <h2 className="open__menu-span">Тест</h2>
        <nav className="open__nav">
          <NavLink
            to="/statistics"
            className={`open__menu-link ${
              location.pathname === '/statistics' ? 'open__menu-active' : ''
            }`}
          >
            {/* <img className="open__nav-img" src={chartLine} alt="Icon 1" /> */}
            Статистика
          </NavLink>
          <NavLink
            to="/reports"
            className={`open__menu-link ${
              location.pathname === '/reports' ? 'open__menu-active' : ''
            }`}
            style={{ pointerEvents: 'none', opacity: 0.5 }}
          >
            {/* <img className="open__nav-img" src={fileText} alt="Icon 1" /> */}
            Отчеты
          </NavLink>
          <NavLink
            to="/library"
            className={`open__menu-link ${
              location.pathname === '/library' ? 'open__menu-active' : ''
            }`}
            style={{ pointerEvents: 'none', opacity: 0.5 }}
          >
            {/* <img className="open__nav-img" src={bookOpen} alt="Icon 1" /> */}
            Библиотека
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

const Navigation: FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="menu">
        <OpenComponent />
      </div>
    </div>
  );
};

export default Navigation;
