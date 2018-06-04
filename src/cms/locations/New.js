import React from 'react';
import NewBase from '../base/New';
import Form from '../../layout/AppForm';

export default class NewPage extends NewBase {
    render() {
      return (
        <Form
          action="/cms/locations"
          actionName="Upload geographic data"
        >
          <h4 className="title">Upload geographic Data</h4>
          <p>This geographic data needs to be in CSV format. Changing this file will update all existing geographic data. Ensure that your file includes every level of the area you wish to cover.</p>
          <input
            type="hidden"
            name="delete-existing"
            value="1"
          />
          <label>
            <p>Locations CSV file</p>
            <input type="file" name="csv"/>
          </label>

        </Form>
      );
    }
};
NewPage.entityName = 'Location';;
