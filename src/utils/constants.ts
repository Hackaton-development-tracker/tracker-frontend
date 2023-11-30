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

export const SKILLS_PROFILE = 'Профиль навыков';
export const MAP = 'Карта развития';

export const USER_TITLE = 'Специальность';
export const CHANGE = 'Изменить';
export const USER_CURRENT_LEVEL = 'Текущий грейд';
export const OPEN_MAP = 'Открыть карту развития';
export const USER_NEXT_LEVEL = 'Следующий грейд';
export const USER_NEXT_LEVEL_ACHIEVED = 'достигнут на';
export const TEST_RETAKE_DAYS = 'Тест станет доступен через: ';
export const RETAKE_TEST = 'Пройти тест';
