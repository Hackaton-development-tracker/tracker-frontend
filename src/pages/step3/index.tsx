import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { Box } from '@mui/material';
import { PrimaryButton } from '../../components/buttons';

function Step3() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/profile');
  };

  return (
    <div className="container">
      <div className={styles.mediumContentBlock}>
        <div className={styles.pictureRight2}>
          <p style={{ marginBottom: '8px' }}>
            <b>Твои навыки соответствуют грейду:</b>
          </p>
          <h1
            style={{
              fontSize: '24px',
              lineHeight: '32px',
              margin: '8px 0 16px 0',
            }}
          >
            Джуниор+
          </h1>
          <p style={{ marginBottom: '28px' }}>
            Ты начинающий специалист, который может самостоятельно выполнять
            несложные задачи. Часто джуну поручают задачи, которые специалистам
            более высокого ранга уже кажутся скучными, например, фиксить баги.
          </p>
          <p style={{ marginBottom: '8px' }}><b>Следующий грейд:</b></p>
          <p style={{ fontSize: '24px', color: '#1D6BF3', fontWeight: '600', margin: '8px 0 16px 0' }}>
            Мидл
          </p>
          <p style={{ marginTop: '16px', marginBottom: '16px' }}>
            Рекомендуем развить:
            <br />
            <b>3 навыка из 10</b>
          </p>
          <Box
            sx={{ '& button': { m: 0, minWidth: 250, textTransform: 'none' } }}
          >
            <PrimaryButton
              variant="contained"
              size="large"
              onClick={handleButtonClick}
            >
              Открыть профиль навыков
            </PrimaryButton>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Step3;
