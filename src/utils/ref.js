export default function(obj, key) {
  return (function(ref) {
    this[key] = ref;
  }).bind(obj)
}
