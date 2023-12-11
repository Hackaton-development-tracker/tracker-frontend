import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';
import FormControl from '@mui/material/FormControl';
import styles from './index.module.scss';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import React, { useEffect } from 'react';

import { Box } from '@mui/material';
import { PrimaryButton } from '../../components/buttons';
import { getSpecializationApi, specializationSelect } from '../../services/redux/slices/specialization/specialization';
import { updateSpecialization } from '../../services/redux/slices/auth/auth';
import { ROUTE_STEP2 } from '../../utils/constants';

interface SelectSmallProps {
  onSelectChange: (value: string) => void;
}

function SelectSmall({ onSelectChange }: SelectSmallProps) {
  const dispatch = useAppDispatch();
  const specs = useAppSelector(specializationSelect);
  const [spec, setSpec] = React.useState('');
  
  
  const handleChange = (event: SelectChangeEvent) => {
    setSpec(event.target.value);
    onSelectChange(event.target.value);
    dispatch(updateSpecialization({ id_speciality: event.target.value as unknown as number }));
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
        {'specializations' in specs &&
          specs.specializations.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

function Step1() {
  const dispatch = useAppDispatch();
  const [selectedSpec, setSelectedSpec] = React.useState('');
  const token = localStorage.getItem('accessToken') ?? '';
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(
      getSpecializationApi({ token }),
    );
  },[]);
  const handleSelectChange = (value: string) => {
    setSelectedSpec(value);
  };
  const isButtonDisabled = selectedSpec === '';

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      navigate(ROUTE_STEP2);
    }
  };

  return (
    <div className="container">
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
          <PrimaryButton
            variant="contained"
            size="large"
            disabled={isButtonDisabled}
            onClick={handleButtonClick}
          >
            Начать тест
          </PrimaryButton>
        </Box>
      </div>
    </div>
  );
}

export default Step1;
