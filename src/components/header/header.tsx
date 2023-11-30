import { Toolbar, Box, Link, Typography } from '@mui/material';
import { SKILLS_PROFILE, MAP } from '../../utils/constants';

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
          <Link
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <Typography
              sx={{
                fontFamily: 'YS Text Regular',
                fontSize: '14px',
                color: '#FFFFFF',
              }}
            >
              {SKILLS_PROFILE}
            </Typography>
          </Link>
          <Link
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            <Typography
              sx={{
                fontFamily: 'YS Text Regular',
                fontSize: '14px',
                color: '#FFFFFF',
              }}
            >
              {MAP}
            </Typography>
          </Link>
        </Box>
      </Box>
    </Toolbar>
  );
};

export default Header;
