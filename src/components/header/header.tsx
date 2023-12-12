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
      {location.pathname === '/profile' || location.pathname === '/map' ? (
        <div className={styles.headerContainer}>
          <div className={styles.headerLinks}>
            <NavLink
              to="/profile"
              className={`${styles.headerMenuLink} ${
                location.pathname === '/profile' ? styles.headerMenuActive : ''
              }`}
            >
              <TextTypography>{SKILLS_PROFILE}</TextTypography>
            </NavLink>
            <NavLink
              to="/map"
              className={`${styles.headerMenuLink} ${
                location.pathname === '/map' ? styles.headerMenuActive : ''
              }`}
            >
              <TextTypography>{MAP}</TextTypography>
            </NavLink>
          </div>
        </div>
      ) : null}
    </Toolbar>
  );
};

export default Header;
