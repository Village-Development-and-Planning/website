import ListPage from '../base/List';
import React from 'react';
import {T} from '../../translations';

export default class PList extends ListPage {
  constructor(...args) {
    super(...args);
    this.routeName = "plans";
    this.createMessage = 'Upload plan';
  }
};
Object.assign(PList, {
  entityName: 'Artifact',
  listMessage: <React.Fragment>
    <h3><T>Village Panchayat development plans</T></h3>
  </React.Fragment>,
  columnsOrder: ['dName', 'createdOn', 'actions'],
});

PList.columns = Object.assign({}, PList.columns, {
  dName: {
    name: 'Plan name',
    value: function(e) {
      return <a href={`/cms/${this.cmsRouteName}/${e._id}/download`}>
        {e.displayName || e.name || `[Unnamed / ${e._id}]`}
      </a>;
    },
    rawValue: e => (e.displayName || e.name || e._id)
  },
});
