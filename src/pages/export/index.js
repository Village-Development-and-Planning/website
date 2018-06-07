import React from 'react';
import ExportList from './List';

export default (props) => <React.Fragment>
  <ExportList
    location={props.location} disableActionBar={true}
    listMessage={'Enabled surveys'}
  />
</React.Fragment>;