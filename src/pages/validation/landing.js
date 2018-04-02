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
    altText="Validate Mapping Data"
    text="Validate Mapping Data"
  >
    <div>
      Mapping validations
    </div>
  </ActionPanel>

  <ActionPanel
    to="/locations"
    key="household"
    image={home}
    altText="Validate Household data"
    text="Validate Household data"
  >
    <div>
      Household validations
    </div>
  </ActionPanel>
</Responsive>;
