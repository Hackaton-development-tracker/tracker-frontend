import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { LoginButton } from './buttons';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabelTap } from './label';
import { RadioTap } from './radio';
import styles from './quiz.module.scss';

interface Option {
  id: number;
  text: string;
}

interface Question {
  id: number;
  question: string;
  param: string;
  options: Option[];
}

interface Quiz {
  quiz_id: number;
  quiz_title: string;
  quiz_description: string;
  questions: Question[];
}

interface UserAnswers {
  [questionId: string]: string | string[];
}

interface QuizComponentProps {
  quiz: Quiz;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quiz }) => {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const totalQuestions = quiz.questions.length;

  // const handleRadioChange = (questionId: string, optionId: string) => {
  //   setUserAnswers({
  //     ...userAnswers,
  //     [questionId]: optionId,
  //   });
  // };

  const handleCheckboxChange = (questionId: string, optionId: string) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: userAnswers[questionId]
        ? [...(userAnswers[questionId] as string[]), optionId]
        : [optionId],
    });
  };
  const isButtonDisabled = Object.keys(userAnswers).length !== totalQuestions;

  const renderOptions = (question: Question) => {
    return question.options.map((option) => {
      if (question.param === 'one') {
        return (
          <FormControlLabelTap
            key={option.id}
            id={`option_${option.id}`}
            name={`question_${question.id}`}
            checked={userAnswers[question.id] === `${option.id}`}
            value="option1"
            control={<RadioTap />}
            label={option.text}
          />
        );
      } else if (question.param === 'several') {
        return (
          <div key={option.id}>
            <input
              type="checkbox"
              id={`option_${option.id}`}
              checked={(userAnswers[question.id] as string[])?.includes(
                `${option.id}`,
              )}
              onChange={() =>
                handleCheckboxChange(`${question.id}`, `${option.id}`)
              }
            />
            <label htmlFor={`option_${option.id}`}>{option.text}</label>
          </div>
        );
      }
      return null;
    });
  };

  const renderQuestions = (questions: Question[]) => {
    return questions.map((question) => {
      if (question.param === 'one') {
        return (
          <div key={question.id} className="mediumContentBlock long">
            <div className={styles.title}>
              <span className={styles.numeration}>.</span>
              <span className={styles.description}>{question.question}</span>
            </div>
            <p className={styles.dopdescription}>Выбери 1 вариант ответа:</p>
            <RadioGroup
              aria-label="radio-group"
              name="radio-group"
              // value={radioValue}
            >
              {renderOptions(question)}
            </RadioGroup>
          </div>
        );
      } else if (question.param === 'several') {
        return (
          <div key={question.id} className="mediumContentBlock long">
            <div className={styles.title}>
              <span className={styles.numeration}>.</span>
              <span className={styles.description}>{question.question}</span>
            </div>
            <p className={styles.dopdescription}>Выбери несколько вариантов ответа:</p>
            {renderOptions(question)}
          </div>
        );
      }
    });
  };

  return (
    <div>
      <Box style={{ marginBottom: '24px' }}>
        <h3 style={{ margin: '0', fontWeight: '600' }}>{quiz.quiz_title}</h3>
        <p style={{ margin: '5px 0' }}>{quiz.quiz_description}</p>
      </Box>
      {renderQuestions(quiz.questions)}
      <div>
        <Box
          style={{ marginTop: '40px' }}
          sx={{ '& button': { m: 0, minWidth: 250, textTransform: 'none' } }}
        >
          <LoginButton
            variant="contained"
            size="large"
            disabled={isButtonDisabled}
            onClick={() => console.log('Ответы пользователя:', userAnswers)}
          >
            Узнать результат
          </LoginButton>
          <span
            style={{ marginLeft: '16px', fontWeight: '500', fontSize: '16px' }}
          >
            Ответы: <span>{Object.keys(userAnswers).length}</span>/
            {totalQuestions}
          </span>
        </Box>
      </div>
    </div>
  );
};

export default QuizComponent;
