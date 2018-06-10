import React from 'react';

let language = require('./translation-tamil.json');
let currentLang = 'tamil';
let notify = null;

export function T(props) {
  if (props && props.children) {
    let children;
    if (typeof props.children === 'string') {
      children = t(props.children);
      return React.createElement(React.Fragment, null, children);
    } else {
      children = props.children.map((c) => {
        if (typeof c === 'string') {
          return t(c);
        }
        return c;
      });
      return React.createElement(React.Fragment, null, ...children);
    }

  }
  return false;
}

export function t(key) {
  const jKey = key.toLowerCase().trim();
  if (language && language[jKey]) {
    return language[jKey];
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