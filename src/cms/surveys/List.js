import ListPage from '../base/List';
export default class SurvyeyList extends ListPage {};
Object.assign(SurvyeyList, {
  entityName: 'Survey',
});
SurvyeyList.entityName = 'Survey';
SurvyeyList.columns = Object.assign({}, SurvyeyList.columns, {
  enabled: {name: 'Live', value: (e) => e.enabled ? 'Yes' : 'No' }
});
SurvyeyList.columnsOrder = ['name', 'enabled', 'createdOn', 'actions'];
