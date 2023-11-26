import {
  Box,
  FormControl,
  FormHelperText,
  SnackbarContent,
} from '@mui/material';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import Header from '../../components/header/header';
import {
  ErrorLabel,
  FormContainer,
  LoginButton,
  LoginInput,
  SuccessLabel,
  isValidEmail,
} from '../../components/formelements';
import {
  ENTER,
  REGISTRATION,
  REPEAT_PASSWORD,
  ROUTE_LOGIN,
  ACCOUNT_EXIST,
  TITLE,
} from '../../utils/constants';
import { Snackbar } from '@mui/material';
import { registerUser } from '../../services/redux/slices/auth/auth';
import { useAppDispatch } from '../../services/typeHooks';
import styles from '../login/index.module.scss';

const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const intervalId = useRef<number | undefined>();
  const timeoutId = useRef<number | undefined>();
  const [emailС, setEmail] = useState('');
  const [passwordС, setPassword] = useState('');
  const [passwordConfirmС, setPasswordConfirm] = useState('');

  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const [error3, setError3] = useState('');
  const [error4, setError4] = useState('');
  const [lsuccess, setSuccess] = useState('');

  const handleSnackbarClose = () => {
    setOpen(false);
    navigate(ROUTE_LOGIN);
  };

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

  const handlePasswordConfirmChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setPasswordConfirm(e.target.value);
  };
  const register = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const passwordconf = formData.get('passwordConfirm') as string;

    setError('');
    setError2('');
    setError3('');
    setError4('');
    setSuccess('');
    // Проверяем валидность email и пароля
    if (!isValidEmail(email)) {
      if (email == '') setError('Введите email');
      else setError('Неправильный формат email');
      return;
    }

    if (password.length < 8) {
      setError2('Пароль должен содержать минимум 8 символов');
      return;
    }

    if (password !== passwordconf) {
      setError3('Пароли должны совпадать');
      return;
    }
    dispatch(registerUser({ email, password })).then((resultAction) => {
      if (registerUser.fulfilled.match(resultAction)) {
        // setSuccess('Регистрация прошла успешно');
        setEmail('');
        setPassword('');
        setPasswordConfirm('');

        setOpen(true);
        setSecondsRemaining(5);
        // Уменьшаем значение каждую секунду
        intervalId.current = window.setInterval(() => {
          setSecondsRemaining((prevSeconds) => prevSeconds - 1);
        }, 1000);

        timeoutId.current = window.setTimeout(() => {
          clearInterval(intervalId.current);
          handleSnackbarClose();
        }, 5000);
      } else {
        setError4('Ошибка регистрации');
        return;
      }
    });
    // reset();
    // if (registerUser.rejected.match(resultAction)) {
    //   console.error('Ошибка регистрации:', resultAction.error);
    //   setError('Ошибка регистрации');
    // }
  };

  useEffect(() => {
    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return (
    <FormContainer className="auth-layout">
      <div className="loginForm">
        <form onSubmit={register} data-testid="registerForm" autoComplete="off">
          <h4>{TITLE}</h4>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            {lsuccess && <SuccessLabel>{lsuccess}</SuccessLabel>}
            {!error4 && <h3>{REGISTRATION}</h3>}
            {error4 && <ErrorLabel>{error4}</ErrorLabel>}
          </Box>
          <FormControl
            fullWidth
            error={!!error}
            variant="standard"
            sx={{ mb: 2 }}
          >
            <LoginInput
              fullWidth
              placeholder="Почта как на платформе Практикума"
              autoFocus
              autoComplete="Почта как на платформе Практикума"
              value={emailС}
              id="email"
              name="email"
              inputProps={{ autoComplete: 'off' }}
              onChange={handleEmailChange}
            />
            {error && <FormHelperText id="email">{error}</FormHelperText>}
          </FormControl>
          <FormControl
            fullWidth
            variant="standard"
            error={!!error2}
            sx={{ mb: 3 }}
          >
            <LoginInput
              fullWidth
              placeholder="Придумай пароль"
              type="password"
              autoComplete="off"
              id="password"
              name="password"
              value={passwordС}
              inputProps={{ autoComplete: 'off' }}
              onChange={handlePasswordChange}
            />
            {error2 && <FormHelperText id="password">{error2}</FormHelperText>}
          </FormControl>
          <FormControl
            fullWidth
            variant="standard"
            error={!!error3}
            sx={{ mb: 4 }}
          >
            <LoginInput
              fullWidth
              placeholder={REPEAT_PASSWORD}
              type="password"
              autoComplete="off"
              id="passwordConfirm"
              name="passwordConfirm"
              value={passwordConfirmС}
              inputProps={{ autoComplete: 'off' }}
              onChange={handlePasswordConfirmChange}
            />
            {error3 && <FormHelperText id="password">{error3}</FormHelperText>}
          </FormControl>
          <LoginButton
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mb: 2 }}
          >
            {REGISTRATION}
          </LoginButton>
          <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <SnackbarContent
              style={{
                backgroundColor: '#00BE64',
              }}
              message={
                <span id="client-snackbar">{`Регистрация прошла успешно. Вы будете перенаправлены на страницу авторизации через ${secondsRemaining} сек.`}</span>
              }
            />
          </Snackbar>
        </form>
      </div>
      <p className="auth-text">
        {ACCOUNT_EXIST}
        <Link className={styles.link} to="/login">
          {ENTER}
        </Link>
      </p>
    </FormContainer>
  );
};

export default RegisterPage;
