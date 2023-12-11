// projectsAPI.ts
import { API_BASE_URL } from '../../../../utils/constants';

const checkRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    console.log(res);
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

export const fetchProjects = (token: string) => {
  return fetchData(`${API_BASE_URL}/project/`, token);
};
