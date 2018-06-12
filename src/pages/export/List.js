import React from 'react';

import ListPage from '../../cms/base/List';
import {T} from '../../translations';
export default class ExportList extends ListPage {};

Object.assign(ExportList, {
  entityName: 'Survey',
  actions: {
    download(e) {
      if (!e.downloadAvailable || !e.downloadAvailable.length) {
        return <span><T>File not available</T></span>;
      } else {
        const number = e.downloadAvailable[0].number || null;
        return <a href={`/cms/surveys/${e._id}/download?resp=${number}`}><T>Download data</T></a>;
      }
    }
  },
  actionsOrder: ['download'],
});
ExportList.entityName = 'Survey';
ExportList.columns = Object.assign({}, ExportList.columns, {
  answers: {name: 'Answers collected', value: (e) => (e.answerCount !== undefined && e.answerCount !== null) ?  e.answerCount : 0 },
  processed : {name: 'Answers processed', value: (e) => (e.answerStats !== undefined && e.answerStats.processed !== undefined) ?  e.answerStats.processed : 0 },
  name: { name: 'Survey name', value: (e) => e.name},
});
ExportList.columnsOrder = ['name', 'answers', 'processed', 'createdOn', 'actions'];