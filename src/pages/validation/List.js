import React from 'react';

import ListPage from '../../cms/base/List';
import Form, {Response} from '../../layout/AppForm';
import {Link} from 'react-router-dom';
import { T } from '../../translations' ;

export default class ValidationList extends ListPage {};
Object.assign(ValidationList, {
  entityName: 'Survey',
  actions: {
    processSurvey(e) {
      let disabledSubmitButton = false;
      if(e.collectProcessId !== undefined && e.collectProcessId !== null && e.collectProcessId !== ""){
        disabledSubmitButton = true;
      }

      return <Form
        actionName="Process"
        action="/cms/processes"
        formCustomStyle=""
        disabledSubmitButton={disabledSubmitButton}
        handleResponse={(res) => ({
          component: <Response
            statusMessage={<React.Fragment>
              Created <Link to={`/processes/${res.Process._id}`}>process</Link>
            </React.Fragment>}
          />
        })}
      >
        <input key="proc-name" type="hidden" name="name" value="CollectResponses"/>
        <input key="proc-args" type="hidden" name="args" value={e._id}/>
      </Form>;
    },

    export(e) {
      let disabledSubmitButton = false;
      if(e.collectExportId !== undefined && e.collectExportId !== null && e.collectExportId !== ""){
        disabledSubmitButton = true;
      }
      return <Form actionName="Export" action="/cms/processes" formCustomStyle="" disabledSubmitButton={disabledSubmitButton}>
        <input key="proc-name" type="hidden" name="name" value="ExportResponses"/>
        <input key="proc-args" type="hidden" name="args" value={e._id}/>
      </Form>;
    }
  },
  actionsOrder: ['processSurvey', 'export'],
});

ValidationList.columns = Object.assign({}, ValidationList.columns, {
  answers: {
    name: 'Answers collected',
    value: (e) => (e.answerCount !== undefined && e.answerCount !== null) ?  e.answerCount : 0,
    style: {textAlign: 'right'}
  },
  processed : {
    name: 'Answers processed',
    value: (e) => (e.answerStats !== undefined && e.answerStats.processed !== undefined) ?  e.answerStats.processed : 0,
    style: {textAlign: 'right'}
  },
  name: { name: 'Survey name', value: (e) => e.name},
  validatedData: { 
    name: 'Validated data',
    value: (e) => {
      let name = e.name;
      if(name === 'Mapping'){
        return <Link to="/validation/mapping"><T>Report</T></Link>;
      }else if(name === 'Household'){
        return <Link to="/validation/household"><T>Report</T></Link>;
      }
      else{
        return null;
      }

    }
  }
});
ValidationList.columnsOrder = ['name', 'answers', 'processed', 'createdOn', 'actions', 'validatedData'];