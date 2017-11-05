import React from 'react';
import ShowPage from '../base/Show';

export default class SurvyeyPage extends ShowPage {
  render() {
    if (this.state.entity) {
      return ([
        <h4 key="header">{this.entityName}: {this.state.entity.name}</h4>
      ]);
    } else {
      return super.render();
    }
  }

};
SurvyeyPage.entityName = 'Survey';
