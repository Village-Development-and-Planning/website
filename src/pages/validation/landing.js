import React from 'react';
import ValidationList from './List';
// import ActionPanel from '../../layout/ActionPanel';
// import Responsive from '../../layout/Responsive';
// import {T} from '../../translations';
// import home from '../../images/home.png';
// import validate from '../../images/validate.png';

export default (props) => <React.Fragment>
  <ValidationList
    location={props.location} disableActionBar={true}
    listMessage={<React.Fragment>
      <h3>Validate data</h3>
      <p>Validate data collected to monitor the quality of data collected.</p>
    </React.Fragment>}
  />
</React.Fragment>;

