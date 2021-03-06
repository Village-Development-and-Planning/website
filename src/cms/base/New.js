import fetch from '../../utils/fetch';
import Base from './Base';

export default class NewPage extends Base {

  setupObject() {
    return fetch(`/cms/${this.cmsRouteName}/new`)
      .then((r) => ({entity: r}));
  }

}
