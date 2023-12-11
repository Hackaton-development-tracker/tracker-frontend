import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
// import styles from './index.module.scss';
import Box from '@mui/material/Box';
import QuizComponent from '../../components/quiz';
// import quizData from '../../components/data/quiz.json';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import { getSpecId } from '../../services/redux/slices/auth/auth';
import { getQuiz, selectQuiz } from '../../services/redux/slices/quiz/quiz';
import { ROUTE_STEP1 } from '../../utils/constants';

function Step2() {
  const dispatch = useAppDispatch();
  const idspec = useAppSelector(getSpecId) || 0;
  const access = localStorage.getItem('accessToken') ?? '';
  const quizData = useAppSelector(selectQuiz);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getQuiz({ access: access, id: idspec }));
  }, [dispatch]);//dispatch, token, id

  const questions = quizData?.questions || [];

  if(questions.length == 0) {
    navigate(ROUTE_STEP1);
  }

  return (
    <div>
      <Box style={{ marginBottom: '24px' }}>
        <Link
          className="link--back"
          variant="body2"
          onClick={() => {
            navigate(-1);
          }}
        >
          Назад
        </Link>
      </Box>
      <QuizComponent quizzes={questions} />
    </div>
  );
}

export default Step2;
