import { Toolbar, Box, Typography } from '@mui/material';
import { SKILLS_PROFILE, MAP } from '../../utils/constants';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Toolbar
      sx={{
        backgroundColor: '#1A1B22',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          padding: '0 12px',
          minHeight: '60px',
          alignItems: 'center',
          paddingLeft: '200px',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <NavLink to="/">
            <Typography
              sx={{
                fontFamily: 'YS Text Regular',
                fontSize: '14px',
                color: '#FFFFFF',
              }}
            >
              {SKILLS_PROFILE}
            </Typography>
          </NavLink>
          <NavLink to="/map">
            <Typography
              sx={{
                fontFamily: 'YS Text Regular',
                fontSize: '14px',
                color: '#FFFFFF',
              }}
            >
              {MAP}
            </Typography>
          </NavLink>
        </Box>
      </Box>
    </Toolbar>
  );
};

export default Header;
