import React from 'react';

import Responsive from '../../layout/Responsive';
import ExportList from './List';

export default (props) => <React.Fragment>
  <ExportList
    location={props.location} disableActionBar={true}
    listMessage={'Surveys Currently Live'}
  />
</React.Fragment>;