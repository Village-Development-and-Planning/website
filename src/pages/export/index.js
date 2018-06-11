import React from 'react';
import ExportList from './List';

export default (props) => <React.Fragment>
  <ExportList
    location={props.location} disableActionBar={true}
    listMessage={'Export data'} listNote={'Download data collected in a CSV format.'}
  />
</React.Fragment>;