import fetch from '../../utils/fetch';
import Base from './Base';

export default class EditPage extends Base {

  setupObject() {
    const entityId = this.props.match.params.entityId;
    return fetch(`/cms/${this.routeName}/${entityId}/edit`)
      .then((r) => ({entity: r}));
  }

}
