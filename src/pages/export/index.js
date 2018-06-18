import React from 'react';
import ExportList from './List';

export default (props) => <React.Fragment>
  <ExportList
    location={props.location} disableActionBar={true}
    listMessage={<React.Fragment>
      <h3>Export data</h3>
      <p>Download data collected in a CSV format.</p>
    </React.Fragment>}
  />
</React.Fragment>;