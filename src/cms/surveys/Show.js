import React from 'react';
import ShowPage from '../base/Show';

import Form, {Response} from '../../layout/AppForm';

import { Link } from 'react-router-dom';

export default class SurvyeyShow extends ShowPage {
  render() {
    let entity = this.state.entity;
    if (entity) {
      return (
        <div>
          <h4>Name</h4>
          <p>{entity.name}</p>

          <h4>Description</h4>
          <p>{entity.description}</p>

          <h4>Enabled</h4>
          <p>{entity.enabled ? 'Yes' : 'No'}</p>

          <h4>Respondents</h4>
          <code><pre>{JSON.stringify(entity.respondents)}</pre></code>

          <h4>Answers</h4>
          <p>{entity.answerStats && entity.answerStats.total} &nbsp; 
            (Processed {entity.answerStats && entity.answerStats.processed})
          </p>

          <h4>Links</h4>
          <Link to={`/surveys/${entity._id}/answers`}>Answer Preview</Link> &nbsp;
          <a href={`/cms/surveys/${entity._id}/download`}>Download CSV</a>

          <Form actionName="Process Answers" action="/cms/processes"
            handleResponse={(res) => ({
              component: <Response 
                statusMessage={<React.Fragment>
                  Created <Link to={`/processes/${res.Process._id}`}>process</Link>
                </React.Fragment>}/>
            })}
          >
            <input type="hidden" name="name" value="CollectResponses"/>
            <input type="hidden" name="args" value={entity._id}/>
          </Form>

          <Form actionName="Export Answers" action="/cms/processes"
            handleResponse={(res) => ({
              component: <Response
                statusMessage={<React.Fragment>
                  Created <Link to={`/processes/${res.Process._id}`}>process</Link>
                </React.Fragment>}/>
            })}
          >
            <input type="hidden" name="name" value="ExportResponses"/>
            <input type="hidden" name="args" value={entity._id}/>
          </Form>

          <Form actionName="Reset Processing" action={`/cms/surveys/${entity._id}/reset`}>
          </Form>

          <h4>Aggregates</h4>
          <code><pre>{JSON.stringify(entity.aggregates, null, 2)}</pre></code>
        </div>
      );
    } else {
      return super.render();
    }
  }

};
SurvyeyShow.entityName = 'Survey';
