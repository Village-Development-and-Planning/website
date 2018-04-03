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
    text="Validate Mapping Data"
  >
    <div>
      Mapping validations
    </div>
  </ActionPanel>

  <ActionPanel
    to="/validation/household"
    key="household"
    image={home}
    text="Validate Household data"
  >
    <div>
      Household validations
    </div>
  </ActionPanel>
</Responsive>;
