import React from 'react';

import ListPage from '../../cms/base/List';
import Form, {Response} from '../../layout/AppForm';
import {Link} from 'react-router-dom';
export default class ValidationList extends ListPage {};
Object.assign(ValidationList, {
  entityName: 'Survey',
  actions: {
    processSurvey(e) {
      return <Form actionName="Process" action="/cms/processes" formCustomStyle=""
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
      return <Form actionName="Export" action="/cms/processes" formCustomStyle="">
      <input type="hidden" name="name" value="ExportResponses"/>
      <input type="hidden" name="args" value={e._id}/>
    </Form>;
    }
  },
  actionsOrder: ['processSurvey', 'export'],
});
ValidationList.entityName = 'Survey';
ValidationList.columns = Object.assign({}, ValidationList.columns, {
  enabled: {name: 'Live', value: (e) => e.enabled ? 'Yes' : 'No' },
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
ValidationList.columnsOrder = ['name', 'enabled', 'createdOn', 'actions'];