import { Toolbar } from '@mui/material';
import { SKILLS_PROFILE, MAP } from '../../utils/constants';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import { TextTypography } from '../cardelements';

const Header = () => {
  const location = useLocation();

  return (
    <Toolbar
      sx={{
        backgroundColor: '#1A1B22',
      }}
    >
      <div className={styles.header__container}>
        <div className={styles.header__links}>
          <NavLink
            to="/profile"
            className={`${styles.header__menu_link} ${
              location.pathname === '/profile' ? styles.header__menu_active : ''
            }`}
          >
            <TextTypography>{SKILLS_PROFILE}</TextTypography>
          </NavLink>
          <NavLink
            to="/map"
            className={`${styles.header__menu_link} ${
              location.pathname === '/map' ? styles.header__menu_active : ''
            }`}
          >
            <TextTypography>{MAP}</TextTypography>
          </NavLink>
        </div>
      </div>
    </Toolbar>
  );
};

export default Header;
