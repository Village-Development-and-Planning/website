import React from 'react';

let language = require('./translation-tamil.json');
let currentLang = 'tamil';
let notify = null;

function normalizeChildren(children) {
  if (!children) return [];
  if (Array.isArray(children)) return children;
  return [children];
}

function translateReactElement(element) {
  if (!element) return element;
  if (typeof element === 'string') return t(element);
  if (typeof element === 'object') {
    const children = normalizeChildren(element.props && element.props.children).map(
      c => translateReactElement(c)
    );
    return React.createElement(element.type, element.props, ...children);
  }
  return element;
}

export function T(props) {
  const children = normalizeChildren(props && props.children).map(
    c => translateReactElement(c)
  );
  return React.createElement(React.Fragment, null, ...children);
}

export function t(key) {
  const jKey = key.toLowerCase().trim();
  if (language && language[jKey]) {
    return language[jKey];
  } else {
    console.log('Translation not found: ', key);
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