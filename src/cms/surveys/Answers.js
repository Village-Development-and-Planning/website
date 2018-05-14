import Base from '../base/Base';
import fetch from '../../utils/fetch';
import React from 'react';

import {Table as AnswersTable} from '../../styles/Table.scss';

export default class SurveyAnswers extends Base {
  setupObject() {
    const entityId =  this.props.match.params.entityId;
    return fetch(`/cms/${this.routeName}/${entityId}/answers${this.props.location.search || ''}`)
      .then((entities) => ({entities}));
  }

  render() {
    this.entities = this.state.entities;
    if (this.entities) {
      return <table className={AnswersTable}>
        <thead>
          {[0,1].map((idx) => {
            return <tr key={idx}>
              {this.entities[idx].map((el, idx) =>
                <th key={idx}>
                  <div className="HeaderCell">{el}</div>
                </th>
              )}
            </tr>;
          })}
        </thead>
        <tbody>
          {this.entities.slice(2).map(
            (row, idx) => <tr key={idx}>
              {row.map(
                (el) => <td>{el}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>;
    }
    return super.render();
  }
}
SurveyAnswers.entityName = 'Survey';
