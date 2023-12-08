import { Toolbar, Typography, styled } from '@mui/material';
import { SKILLS_PROFILE, MAP } from '../../utils/constants';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.scss';

const HeaderTypography = styled(Typography)({
  fontFamily: 'YS Text Regular',
  fontSize: '14px',
});

const Header = () => {
  const location = useLocation();

  return (
    <Toolbar
      sx={{
        backgroundColor: '#1A1B22',
      }}
    >
      <div className={styles.headercontainer}>
        <div className={styles.headerlinks}>
          <NavLink
            to="/profile"
            className={`${styles.menulink} ${
              location.pathname === '/profile' ? styles.menuactive : ''
            }`}
          >
            <HeaderTypography>{SKILLS_PROFILE}</HeaderTypography>
          </NavLink>
          <NavLink
            to="/map"
            className={`${styles.menulink} ${
              location.pathname === '/map' ? styles.menuactive : ''
            }`}
          >
            <HeaderTypography>{MAP}</HeaderTypography>
          </NavLink>
        </div>
      </div>
    </Toolbar>
  );
};

export default Header;
