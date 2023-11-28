import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
// import Header from '../../components/header/header';
import { LoginButton } from '../../components/formelements';
import { COME_BACK, NOT_FOUND } from '../../utils/constants';

function NotFound404() {
  const navigate = useNavigate();

  const clickGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="layout">
      {/* <Header /> */}
      <main className={styles.main}>
        <div className={styles.blockund}>
          <p className={`${styles.text}`}>{NOT_FOUND}</p>
          <LoginButton
            type="button"
            variant="contained"
            sx={{ mb: 2, minWidth: 256 }}
            onClick={clickGoBack}
          >
            {COME_BACK}
          </LoginButton>
        </div>
      </main>
    </div>
  );
}

export default NotFound404;
