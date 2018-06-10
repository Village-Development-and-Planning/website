import ListPage from '../base/List';
import {t} from '../../translations';
export default class SurvyeyList extends ListPage {
  constructor() {
    super(...arguments);
    this.columns = {...this.columns};
    this.columns.name = {...this.columns.name};
    this.columns.name.name = 'Survey name';
  }
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
  enabled: {name: 'Enabled?', value: (e) => e.enabled ? t('Yes') : t('No') },
});
SurvyeyList.columnsOrder = ['name', 'enabled', 'createdOn', 'actions'];
