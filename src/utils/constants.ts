export const API_MAIN_URL = 'http://localhost:8000/api';
export const API_BASE_URL = API_MAIN_URL + '/v1';
export const REGISTER_URL = `${API_MAIN_URL}/auth/users/`;
export const LOGIN_URL = `${API_MAIN_URL}/auth/jwt/create/`;
export const TOKEN_URL = `${API_MAIN_URL}/auth/jwt/refresh/`;
export const LOGOUT_URL = `${API_MAIN_URL}/auth/logout/`;
export const GET_USER_URL = `${API_MAIN_URL}/auth/users/me/`;

export const TITLE = 'Карьерный трекер';
export const ENTER_TO_SYSTEM = 'Войти в аккаунт';
export const PASSWORD = 'Пароль';
export const REPEAT_PASSWORD = 'Повтори пароль';
export const REGISTRATION = 'Зарегистрироваться';
export const NO_ACCOUNT = 'Новый пользователь? ';
export const ACCOUNT_EXIST = 'Уже есть аккаунт? ';
export const ENTER = 'Войти';
export const EXIT = 'Выход';
export const COME_BACK = 'Вернуться назад';
export const NOT_FOUND = 'такой страницы нет...';

export const ROUTE_HOME = '/';
export const ROUTE_LOGIN = '/login';
export const ROUTE_REGISTER = '/register';
export const ROUTE_FORGOT_PASS = '/forgot-password';
export const ROUTE_RESET_PASS = '/reset-password';
export const ROUTE_TECH_SUPPORT = '/404';

export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';
