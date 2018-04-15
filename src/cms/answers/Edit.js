import React from 'react';
import EditPage from '../base/Edit';
import Form from './Form';

export default class AnswerPage extends EditPage {


  render() {
    const entityId = this.props.match.params.entityId;
    const entity = this.state.entity;
    if (entity) {
      return (
        <Form
          method="PATCH"
          action={`/cms/${this.routeName}/${entityId}`}
          entity={entity}
          actionName='Update'
        />
      );
    } else {
      return super.render();
    }
  }

};
AnswerPage.entityName = 'Answer';
