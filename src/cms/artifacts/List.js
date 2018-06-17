import ListPage from '../base/List';
import {parse} from 'query-string';
import React from 'react';
import {T} from '../../translations';

export default class ArtifactsList extends ListPage {
  constructor() {
    super(...arguments);
    this.columns = Object.assign({}, this.columns);
    this.columns.name = Object.assign({}, this.columns.name);
    this.columns.name.name = 'Image name';
    this.columns.name.value = (e) => <a href={`/cms/${this.cmsRouteName}/${e._id}/download`}>
      {e.name}
    </a>;
    this.columns.name.rawValue = (e) => e.name;
  }
  render() {
    const type = parse(this.props.location.search, {ignoreQueryPrefix: true}).type || 'image';
    this.createMessage = 'Create new ' + type;
    return super.render();
  }
};

Object.assign(ArtifactsList, {
  entityName: 'Artifact',
  listMessage: <React.Fragment>
    <h3><T>Survey images</T></h3>
    <p><T>Upload images that are part of your survey. This should be the same name as what is in the survey CSV file.</T></p>
  </React.Fragment>,
});
