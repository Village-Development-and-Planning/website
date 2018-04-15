export function _location(key) {
  let [lat, long] = key.split(',');
  if (!lat || !long) return;
  lat = parseInt(lat, 10) / 10000;
  long = parseInt(long, 10) / 10000;
  return [lat, long];
}

export function _locations(value) {
  if (!value || (typeof value !== 'object')) return;
  let ret = [];
  Object.keys(value).forEach(
    k => {
      const l = _location(k);
      if (l) ret.push(l);
    }
  );
  return ret;
}

