import React from 'react';

import Responsive from '../../layout/Responsive';
import ValidationList from './List';

export default (props) => <React.Fragment>
  <ValidationList
    location={props.location} disableActionBar={true}
    listMessage={'Surveys Currently Live'}
  />
</React.Fragment>;