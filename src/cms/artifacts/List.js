import ListPage from '../base/List';
import {parse} from 'query-string';

export default class ArtifactsList extends ListPage {
  render() {
    const type = parse(this.props.location.search, {ignoreQueryPrefix: true}).type || 'image';
    this.createMessage = 'Create new ' + type;
    this.listMessage = 'Existing ' + type + 's';
    return super.render();
  }
};
ArtifactsList.entityName = 'Artifact';
