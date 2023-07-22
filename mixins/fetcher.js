function updateOptions(options) {
  const update = { ...options };
  const token = JSON.parse(localStorage.getItem('token'))
  if (token) {
    update.headers = {
      ...update.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return update;
}

export default function fetcher(url, options) {
  return fetch(url, updateOptions(options));
}