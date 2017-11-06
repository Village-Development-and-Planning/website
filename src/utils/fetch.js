export default function(url, opts) {
  opts = Object.assign({
    credentials: 'same-origin',
  }, opts);
  return fetch(url, opts)
  .then((res) => {
    return res.json().then((data) => {
      console.log(data);
      return data;
    })
  });
}