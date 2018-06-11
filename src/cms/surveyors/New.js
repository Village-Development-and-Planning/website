import React from 'react';
import NewBase from '../base/New';
import Form from '../../layout/AppForm';
import {t, T} from '../../translations';

export default class NewPage extends NewBase {
    render() {
      return (
        <Form
          action="/cms/surveyors"
          actionName="Upload surveyor data"
        >
          <h4 className="title"><T>Upload surveyor data</T></h4>
          <p><T>This surveyor data needs to be in CSV format. This file should include geography details for each surveyor as well as each type of survey they will be administering. Surveyor codes should be unique.</T></p>
          <input
              type="hidden"
              name="delete-existing"
              value="0"
          />
          <label>
            <p><T>Enumerators CSV file</T></p>
            <input type="file" name="surveyor-csv"/>
          </label>

        </Form>
      );
    }
};
NewPage.entityName = 'Surveyor';;
