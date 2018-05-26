import React from 'react';

import ListPage from '../../cms/base/List';
import Form, {Response} from '../../layout/AppForm';
export default class ExportList extends ListPage {};
Object.assign(ExportList, {
  entityName: 'Survey',
  actions: {
    download(e) {
    //   return <Form actionName="Download" action="/cms/processes" formCustomStyle="">
    //   <input type="hidden" name="name" value="CollectResponses"/>
    //   <input type="hidden" name="args" value={e._id}/>
    // </Form>;
    return <a href={`/cms/surveys/${e._id}/download?resp=${null}`}>
            Download
          </a>
    }
  },
  actionsOrder: ['download'],
});
ExportList.entityName = 'Survey';
ExportList.columns = Object.assign({}, ExportList.columns, {
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
ExportList.columnsOrder = ['name', 'enabled', 'createdOn', 'actions'];