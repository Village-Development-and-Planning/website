import ListPage from '../base/List';
export default class SurvyeyList extends ListPage {
  render() {
    this.createMessage = false;
    return super.render();
  }
};
Object.assign(SurvyeyList, {
  entityName: 'Survey',
});
SurvyeyList.entityName = 'Survey';
SurvyeyList.columns = Object.assign({}, SurvyeyList.columns, {
  enabled: {name: 'Enabled?', value: (e) => e.enabled ? 'Yes' : 'No' }
});
SurvyeyList.columnsOrder = ['name', 'enabled', 'createdOn', 'actions'];
