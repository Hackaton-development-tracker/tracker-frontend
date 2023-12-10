import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
// import styles from './index.module.scss';
import Box from '@mui/material/Box';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormGroup from '@mui/material/FormGroup';
// import { useState } from 'react';
// import { LoginButton } from '../../components/buttons';
// import { RadioTap } from '../../components/radio';
// import { CheckboxTap } from '../../components/checkbox';
// import { FormControlLabelTap } from '../../components/label';
import QuizComponent from '../../components/quiz';
import quizData from '../../components/data/quiz.json';

function Step2() {
  const navigate = useNavigate();
  // const [radioValue, setRadioValue] = useState('');
  // const [radioValue2, setRadioValue2] = useState('');
  // const [checkboxValues, setCheckboxValues] = useState({
  //   option1: false,
  //   option2: false,
  //   option3: false,
  // });
  // const [selectedGroups, setSelectedGroups] = useState(0);
  // const totalGroups = 3;
  

  // const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRadioValue(event.target.value);
  //   setSelectedGroups(1);
  // };
  // const handleRadioChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setRadioValue2(event.target.value);
  //   setSelectedGroups(1);
  // };

  // const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCheckboxValues({
  //     ...checkboxValues,
  //     [event.target.name]: event.target.checked,
  //   });
  //   const selectedCount =
  //     Object.values(checkboxValues).filter((value) => value).length +
  //     (event.target.checked ? 1 : -1);
  //   setSelectedGroups(selectedCount);
  // };

  // const isButtonDisabled = !radioValue || !radioValue2 || selectedGroups === 0;

  // const handleContinueClick = () => {
  //   // Переход на страницу /step3
  //   navigate('/step3');
  // };


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
      {quizData.map((quiz) => (
        <QuizComponent key={quiz.quiz_id} quiz={quiz} />
      ))}
      {/* <div className="mediumContentBlock long">
        <div className={styles.title}>
          <span className={styles.numeration}>1.</span>
          <span className={styles.description}>
            Вы хотите увеличить конверсию на вашем сайте. Какие метрики вы
            будете использовать для отслеживания прогресса?
          </span>
        </div>
        <p className={styles.dopdescription}>Выбери 1 вариант ответа:</p>
        <RadioGroup
          aria-label="radio-group"
          name="radio-group"
          value={radioValue}
          onChange={handleRadioChange}
        >
          <FormControlLabelTap
            value="option1"
            control={<RadioTap />}
            label="Анализ A/B-тестов с новым и старым интерфейсом."
          />
          <FormControlLabelTap
            value="option2"
            control={<RadioTap />}
            label="Изучение метрик удержания пользователей перед и после изменений."
          />
          <FormControlLabelTap
            value="option3"
            control={<RadioTap />}
            label="Просмотр отзывов пользователей в социальных сетях."
          />
        </RadioGroup>
      </div>
      <div className="mediumContentBlock long">
        <div className={styles.title}>
          <span className={styles.numeration}>2.</span>
          <span className={styles.description}>
            Вы хотите увеличить конверсию на вашем сайте. Какие метрики вы
            будете использовать для отслеживания прогресса?
          </span>
        </div>
        <p className={styles.dopdescription}>Выбери 1 вариант ответа:</p>
        <RadioGroup
          aria-label="radio-group"
          name="radio-group"
          value={radioValue2}
          onChange={handleRadioChange2}
        >
          <FormControlLabelTap
            value="option1"
            control={<RadioTap />}
            label="Анализ A/B-тестов с новым и старым интерфейсом."
          />
          <FormControlLabelTap
            value="option2"
            control={<RadioTap />}
            label="Изучение метрик удержания пользователей перед и после изменений."
          />
          <FormControlLabelTap
            value="option3"
            control={<RadioTap />}
            label="Просмотр отзывов пользователей в социальных сетях."
          />
        </RadioGroup>
      </div>
      <div className="mediumContentBlock long">
        <div className={styles.title}>
          <span className={styles.numeration}>3.</span>
          <span className={styles.description}>
            Вы хотите увеличить конверсию на вашем сайте. Какие метрики вы
            будете использовать для отслеживания прогресса?
          </span>
        </div>
        <p className={styles.dopdescription}>Выбери несколько вариантов ответа:</p>
        <FormGroup>
          <FormControlLabelTap
            control={
              <CheckboxTap
                checked={checkboxValues.option1}
                onChange={handleCheckboxChange}
                name="option1"
              />
            }
            label="Option 1"
          />
          <FormControlLabelTap
            control={
              <CheckboxTap
                checked={checkboxValues.option2}
                onChange={handleCheckboxChange}
                name="option2"
              />
            }
            label="Option 2"
          />
          <FormControlLabelTap
            control={
              <CheckboxTap
                checked={checkboxValues.option3}
                onChange={handleCheckboxChange}
                name="option3"
              />
            }
            label="Option 3"
          />
        </FormGroup>
      </div>
      <div>
        <Box
          style={{ marginTop: '40px' }}
          sx={{ '& button': { m: 0, minWidth: 250, textTransform: 'none' } }}
        >
          <LoginButton
            variant="contained"
            size="large"
            disabled={isButtonDisabled}
            onClick={handleContinueClick}
          >
            Узнать результат
          </LoginButton>
          <span
            style={{ marginLeft: '16px', fontWeight: '500', fontSize: '16px' }}
          >
            Ответы: <span className={styles.active}>{selectedGroups}</span>/
            {totalGroups}
          </span>
        </Box>
      </div> */}
    </div>
  );
}

export default Step2;
