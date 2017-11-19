export default function(url, opts) {
  opts = Object.assign({
    credentials: 'same-origin',
  }, opts);
  return fetch(url, opts)
  .then((res) => {
    if (!res.ok)
      return Promise.reject(res);
    return res.json().then((data) => {
      return data;
    });
  });
}