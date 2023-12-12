// quizResultsAPI.ts
import { API_BASE_URL } from '../../../../utils/constants';

const checkRes = (res: Response) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
};

const postData = (url: string, data: unknown, token: string) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify(data),
  }).then((res) => checkRes(res));
};

export const submitQuizResultsApi = (payload: unknown, token: string) => {
  return postData(`${API_BASE_URL}/tests/take_test/`, payload, token);
};
