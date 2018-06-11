import React from 'react';

import ListPage from '../../cms/base/List';
import Form, {Response} from '../../layout/AppForm';
import {Link} from 'react-router-dom';

export default class ValidationList extends ListPage {};
Object.assign(ValidationList, {
  entityName: 'Survey',
  actions: {
    processSurvey(e) {
      let disabledSubmitButton = false;
      if(e.collectProcessId !== undefined && e.collectProcessId !== null && e.collectProcessId !== ""){
        disabledSubmitButton = true;
      }

      return <Form actionName="Process" action="/cms/processes" formCustomStyle="" disabledSubmitButton={disabledSubmitButton}
        handleResponse={(res) => ({
              component: <Response
                statusMessage={<React.Fragment>
                  Created <Link to={`/processes/${res.Process._id}`}>process</Link>
                </React.Fragment>}/>
            })}
      >
      <input type="hidden" name="name" value="CollectResponses"/>
      <input type="hidden" name="args" value={e._id}/>
    </Form>;
    },
    export(e) {
      let disabledSubmitButton = false;
      if(e.collectExportId !== undefined && e.collectExportId !== null && e.collectExportId !== ""){
        disabledSubmitButton = true;
      }
      return <Form actionName="Export" action="/cms/processes" formCustomStyle="" disabledSubmitButton={disabledSubmitButton}>
      <input type="hidden" name="name" value="ExportResponses"/>
      <input type="hidden" name="args" value={e._id}/>
    </Form>;
    }
  },
  actionsOrder: ['processSurvey', 'export'],
});
ValidationList.entityName = 'Survey';
ValidationList.columns = Object.assign({}, ValidationList.columns, {
  answers: {name: 'Answers collected', value: (e) => (e.answerCount !== undefined && e.answerCount !== null) ?  e.answerCount : 0 },
  processed : {name: 'Answers processed', value: (e) => (e.answerStats !== undefined && e.answerStats.processed !== undefined) ?  e.answerStats.processed : 0 },
  name: { name: 'Survey name', value: (e) => e.name},
  actions: {
    name: 'Actions',
    value(e) {
      const actionsOrder = this.actionsOrder;
      return <div style={{display: 'flex', alignItems: 'baseline'}}>
        {actionsOrder.map(key => (this.actions[key]).call(this, e))}
      </div>;
    }
  }
});
ValidationList.columnsOrder = ['name', 'answers', 'processed', 'createdOn', 'actions'];