import React, { FC } from 'react';
import caseImg from '@/../dist/assets/icon/case.svg';
import masterImg from '@/../dist/assets/icon/study.svg';
import trackerImg from '@/../dist/assets/icon/grow_up.svg';
import diaryImg from '@/../dist/assets/icon/book.svg';
import contactImg from '@/../dist/assets/icon/phone.svg';
import chatImg from '@/../dist/assets/icon/chat.svg';
import vacationImg from '@/../dist/assets/icon/vacation.svg';
import settingImg from '@/../dist/assets/icon/settings.svg';
import exitImg from '@/../dist/assets/icon/exit.svg';
import profileImg from '@/../dist/assets/profile.png';
import './navigation.scss';
import { NavLink, useLocation } from 'react-router-dom';

const MainMenu: React.FC = () => {
  const location = useLocation();
  // const token = localStorage.getItem('accessToken') ?? '';

  return (
    <div className="open">
      <div className="open__menu">
        <nav className="open__nav">
          <NavLink
            to="/vacancies"
            className={`open__menu-link ${
              location.pathname === '/vacancies' ? 'open__menu-active' : ''
            }`}
            style={{ pointerEvents: 'none', opacity: 0.3 }}
          >
            <img className="open__nav-img" src={caseImg} alt="Icon 1" />
            Вакансии
          </NavLink>
          <NavLink
            to="/workshop"
            className={`open__menu-link ${
              location.pathname === '/workshop' ? 'open__menu-active' : ''
            }`}
            style={{ pointerEvents: 'none', opacity: 0.3 }}
          >
            <img className="open__nav-img" src={masterImg} alt="Icon 1" />
            Мастерская
          </NavLink>
          <NavLink
            to="/step1"
            className={`open__menu-link ${
              location.pathname === '/step1' ? 'open__menu-active' : ''
            }`}
          >
            <img className="open__nav-img" src={trackerImg} alt="Icon 1" />
            Трекер развития
          </NavLink>
          <NavLink
            to="/diary"
            className={`open__menu-link ${
              location.pathname === '/diary' ? 'open__menu-active' : ''
            }`}
            style={{ pointerEvents: 'none', opacity: 0.3 }}
          >
            <img className="open__nav-img" src={diaryImg} alt="Icon 1" />
            Дневник
          </NavLink>
          <NavLink
            to="/contacts"
            className={`open__menu-link ${
              location.pathname === '/contacts' ? 'open__menu-active' : ''
            }`}
            style={{ pointerEvents: 'none', opacity: 0.3 }}
          >
            <img className="open__nav-img" src={contactImg} alt="Icon 1" />
            Контакты
          </NavLink>
          <NavLink
            to="/lenta"
            className={`open__menu-link ${
              location.pathname === '/lenta' ? 'open__menu-active' : ''
            }`}
            style={{ pointerEvents: 'none', opacity: 0.3 }}
          >
            <img className="open__nav-img" src={chatImg} alt="Icon 1" />
            Лента
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

const SettingsMenu: React.FC = () => {
  return (
    <div className="open">
      <div className="open__menu">
        <nav className="open__nav">
          <NavLink
            to="/vacation"
            className={`open__menu-link ${
              location.pathname === '/vacation' ? 'open__menu-active' : ''
            }`}
            style={{ pointerEvents: 'none', opacity: 0.3 }}
          >
            <img className="open__nav-img" src={vacationImg} alt="Icon 1" />
            Уйти в отпуск
          </NavLink>
          <NavLink
            to="/setting"
            className={`open__menu-link ${
              location.pathname === '/setting' ? 'open__menu-active' : ''
            }`}
            style={{ pointerEvents: 'none', opacity: 0.3 }}
          >
            <img className="open__nav-img" src={settingImg} alt="Icon 1" />
            Инфо профиля
          </NavLink>
          <NavLink
            to="/logout"
            className={`open__menu-link ${
              location.pathname === '/logout' ? 'open__menu-active' : ''
            }`}
          >
            <img className="open__nav-img" src={exitImg} alt="Icon 1" />
            Выход
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <div className="profile__container">
      <div className="profile">
        <div className="profile__info">
          <img src={profileImg} className="profile__img" />
          <span className="profile__name">Константин Константинопольский</span>
        </div>
        <div className="profile__stage">
          <span className='profile__stage-current'>Текущий этап</span> 
          <span className='profile__stage-next'>Акселерация</span>
        </div>
      </div>
    </div>
  );
};

const Navigation: FC = () => {
  return (
      <div className="menu">
        <div>
          <Profile />
          <MainMenu />
        </div>
        <SettingsMenu />
      </div>
  );
};

export default Navigation;