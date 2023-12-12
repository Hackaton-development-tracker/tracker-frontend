import { checkRes } from '../../../../utils/fetch';
import {
  GET_USER_URL,
  LOGIN_URL,
  LOGOUT_URL,
  REGISTER_URL,
} from '../../../../utils/constants';

const fetchData = (url: string, data: object) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => checkRes(res));
};

const fetchDataAuth = (
  url: string,
  data: { token: string },
  method = 'GET',
) => {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${data.token}`,
    },
  }).then((res) => checkRes(res));
};

const fetchDataAuthLogout = (
  url: string,
  data: { token: string },
  method = 'POST',
) => {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${data.token}`,
    },
    body: JSON.stringify({ data }),
  }).then((res) => checkRes(res));
};

export const login = (email: string, password: string) => {
  return fetchData(`${LOGIN_URL}`, { email, password });
};

export const logout = (token: string) => {
  if (token !== '')
    return fetchDataAuthLogout(`${LOGOUT_URL}`, { token });
  else return true;
};

export const register = (email: string, password: string) => {
  return fetchData(`${REGISTER_URL}`, { email, password });
};

// export const refresh = (token: string) => {
//   return fetchData(`${TOKEN_URL}`, { token });
// };

export const getuser = (token: string) => {
  return fetchDataAuth(`${GET_USER_URL}`, { token });
};
