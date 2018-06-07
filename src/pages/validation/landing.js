import React from 'react';
import ValidationList from './List';
import ActionPanel from '../../layout/ActionPanel';
import Responsive from '../../layout/Responsive';

import home from '../../images/home.png';
import validate from '../../images/validate.png';

export default (props) => <React.Fragment>
  <ValidationList
    location={props.location} disableActionBar={true}
    listMessage={'Enabled surveys'}
  />
  <hr/>
  <h3>Data validation</h3>
  <Responsive>
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
  </Responsive>
</React.Fragment>;

