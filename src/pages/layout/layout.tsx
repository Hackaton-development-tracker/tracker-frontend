import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';

export const Layout: FC = () => {
  return (
    <div className="layout">
      <Header />
      <div style={{ display: 'flex', alignItems: 'flex-start'}}>
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};
