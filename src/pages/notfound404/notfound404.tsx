import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { PrimaryButton } from '../../components/buttons';
import { COME_BACK, NOT_FOUND } from '../../utils/constants';
import serverError404 from '../../static/assets/images/serverError404.png';
import styles from './notfound404.module.scss';

function NotFound404() {
  return (
    <div className="layout">
      <div className={styles.notfound}>
        <div className={styles.notfound__container}>
          <div className={styles.notfound__content}>
            <div className={styles.notfound__title}>
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
            </div>
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
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default NotFound404;
