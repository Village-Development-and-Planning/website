import fetch from '../../utils/fetch';
import Base from './Base';

export default class NewPage extends Base {
  
  setupObject() {
    return fetch(`/cms/${this.routeName}/new`)
      .then((r) => ({entity: r}));
  }

  setupUI() {
    if (this.context.topbar) {
      this.context.topbar().setTitle(`Creating ${this.entityName}`);
    }
  }
  
}
