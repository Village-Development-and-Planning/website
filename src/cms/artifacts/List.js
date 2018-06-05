import ListPage from '../base/List';
import {parse} from 'query-string';
import React from 'react';

export default class ArtifactsList extends ListPage {
  render() {
    const type = parse(this.props.location.search, {ignoreQueryPrefix: true}).type || 'image';
    this.createMessage = 'Create new ' + type;
    return super.render();
  }
};
Object.assign(ArtifactsList, {
  entityName: 'Artifact',
  listMessage: <React.Fragment>
    <h3>Survey images</h3>
    <p>Upload images that are part of your survey. This should be the same name as what is in the survey CSV file.</p>
  </React.Fragment>,
});
