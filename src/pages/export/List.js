import React from 'react';

import ListPage from '../../cms/base/List';
export default class ExportList extends ListPage {

  onDownload() {
  }
};

Object.assign(ExportList, {
  entityName: 'Survey',
  actions: {
    download(e) {
      if (!e.downloadAvailable || !e.downloadAvailable.length) {
        return <span>File not available</span>;
      } else {
        const number = e.downloadAvailable[0].number || null;
        return <a href={`/cms/surveys/${e._id}/download?resp=${number}`}>Download CSV</a>;
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