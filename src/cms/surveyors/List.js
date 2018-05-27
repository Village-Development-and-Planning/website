import ListPage from '../base/List';

export default class List extends ListPage {};

List.createMessage = 'Upload Surveyors CSV';
List.entityName = 'Surveyor';
List.columns = Object.assign({}, List.columns, {
  code: {
    name: 'Code',
    value: (e) => e.username
  },
  panchayat: {
    name: 'Panchayat',
    value: (e) => e.payload && e.payload.PANCHAYAT_NAME
  },
  block: {
    name: 'Block',
    value: (e) => e.payload && e.payload.BLOCK_NAME
  },
  district: {
    name: 'District',
    value: (e) => e.payload && e.payload.DISTRICT_NAME
  },
  survey: {
    name: 'Survey',
    value: (e) => e.payload && e.payload.SURVEY
  }
});
List.columnsOrder = 'district block panchayat code name survey actions'.split(' ');
List.sortOrder = 'district block panchayat code'.split(' ');
