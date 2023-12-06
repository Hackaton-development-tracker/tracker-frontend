// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import styles from './index.module.scss';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
// import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { LoginButton } from '../../components/buttons';
import chooseSpecsData from '../../components/data/choose_specs.json';

interface SelectSmallProps {
  onSelectChange: (value: string) => void;
}

function SelectSmall({ onSelectChange }: SelectSmallProps) {
  const [spec, setSpec] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSpec(event.target.value);
    onSelectChange(event.target.value);
  };

  return (
    <FormControl sx={{ m: 0, minWidth: 240 }} size="small">
      <InputLabel id="select-small-label"></InputLabel>
      <Select
        labelId="select-small-label"
        id="select-small"
        value={spec}
        label=""
        onChange={handleChange}
      >
        {
          chooseSpecsData.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          ))
        }
      </Select>
    </FormControl>
  );
}

function Step1() {
  const [selectedSpec, setSelectedSpec] = React.useState('');
  const navigate = useNavigate();

  const handleSelectChange = (value: string) => {
    setSelectedSpec(value);
  };
  const isButtonDisabled = selectedSpec === '';

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      navigate('/step2');
    }
  };

  return (
    <div>
      <div className={styles.mediumContentBlock}>
        <div className={styles.pictureRight}>
          <h3>Добро пожаловать в трекер развития!</h3>
          <p>
            Здесь ты узнаешь текущий уровень своих навыков в специальности и
            определишь шаги для их дальнейшего развития.
          </p>
          <p>Для этого тебе потребуется:</p>
          <ol>
            <li>Выбрать свою специальность;</li>
            <li>
              Пройти тест на определение уровня развития своих навыков в
              специальности;
            </li>
            <li>
              Узнать, какие навыки стоить тебе развивать для достижения нового
              уровня;
            </li>
            <li>
              Применить подобранные Трекером под твои навыки инструменты
              развития — короткие курсы и воркшопы Практикума, проекты и
              активности от Мастерской, а также актуальную базу книг, статей и
              видеоуроков.
            </li>
          </ol>
        </div>
        <br />
        <h3>Шаг 1. Выбери свою специальность</h3>
        <SelectSmall onSelectChange={handleSelectChange} />
      </div>
      <div className={styles.mediumContentBlock}>
        <h3>Шаг 2. Пройди тест на определение уровня своих навыков</h3>
        <p>
          Важно понимать, что результаты этого теста будут использованы
          исключительно для оценки твоих компетенций в указанной тобой
          специальности.
        </p>
        <p>
          Прежде чем приступить к тесту, убедись, что у тебя есть достаточно
          времени и спокойной обстановки, чтобы отвечать на вопросы наиболее
          точно.
        </p>
        <p style={{ marginTop: '16px', marginBottom: '16px' }}>
          <b>Время прохождения теста: около 20 минут</b>
        </p>
        <Box
          sx={{ '& button': { m: 0, minWidth: 250, textTransform: 'none' } }}
        >
          <LoginButton
            variant="contained"
            size="large"
            disabled={isButtonDisabled}
            onClick={handleButtonClick}
          >
            Начать тест
          </LoginButton>
        </Box>
      </div>
    </div>
  );
}

export default Step1;
