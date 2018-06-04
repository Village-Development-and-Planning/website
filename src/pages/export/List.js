import React from 'react';

import ListPage from '../../cms/base/List';
export default class ExportList extends ListPage {};
Object.assign(ExportList, {
  entityName: 'Survey',
  actions: {
    download(e) {
      if(e.downloadAvailable !== undefined && e.downloadAvailable !== null && e.downloadAvailable === true){
        return <a href={`/cms/surveys/${e._id}/download?resp=${null}`}>
            Download
          </a>;
      }
      else{
        return <span>File not available</span>;
      }
    
    }
  },
  actionsOrder: ['download'],
});
ExportList.entityName = 'Survey';
ExportList.columns = Object.assign({}, ExportList.columns, {
  answers: {name: 'Answers', value: (e) => (e.answerCount !== undefined && e.answerCount !== null) ?  e.answerCount : 0 },
  processed : {name: 'Prccessed', value: (e) => (e.answerStats !== undefined && e.answerStats.processed !== undefined) ?  e.answerStats.processed : 0 },
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
ExportList.columnsOrder = ['name', 'answers', 'processed', 'actions'];