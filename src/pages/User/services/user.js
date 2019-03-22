import request from 'utils/request';

export async function query() {
  return request(`/api/user`);
}

export async function create({ values }) {
  return request(`/api/user/add`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      values
    })
  });
}

export async function update({ _id, values }) {
  return request(`/api/user/update`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      id: _id,
      values
    })
  });
}

export async function deleteData({ _id }) {
  return request(`/api/user/delete`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      id: _id,
    })
  });
}
