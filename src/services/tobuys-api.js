const BASE_URL = '/api/tobuys';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(tobuy) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(tobuy)
  }).then(res => res.json());
}

export function update(tobuy) {
  return fetch(`${BASE_URL}/${tobuy._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(tobuy)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}