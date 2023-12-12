import React, { FC } from 'react';
import './navigation.scss';
import { NavLink, useLocation } from 'react-router-dom';
import menuLinksData from '../data/navigation.json';
import menuFooterLinksData from '../data/navigation_footer.json';
const getIconPath = (filename: string) =>
  `../../static/assets/icons/${filename}.svg`;
import { Profile } from '../profile/profile';

const MainMenu: React.FC = () => {
  const location = useLocation();

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

const Navigation: FC = () => {
  return (
      <div className="menu">
        <div className="sticky">
          <Profile />
          <MainMenu />
        </div>
        <SettingsMenu />
      </div>
  );
};

export default Navigation;