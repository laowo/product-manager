import request from 'utils/request';

export async function login({ username, password }) {
  return request(`/api/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      username,
      password
    })
  });
}

export async function logout() {
  return request(`/api/login/logout`);
}
