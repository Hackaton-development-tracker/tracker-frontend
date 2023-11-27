import React, { SetStateAction, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { Box, FormHelperText } from '@mui/material';
// import Header from '../../components/header/header';
import FormControl from '@mui/material/FormControl';

import {
  ENTER,
  ENTER_TO_SYSTEM,
  ROUTE_HOME,
  ROUTE_REGISTER,
  REGISTRATION,
  NO_ACCOUNT,
  TITLE,
} from '../../utils/constants';
import {
  getProfileUser,
  loginUser,
} from '../../services/redux/slices/auth/auth';
import { useAppDispatch } from '../../services/typeHooks';
import {
  FormContainer,
  ErrorLabel,
  LoginButton,
  LoginInput,
  isValidEmail,
} from '../../components/formelements';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [emailС, setEmail] = useState('');
  const [passwordС, setPassword] = useState('');
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };
  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    // Сбрасываем ошибку перед отправкой запроса
    setEmailError('');
    setPasswordError('');

    // Проверяем валидность email и пароля
    if (!isValidEmail(email)) {
      if (email == '') setEmailError('Введите email');
      else setEmailError('Неправильный формат email');
      return;
    }

    if (password.length < 8) {
      setPasswordError('Пароль должен содержать минимум 8 символов');
      return;
    }

    // Вызываем loginUser action с данными из формы
    dispatch(loginUser({ email, password })).then((resultAction) => {
      if (loginUser.fulfilled.match(resultAction)) {
        // После успешного входа, пользователь будет перенаправлен на главную страницу
        setEmail('');
        setPassword('');
        const access = localStorage.getItem('accessToken') ?? '';
        dispatch(getProfileUser({ access }));
        navigate(ROUTE_HOME);
      } else {
        // Если вход не успешный, устанавливаем состояние ошибки
        setPassword('');
        setError('Не удается войти. Пожалуйста, проверь правильность написания логина и пароля');
      }
    });
  };

  return (
    <FormContainer>
      <div className="loginForm">
        <form onSubmit={login} data-testid="loginForm">
          <h4>{TITLE}</h4>
          <Box
            sx={{
              gap: '4px',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '24px',
              flexDirection: 'column',
            }}
          >
            {!error && <h3>{ENTER_TO_SYSTEM}</h3>}
            {error && <ErrorLabel>{error}</ErrorLabel>}
          </Box>
          <FormControl
            fullWidth
            error={!!emailError}
            variant="standard"
          >
            <LoginInput
              fullWidth
              placeholder="Почта"
              autoFocus
              id="email"
              value={emailС}
              name="email"
              onChange={handleEmailChange}
            />
            <p>
            {emailError && <FormHelperText id="email">{emailError}</FormHelperText>}
            </p>
          </FormControl>
          <FormControl
            fullWidth
            variant="standard"
            error={!!passwordError}
            sx={{ mb: 3 }}
          >
            <LoginInput
              fullWidth
              placeholder="Пароль"
              type="password"
              id="password"
              name="password"
              value={passwordС}
              onChange={handlePasswordChange}
            />
            {passwordError && <FormHelperText id="password">{passwordError}</FormHelperText>}
          </FormControl>
          <LoginButton
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mb: 2 }}
          >
            {ENTER}
          </LoginButton>
        </form>
      </div>
      <p className="auth-text">
        {NO_ACCOUNT}
        <Link className={styles.link} to={ROUTE_REGISTER}>
          {REGISTRATION}
        </Link>
      </p>
    </FormContainer>
  );
};

export default LoginPage;
