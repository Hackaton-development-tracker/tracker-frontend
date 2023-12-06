import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';

import styles from './layout.module.scss';

export const Layout: FC = () => {
  return (
    <div>
      <Header />
      <div className={styles.maincontainer}>
        <Navigation />
        <div className={styles.content}>
          <div className={styles.contentinner}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
