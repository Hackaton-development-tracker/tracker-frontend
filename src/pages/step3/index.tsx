import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { Box } from '@mui/material';

import { PrimaryButton } from '../../components/buttons';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { selectQuizResults } from '../../services/redux/slices/quiz/quizRezults';
import { getProfileUser } from '../../services/redux/slices/auth/auth';
import { getSkillsApi } from '../../services/redux/slices/skills/skills';
import { getCoursesApi } from '../../services/redux/slices/courses/courses';
import { getKnowledgeApi } from '../../services/redux/slices/knowledge/knowledge';
import { getProjectsApi } from '../../services/redux/slices/projects/projects';
import { ROUTE_PROFILE } from '../../utils/constants';

function Step3() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const quizResults = useAppSelector(selectQuizResults);

  const handleButtonClick = () => {
    const access = localStorage.getItem('accessToken') ?? '';
    dispatch(getProfileUser({ access }));
    dispatch(getSkillsApi({ token: access }));
    dispatch(getCoursesApi({ token: access }));
    dispatch(getKnowledgeApi({ token: access }));
    dispatch(getProjectsApi({ token: access }));
    navigate(ROUTE_PROFILE);
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
            {quizResults.grade_info.grade_current}
          </h1>
          <p style={{ marginBottom: '28px' }}>
            Ты начинающий специалист, который может самостоятельно выполнять
            несложные задачи. Часто джуну поручают задачи, которые специалистам
            более высокого ранга уже кажутся скучными, например, фиксить баги.
          </p>
          <p style={{ marginBottom: '8px' }}>
            <b>Следующий грейд:</b>
          </p>
          <p
            style={{
              fontSize: '24px',
              color: '#1D6BF3',
              fontWeight: '600',
              margin: '8px 0 16px 0',
            }}
          >
            {quizResults.grade_info.next_grade}
          </p>
          <p style={{ marginTop: '16px', marginBottom: '16px' }}>
            Рекомендуем развить:
            <br />
            <b>{quizResults.grade_info.skills_current} навыка из {quizResults.grade_info.skills_max}</b>
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
