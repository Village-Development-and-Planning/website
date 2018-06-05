import React from 'react';
import NewBase from '../base/New';
import Form from '../../layout/AppForm';

export default class NewPage extends NewBase {
    render() {
      return (
        <Form
          action="/cms/surveyors"
          actionName="Upload surveyor data"
        >
          <h4 className="title">Upload surveyor data</h4>
          <p>This surveyor data needs to be in CSV format. This file should include geography details for each surveyor as well as each type of survey they will be administering. Surveyor codes should be unique.</p>
          <input
              type="hidden"
              name="delete-existing"
              value="0"
          />
          <label>
            <p>Enumerators CSV file</p>
            <input type="file" name="surveyor-csv"/>
          </label>

        </Form>
      );
    }
};
NewPage.entityName = 'Surveyor';;
