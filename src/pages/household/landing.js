import React from 'react';

import ActionPanel from '../../layout/ActionPanel';
import Responsive from '../../layout/Responsive';
import LocationSelect from './location-select';

import validate from '../../images/validate.png';


const locations = [
  {
    "name": "THENI",
    "path": "21"
  },
  {
    "name": "DHARMAPURI",
    "path": "09"
  },
];

export default () => <React.Fragment>
  <LocationSelect/>
  <div/>
</React.Fragment>;
