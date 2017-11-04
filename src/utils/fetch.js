export default function(url, opts) {
  opts = Object.assign({
    credentials: 'same-origin',
  }, opts);
  return fetch(url, opts)
  .then((res) => {
    const json = res.json();
    console.log(json);
    return json;
  });
}