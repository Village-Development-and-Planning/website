import React from 'react';

import ActionPanel from '../../layout/ActionPanel';
import Responsive from '../../layout/Responsive';

import home from '../../images/home.png';
import validate from '../../images/validate.png';

export default () => <Responsive>
  <ActionPanel
    to="/validation/mapping"
    key="mapping"
    image={validate}
    text="Mapping Data"
  >
    <div>
      Check and monitor mapping data
    </div>
  </ActionPanel>

  <ActionPanel
    to="/validation/household"
    key="household"
    image={home}
    text="Household data"
  >
    <div>
      Check and monitor household data
    </div>
  </ActionPanel>
</Responsive>;
