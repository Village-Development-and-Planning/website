import React from 'react';
import EditPage from '../base/Edit';
import Form from './Form';

export default class SurvyeyPage extends EditPage {

  handleSubmit(response) {
    this.setState({response});
  }

  render() {
    const entityId = this.props.match.params.entityId;
    const entity = this.state.entity;
    console.log(entity);
    if (entity) {
      return (
        <Form
          method="PATCH"
          action={`/cms/${this.routeName}/${entityId}`}
          handleSubmit={this.handleSubmit.bind(this)}
          objName={entity.name}
          objDescription={entity.description}
          objEnabled={entity.enabled}
          actionName='Update'
        >
      <label>
            Response
            <pre>
              {JSON.stringify(
                this.state.response, 
                null, 2,
              )}
            </pre>
          </label>
        </Form>
      );
    } else {
      return super.render();
    }
  }

};
SurvyeyPage.entityName = 'Survey';
