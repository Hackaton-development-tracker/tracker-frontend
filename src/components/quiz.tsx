import React, { useState } from 'react';

interface Option {
  id: string;
  text: string;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
}

interface UserAnswers {
  [questionId: string]: string | string[];
}

interface QuizComponentProps {
  questions: Question[];
}

const QuizComponent: React.FC<QuizComponentProps> = ({ questions }) => {
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
      if (question.question.includes('правильный ответ')) {
        return (
          <div key={option.id}>
            <input
              type="radio"
              id={option.id}
              name={`question_${question.id}`}
              checked={userAnswers[question.id] === option.id}
              onChange={() => handleRadioChange(question.id, option.id)}
            />
            <label htmlFor={option.id}>{option.text}</label>
          </div>
        );
      } else if (question.question.includes('несколько правильных ответов')) {
        return (
          <div key={option.id}>
            <input
              type="checkbox"
              id={option.id}
              checked={(userAnswers[question.id] as string[])?.includes(option.id)}
              onChange={() => handleCheckboxChange(question.id, option.id)}
            />
            <label htmlFor={option.id}>{option.text}</label>
          </div>
        );
      }
      return null;
    });
  };

  const renderQuestions = () => {
    return questions.map((question) => (
      <div key={question.id}>
        <p>{question.question}</p>
        {renderOptions(question)}
      </div>
    ));
  };

  return (
    <div>
      <h1>Вопросы</h1>
      {renderQuestions()}
      <button onClick={() => console.log('Ответы пользователя:', userAnswers)}>
        Проверить ответы
      </button>
    </div>
  );
};

export default QuizComponent;
