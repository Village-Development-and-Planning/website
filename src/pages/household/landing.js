import React from 'react';

import ActionPanel from '../../layout/ActionPanel';
import Responsive from '../../layout/Responsive';
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

export default () => <Responsive>
  {locations.map(
    loc => <ActionPanel
      to={`/validation/household/district/${loc.path}`}
      key={loc.path}
      image={validate}
      text={loc.name}
    >
    </ActionPanel>
  )}
  <ActionPanel
    to="/validation/household/state"
    key="state"
    image={validate}
    text="TN"
  />
</Responsive>;
