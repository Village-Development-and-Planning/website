import React from 'react';
import NewBase from '../base/New';
import Form from '../../layout/AppForm';

export default class NewPage extends NewBase {
    render() {
      return (
        <Form
          action="/cms/locations"
          actionName="Upload"
        >
          <h4 className="title">Upload Location Data</h4>
          <label>
            <p><input 
              type="checkbox"
              name="delete-existing" 
              value="1"
              defaultChecked="true"
            />Delete existing locations?
            </p>
          </label>        
          <label>
            <p>Locations CSV file</p>
            <input type="file" name="csv"/>
          </label>

        </Form>
      );
    }
};
NewPage.entityName = 'Location';;
