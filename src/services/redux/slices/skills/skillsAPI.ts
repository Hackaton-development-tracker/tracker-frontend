import { API_BASE_URL } from '../../../../utils/constants';

const checkRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
};

const fetchData = (url: string, token: string) => {
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  }).then((res) => checkRes(res));
};

export const fetchSkills = (
  token: string,
) => {
  return fetchData(
    `${API_BASE_URL}/user_skills/`,
    token,
  );
};
