import ListPage from '../base/List';
import React from 'react';

export default class List extends ListPage {};

List.listMessage = <React.Fragment>
  <h3>Surveyor data</h3>
  <p>Upload and edit data regarding surveyors codes, what survey they will be administering and where they will administer it</p>
</React.Fragment>;
List.createMessage = 'Upload surveyor data';
List.entityName = 'Surveyor';
List.columns = Object.assign({}, List.columns, {
  code: {
    name: 'Surveyor Code',
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
  name: {
    name: 'Surveyor name',
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
List.columnsOrder = 'district block panchayat code name survey actions'.split(' ');
List.sortOrder = 'district block panchayat code'.split(' ');
