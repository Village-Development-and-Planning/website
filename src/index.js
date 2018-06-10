import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import {t} from './translations';
window.reactHook = function(klass, props, ...children) {
  if (props && props.translate) {
    delete props.translate;
    if (children && children.length) {
      children.forEach((c, idx) => {
        if (typeof c === 'string') {
          c = c.trim().toLowerCase();
          if (c.startsWith('upload')) console.log(c);
          const tr = t(c);
          if (tr !== c) {
            children[idx] = tr;
          }
        }
      });
    }
  }
  return React.createElement.call(this, klass, props, ...children);
};

const App = require('./App').default;
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
