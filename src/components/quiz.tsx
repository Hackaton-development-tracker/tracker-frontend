import Box from '@mui/material/Box';
import React, { useState } from 'react';
import { PrimaryButton } from './buttons';

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
  quizzes: Quiz[];
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quizzes }) => {
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});

  const handleRadioChange = (questionId: string, optionId: string) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: optionId,
    });
  };

  const handleCheckboxChange = (questionId: string, optionId: string) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: userAnswers[questionId]
        ? [...(userAnswers[questionId] as string[]), optionId]
        : [optionId],
    });
  };

  const renderOptions = (question: Question) => {
    return question.options.map((option) => {
      if (question.param == "one") {
        return (
          <div key={option.id}>
            <input
              type="radio"
              id={`{option.id}`}
              name={`question_${question.id}`}
              checked={userAnswers[question.id] === `{option.id}`}
              onChange={() => handleRadioChange(`{question.id}`, `{option.id}`)}
            />
            <label htmlFor={`{option.id}`}>{option.text}</label>
          </div>
        );
      } else if (question.param == "several") {
        return (
          <div key={option.id}>
            <input
              type="checkbox"
              id={`{option.id}`}
              checked={(userAnswers[question.id] as string[])?.includes(`{option.id}`)}
              onChange={() => handleCheckboxChange(`{question.id}`, `{option.id}`)}
            />
            <label htmlFor={`{option.id}`}>{option.text}</label>
          </div>
        );
      }
      return null;
    });
  };

  const renderQuestions = (questions: Question[]) => {
    return questions.map((question) => (
      <div key={question.id}>
        <p>{question.question}</p>
        {renderOptions(question)}
      </div>
    ));
  };
  const renderHeadQuiz = () => {
    return quizzes.map((item) => (
      <>
        <Box style={{ marginBottom: '24px' }}>
          <h3 style={{ margin: '0', fontWeight: '600' }}>{item.quiz_title}</h3>
          <p style={{ margin: '5px 0' }}>
            {item.quiz_description}
          </p>
        </Box>
        {renderQuestions(item.questions)}
      </>
    ));
  };

  return (
    <>
      {renderHeadQuiz()}
      <div>
        <Box
          style={{ marginTop: '40px' }}
          sx={{ '& button': { m: 0, minWidth: 250, textTransform: 'none' } }}
        >
          <PrimaryButton
            variant="contained"
            size="large"
            // disabled={isButtonDisabled}
            onClick={() => console.log('Ответы пользователя:', userAnswers)}
          >
            Узнать результат
          </PrimaryButton>
          <span
            style={{ marginLeft: '16px', fontWeight: '500', fontSize: '16px' }}
          >
            {/* Ответы: <span className={styles.active}>{selectedGroups}</span>/{totalGroups} */}
          </span>
        </Box>
      </div>
      {/* <button onClick={() => console.log('Ответы пользователя:', userAnswers)}>
        Проверить ответы
      </button> */}
    </>
  );
};

export default QuizComponent;
