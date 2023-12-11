import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { LoginButton } from './buttons';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import CheckboxTap from './checkbox';
import { FormControlLabelTap } from './label';
import { RadioTap } from './radio';
import styles from './quiz.module.scss';
import { Question } from '../services/redux/slices/quiz/quiz';
import { useAppDispatch, useAppSelector } from '../services/typeHooks';
import { specializationSelect } from '../services/redux/slices/specialization/specialization';
import { getSpecId } from '../services/redux/slices/auth/auth';
import { ROUTE_STEP3 } from '../utils/constants';
import { useNavigate } from 'react-router-dom';

interface UserAnswers {
  [questionId: string]: string | string[];
}

interface QuizComponentProps {
  quizzes: Question[];
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quizzes }) => {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const totalQuestions = quizzes.length;
  const idspec = useAppSelector(getSpecId) || 0;
  const specs = useAppSelector(specializationSelect);
  let specializationTitle = '';

  if ('specializations' in specs) {
    const selectedItem = specs.specializations.find(
      (item) => item.id === idspec,
    );
    if (selectedItem) {
      specializationTitle = selectedItem.title;
    }
  }

  let questionNumber = 0;

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    questionId: string,
  ) => {
    const optionId = event.target.value;
    setUserAnswers({
      ...userAnswers,
      [questionId]: optionId,
    });
  };

  const handleCheckboxChange = (questionId: string, optionId: string) => {
    setUserAnswers((prevAnswers: UserAnswers) => {
      const currentAnswers = prevAnswers[questionId] as string[] | undefined;

      if (currentAnswers && currentAnswers.includes(optionId)) {
        const updatedAnswers = currentAnswers.filter((id) => id !== optionId);
        return {
          ...prevAnswers,
          [questionId]: updatedAnswers.length ? updatedAnswers : undefined,
        } as UserAnswers;
      } else {
        const newAnswers = currentAnswers
          ? [...currentAnswers, optionId]
          : [optionId];
        return {
          ...prevAnswers,
          [questionId]: newAnswers,
        } as UserAnswers;
      }
    });
  };

  const isButtonDisabled =
    Object.keys(userAnswers).filter((key) => userAnswers[key] !== undefined)
      .length !== totalQuestions;

  const renderOptions = (question: Question) => {
    return question.answers.map((answer) => {
      if (question.param === 'one') {
        return (
          <FormControlLabelTap
            key={answer.id}
            value={answer.id}
            control={<RadioTap />}
            label={answer.answer}
          />
        );
      } else if (question.param === 'several') {
        return (
          <FormControlLabelTap
            key={answer.id}
            control={
              <CheckboxTap
                checked={
                  (userAnswers[question.id] as string[])?.includes(
                    `${answer.id}`,
                  ) || false
                }
                onChange={() =>
                  handleCheckboxChange(`${question.id}`, `${answer.id}`)
                }
                name={`option_${answer.id}`}
              />
            }
            label={answer.answer}
          />
        );
      }
      return null;
    });
  };

  const renderQuestions = (questions: Question[]) => {
    const questionArray = Array.isArray(questions) ? questions : [questions];
    return questionArray.map((question) => {
      questionNumber++;
      if (question.param === 'one') {
        return (
          <div key={question.id} className="mediumContentBlock long">
            <div className={styles.title}>
              <span className={styles.numeration}>{questionNumber}.</span>
              <span className={styles.description}>{question.question}</span>
            </div>
            <p className={styles.dopdescription}>Выбери один вариант ответа</p>
            <RadioGroup
              aria-label="radio-group`${question.id}`"
              name="radio-group`${question.id}`"
              onChange={(event) => handleRadioChange(event, `${question.id}`)}
            >
              {renderOptions(question)}
            </RadioGroup>
          </div>
        );
      } else if (question.param === 'several') {
        return (
          <div key={question.id} className="mediumContentBlock long">
            <div className={styles.title}>
              <span className={styles.numeration}>{questionNumber}.</span>
              <span className={styles.description}>{question.question}</span>
            </div>
            <p className={styles.dopdescription}>
              Выбери один или несколько вариантов ответа
            </p>
            <FormGroup>{renderOptions(question)}</FormGroup>
          </div>
        );
      }
    });
  };

  const handleQuizSubmit = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const quizResultsPayload = {
      specialization_id: idspec,
      answers: Object.entries(userAnswers).map(([id_question, id_answer]) => ({
        id_question: Number(id_question),
        id_answer: Array.isArray(id_answer)
          ? id_answer.map((id) => ({ id }))
          : [{ id: id_answer }],
      })),
    };

    dispatch(submitQuizResults(quizResultsPayload))
      .then(() => {
        // Redirect to Step 3 after receiving the results
        navigate(ROUTE_STEP3);
      })
      .catch((error: unknown) => {
        // Handle error, e.g., show an alert
        console.error('Failed to submit quiz results:', error);
      });
  };

  return (
    <div>
      <Box style={{ marginBottom: '24px' }}>
        <h3 style={{ margin: '0', fontWeight: '600' }}>
          Тест по специальности "{specializationTitle}"
        </h3>
        <p style={{ margin: '5px 0' }}>
          Ниже представлен{totalQuestions === 1 ? ' ' : 'ы '}
          {totalQuestions} вопрос{totalQuestions === 1 ? '' : 'а'} на ключевые
          навыки.{' '}
        </p>
      </Box>

      <div>{renderQuestions(quizzes)}</div>

      <div>
        <Box
          style={{ marginTop: '40px' }}
          sx={{ '& button': { m: 0, minWidth: 250, textTransform: 'none' } }}
        >
          <LoginButton
            variant="contained"
            size="large"
            disabled={isButtonDisabled}
            onClick={handleQuizSubmit}
          >
            Узнать результат
          </LoginButton>
          <span
            style={{ marginLeft: '16px', fontWeight: '500', fontSize: '16px' }}
          >
            Ответы:{' '}
            <span style={{ color: 'Green' }}>
              {
                Object.values(userAnswers).filter(
                  (value) => value !== undefined,
                ).length
              }
            </span>
            /{totalQuestions}
          </span>
        </Box>
      </div>
    </div>
  );
};

export default QuizComponent;
