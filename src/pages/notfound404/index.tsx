import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import { LoginButton } from '../../components/formelements';
import { COME_BACK, NOT_FOUND } from '../../utils/constants';
import serverError404 from '../../static/assets/images/serverError404.png';

function NotFound404() {
  return (
    <div className="layout">
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.textBlock}>
            <div className={styles.titleBlock}>
              <h1 className={styles.title}>404</h1>
              <p className={`${styles.text}`}>{NOT_FOUND}</p>
            </div>
            <Link
              to={'https://career.praktikum-services.ru/'}
              className={styles.link}
            >
              <LoginButton
                type="button"
                variant="contained"
                sx={{ mb: 2, minWidth: 285, maxHeight: 40 }}
              >
                {COME_BACK}
              </LoginButton>
            </Link>
          </div>
          <img
            src={serverError404}
            className={styles.img}
            alt="Ошибка сервера 404"
          ></img>
        </div>
      </main>
    </div>
  );
}

export default NotFound404;
