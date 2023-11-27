import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('Введите адрес электронной почты')
    .matches(
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
      'Введите адрес почты вида Ivan@mail.ru',
    ),
  password: yup.string().required('Введите пароль'),
});