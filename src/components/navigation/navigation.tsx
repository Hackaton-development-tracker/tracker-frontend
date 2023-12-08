import React, { FC } from 'react';
import profileImg from '../../static/assets/icons/profile.png';
import './navigation.scss';
import { NavLink, useLocation } from 'react-router-dom';
import menuLinksData from '../data/navigation.json';
import menuFooterLinksData from '../data/navigation_footer.json';
const getIconPath = (filename: string) => `../../static/assets/icons/${filename}.svg`;
import { RootState } from '../../services/redux/store';
import { useAppSelector } from '../../services/typeHooks';

const MainMenu: React.FC = () => {
  const location = useLocation();
  // const token = localStorage.getItem('accessToken') ?? '';

  return (
    <div className="open">
      <div className="open__menu">
        <nav className="open__nav">
          {menuLinksData.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              className={`open__menu-link ${
                location.pathname === item.url ? 'open__menu-active' : ''
              }`}
              style={{
                pointerEvents: item.active ? 'auto' : 'none',
                opacity: item.active ? 1 : 0.3,
              }}
            >
              <img
                className="open__nav-img"
                src={getIconPath(item.icon)}
                alt=""
              />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

const SettingsMenu: React.FC = () => {
  return (
    <div className="close_down">
      <div className="open__menu">
        <nav className="open__nav">
          {menuFooterLinksData.map((item) => (
            <NavLink
              key={item.id}
              to={item.url}
              className={`open__menu-link ${
                location.pathname === item.url ? 'open__menu-active' : ''
              }`}
              style={{
                pointerEvents: item.active ? 'auto' : 'none',
                opacity: item.active ? 1 : 0.3,
              }}
            >
              <img
                className="open__nav-img"
                src={getIconPath(item.icon)}
                alt=""
              />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

const Profile: React.FC = () => {
  const mail = useAppSelector((state: RootState) => state.user.user?.email);

  return (
    <div className="profile__container">
      <div className="profile">
        <div className="profile__info">
          <img src={profileImg} className="profile__img" />
          <span className="profile__name">{mail}</span>
        </div>
        <div className="profile__stage">
          <span className="profile__stage-current">Текущий этап</span>
          <span className="profile__stage-next">Акселерация</span>
        </div>
      </div>
    </div>
  );
};

const Navigation: FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="menu">
        <div className="sticky">
          <Profile />
          <MainMenu />
        </div>
        <SettingsMenu />
      </div>
    </div>
  );
};

export default Navigation;
