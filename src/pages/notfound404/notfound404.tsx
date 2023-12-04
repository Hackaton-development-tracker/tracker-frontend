import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { PrimaryButton } from '../../components/buttons';
import { COME_BACK, NOT_FOUND } from '../../utils/constants';
import serverError404 from '../../static/assets/images/serverError404.png';

function NotFound404() {
  return (
    <div className="layout">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '120px 144px',
            maxWidth: '1280px',
            minWidth: '992px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'start',
              alignItems: 'start',
              width: '286px',
              gap: '48px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'start',
                gap: '12px',
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                color="#1D6BF3"
                sx={{
                  margin: 0,
                  fontFamily: 'YS Text Medium',
                  letterSpacing: 0,
                  fontWeight: 500,
                  fontSize: '128px',
                  lineHeight: '130px',
                }}
              >
                404
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'YS Text Medium',
                  letterSpacing: 0,
                  fontSize: '18px',
                  lineHeight: '24px',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                {NOT_FOUND}
              </Typography>
            </Box>
            <Link to={'/'}>
              <PrimaryButton
                type="button"
                variant="contained"
                sx={{
                  minWidth: 285,
                  borderRadius: '6px',
                  fontSize: '14px',
                  maxHeight: '40px',
                }}
              >
                {COME_BACK}
              </PrimaryButton>
            </Link>
          </Box>
          <Box
            sx={{
              '& img': {
                maxHeight: '540px',
                width: 'fit-content',
                objectFit: 'scale-down',
              },
            }}
          >
            <img src={serverError404} alt="Ошибка сервера 404"></img>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default NotFound404;
