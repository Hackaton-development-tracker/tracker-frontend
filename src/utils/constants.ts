export const API_MAIN_URL = 'http://localhost:8000/api';
export const API_BASE_URL = API_MAIN_URL + '/v1';
export const REGISTER_URL = `${API_MAIN_URL}/auth/users/`;
export const LOGIN_URL = `${API_MAIN_URL}/auth/jwt/create/`;
export const TOKEN_URL = `${API_MAIN_URL}/auth/jwt/refresh/`;
export const LOGOUT_URL = `${API_MAIN_URL}/auth/logout/`;
export const GET_USER_URL = `${API_MAIN_URL}/auth/users/me/`;

export const TITLE = 'Трекер';
export const ENTER_TO_SYSTEM = 'Вход в систему';
export const PASSWORD = 'Пароль';
export const REPEAT_PASSWORD = 'Повторите пароль';
export const REGISTRATION = 'Регистрация';
export const TO_REGISTRATION = 'Зарегистрироваться';
export const ENTER = 'Вход';
export const EXIT = 'Выход';
export const TECH_SUPPORT = 'Техническая поддержка';
export const COME_BACK = 'Вернуться на главную';
export const NOT_FOUND = 'Страница не найдена';

export const ROUTE_HOME = '/';
export const ROUTE_LOGIN = '/login';
export const ROUTE_REGISTER = '/register';
export const ROUTE_FORGOT_PASS = '/forgot-password';
export const ROUTE_RESET_PASS = '/reset-password';
export const ROUTE_TECH_SUPPORT = '/404';

export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';
