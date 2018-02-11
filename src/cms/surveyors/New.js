import React from 'react';
import NewBase from '../base/New';
import Form from '../../layout/AppForm';

export default class NewPage extends NewBase {
    render() {
      return (
        <Form
          action="/cms/surveyors"
          actionName="Upload"
        >
          <h4 className="title">Upload Surveyors Data</h4>
          <label>
            <p><input 
              type="checkbox"
              name="delete-existing" 
              value="1"
              defaultChecked="true"
            />Delete existing surveyors?
            </p>
          </label>        
          <label>
            <p>Enumerators CSV file</p>
            <input type="file" name="surveyor-csv"/>
          </label>

        </Form>
      );
    }
};
NewPage.entityName = 'Surveyor';;
