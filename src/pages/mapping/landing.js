import React from 'react';

import ActionPanel from '../../layout/ActionPanel';
import Responsive from '../../layout/Responsive';

import home from '../../images/home.png';
import validate from '../../images/validate.png';

const locations = [
  {
    "name": "PENNAGARAM",
    "path": "09_03"
  },
  {
    "name": "PAPPIREDDIPATTI",
    "path": "09_06"
  },
  {
    "name": "PALACODE",
    "path": "09_08"
  },
  {
    "name": "AUNDIPATTI",
    "path": "21_01"
  },
  {
    "name": "K MYLADUMPARAI",
    "path": "21_02"
  }
];

export default () => <Responsive>
  {locations.map(
    loc => <ActionPanel
      to={`/validation/mapping/${loc.path}`}
      key={loc.path}
      image={validate}
      altText={loc.name}
      text={loc.name}
    >
    </ActionPanel>
  )}  
</Responsive>;
