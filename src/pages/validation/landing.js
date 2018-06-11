import React from 'react';
import ValidationList from './List';
import ActionPanel from '../../layout/ActionPanel';
import Responsive from '../../layout/Responsive';
import {t, T} from '../../translations';

import home from '../../images/home.png';
import validate from '../../images/validate.png';

export default (props) => <React.Fragment>
  <ValidationList
    location={props.location} disableActionBar={true}
    listMessage={'Validate data'} listNote= {'Validate data collected to monitor the quality of data collected.'}
  />
  <hr/>
  <h3><T>Data validation</T></h3>
  <Responsive>
    <ActionPanel
      to="/validation/mapping"
      key="mapping"
      image={validate}
      text="Mapping Data"
    >
      <div>
        <T>Check and monitor mapping data</T>
      </div>
    </ActionPanel>

    <ActionPanel
      to="/validation/household"
      key="household"
      image={home}
      text="Household data"
    >
      <div>
        <T>Check and monitor household data</T>
      </div>
    </ActionPanel>
  </Responsive>
</React.Fragment>;

