import {
  Box,
  FormControl,
  SnackbarContent,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ErrorLabel,
  ErrorMessage,
  FormContainer,
  LoginInput,
  SuccessLabel,
} from '../../components/formelements';
import { LoginButton } from '../../components/buttons';
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
import styles from '../login/login.module.scss';
import { registerSchema } from '../../utils/validationSchema';

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
  const [lsuccess, setSuccess] = useState('');

  interface LoginFormInputs {
    email: string;
    password: string;
    passwordConfirm: string;
  }

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(registerSchema),
    mode: 'onChange',
  });

  const getInputError = (fieldName: string) => {
    return errors.hasOwnProperty(fieldName);
  };

  const handleSnackbarClose = () => {
    setOpen(false);
    navigate(ROUTE_LOGIN);
  };

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    const email = data.email as string;
    const password = data.password as string;
    const passwordConfirm = data.passwordConfirm as string;

    setError('');
    setSuccess('');

    if (password !== passwordConfirm) {
      setError('Пароли должны совпадать');
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
        console.log(resultAction);
        setError('Ошибка регистрации');
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          data-testid="registerForm"
          autoComplete="off"
        >
          <h4>{TITLE}</h4>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            {lsuccess && <SuccessLabel>{lsuccess}</SuccessLabel>}
            {!error && <h3>{REGISTRATION}</h3>}
            {error && <ErrorLabel>{error}</ErrorLabel>}
          </Box>
          <FormControl fullWidth error={!!errors.email} variant="standard">
            <Controller
              control={control}
              name="email"
              defaultValue={emailС}
              render={(props) => (
                <LoginInput
                  type="email"
                  {...props.field}
                  fullWidth
                  placeholder="Почта как на платформе Практикума"
                  autoFocus
                  id="email"
                  inputProps={{ autoComplete: 'off' }}
                  onChange={(e) => {
                    setValue('email', e.target.value);
                    setEmail(e.target.value);
                    props.field.onChange(e);
                  }}
                  error={getInputError('email')}
                />
              )}
            />
            <div className="auth-error">
              {errors.email && (
                <ErrorMessage id="email">{errors.email?.message}</ErrorMessage>
              )}
            </div>
          </FormControl>
          <FormControl fullWidth variant="standard" error={!!error}>
            <Controller
              control={control}
              name="password"
              defaultValue={passwordС}
              render={(props) => (
                <LoginInput
                  {...props.field}
                  fullWidth
                  placeholder="Придумай пароль"
                  type="password"
                  autoComplete="off"
                  id="password"
                  name="password"
                  inputProps={{ autoComplete: 'off' }}
                  onChange={(e) => {
                    setValue('password', e.target.value);
                    setPassword(e.target.value);
                    props.field.onChange(e);
                  }}
                  error={getInputError('password')}
                />
              )}
            />
            <div className="auth-error">
              {errors.password && (
                <ErrorMessage id="password">
                  {errors.password?.message}
                </ErrorMessage>
              )}
            </div>
          </FormControl>
          <FormControl
            fullWidth
            error={!!errors.passwordConfirm}
            variant="standard"
          >
            <Controller
              control={control}
              name="passwordConfirm"
              defaultValue={passwordConfirmС}
              render={(props) => (
                <LoginInput
                  {...props.field}
                  fullWidth
                  placeholder={REPEAT_PASSWORD}
                  type="password"
                  autoComplete="off"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  inputProps={{ autoComplete: 'off' }}
                  onChange={(e) => {
                    setValue('passwordConfirm', e.target.value);
                    setPassword(e.target.value);
                    props.field.onChange(e);
                  }}
                  error={getInputError('passwordConfirm')}
                />
              )}
            />
            <div className="auth-error">
              {errors.passwordConfirm && (
                <ErrorMessage id="password">
                  {errors.passwordConfirm?.message}
                </ErrorMessage>
              )}
            </div>
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
