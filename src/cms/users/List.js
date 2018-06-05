import ListPage from '../base/List';
import React from 'react';

export default class List extends ListPage {};

List.listMessage = <React.Fragment>
  <h3>User data</h3>
  <p>View and edit data regarding <em>admin</em> users of the system</p>
</React.Fragment>;
List.createMessage = 'Create a user';
List.entityName = 'User';
List.columns = Object.assign({}, List.columns, {
  code: {
    name: 'Username',
    value: (e) => e.username
  },
  panchayat: {
    name: 'Panchayat Name',
    value: (e) => e.payload && e.payload.PANCHAYAT_NAME
  },
  block: {
    name: 'Block Name',
    value: (e) => e.payload && e.payload.BLOCK_NAME
  },
  district: {
    name: 'District Name',
    value: (e) => e.payload && e.payload.DISTRICT_NAME
  },
  survey: {
    name: 'Survey Name',
    value: (e) => e.payload && e.payload.SURVEY
  }
});
List.columnsOrder = 'code name actions'.split(' ');
List.sortOrder = 'code'.split(' ');
