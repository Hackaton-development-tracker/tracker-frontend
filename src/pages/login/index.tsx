import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './index.module.scss';
import { Box } from '@mui/material';
// import Header from '../../components/header/header';
import FormControl from '@mui/material/FormControl';
import { loginSchema } from '../../utils/validationSchema';

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
  ErrorMessage,
  LoginButton,
  LoginInput,
} from '../../components/formelements';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [emailС, setEmail] = useState('');
  const [passwordС, setPassword] = useState('');
  const [error, setError] = useState('');

  interface LoginFormInputs {
    email: string;
    password: string;
  }

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver<LoginFormInputs>(loginSchema),
    mode: 'onChange',
  });

  const getInputError = (fieldName: string) => {
    return errors.hasOwnProperty(fieldName);
  };

  // Form submission handler
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    const email = data.email as string;
    const password = data.password as string;

    // Вызываем loginUser action с данными из формы
    dispatch(loginUser({ email, password })).then((resultAction) => {
      if (loginUser.fulfilled.match(resultAction)) {
        // После успешного входа, пользователь будет перенаправлен на главную страницу
        const access = localStorage.getItem('accessToken') ?? '';
        dispatch(getProfileUser({ access }));
        navigate(ROUTE_HOME);
      } else {
        // Если вход не успешный, устанавливаем состояние ошибки
        setError(
          'Не удается войти. Пожалуйста, проверь правильность написания логина и пароля',
        );
      }
    });
  };

  return (
    <FormContainer>
      <div className="loginForm">
        <form onSubmit={handleSubmit(onSubmit)} data-testid="loginForm">
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
                  placeholder="Почта"
                  autoFocus
                  id="email"
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
          <FormControl
            fullWidth
            variant="standard"
            error={!!errors.password}
            sx={{ mb: 3 }}
          >
            <Controller
              control={control}
              name="password"
              defaultValue={passwordС}
              render={(props) => (
                <LoginInput
                  {...props.field}
                  fullWidth
                  placeholder="Пароль"
                  type="password"
                  id="password"
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
