let language = null;
let currentLang = 'english';
let notify = null;

export function t(key) {
  if (language && language[key]) {
    return language[key];
  }
  return key;
}

export function setLanguage(lang) {
  if (lang === currentLang) return;
  if (lang === 'tamil') {
    return import('./translation-tamil.json').then((t) => {
      language = t;
      currentLang = lang;
      notify && notify(lang);
    });
  } else {
    language = null;
    currentLang = 'english';
    notify && notify(lang);
    return;
  }
}

export function getLanguage() { return currentLang; }

export function setNotify(f) {
  notify = f;
}