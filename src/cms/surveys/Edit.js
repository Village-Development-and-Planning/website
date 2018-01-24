import React from 'react';
import EditPage from '../base/Edit';
import Form from './Form';

export default class SurvyeyPage extends EditPage {


  render() {
    const entityId = this.props.match.params.entityId;
    const entity = this.state.entity;
    console.log(entity);
    if (entity) {
      return (
        <Form
          method="PATCH"
          action={`/cms/${this.routeName}/${entityId}`}
          entity={entity}
          actionName='Update'
          title={`Updating survey ${entityId}...`}
        />
      );
    } else {
      return super.render();
    }
  }

};
SurvyeyPage.entityName = 'Survey';
