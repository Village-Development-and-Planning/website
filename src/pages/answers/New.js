import React from 'react';
import NewPage from '../base/New';
import Form from './Form';
import fetch from '../../utils/fetch';

export default class AnswerPage extends NewPage {

  handleRequest(action, opts) {
    const formData = opts.body;
    const givenName = formData.get('name');
    formData.delete('json');
    const promises=[];

    const status = {message: 'Uploading files...', total: 0, done: 0};
    status.total = this.uploadFileInput.files.length;
    const messages=[status];
    this.form.setResponse(messages);
    for (let i=0; i<this.uploadFileInput.files.length; i++) {
      let file = this.uploadFileInput.files[i];
      formData.delete('dataFile');
      formData.append('dataFile', file);

      formData.delete('name');
      formData.append('name', `${givenName || 'File'}-${file.name}`);

      promises.push(
        fetch(action, opts)
          .catch((res) => res.json())
          .then((r) => {
            console.log(r);
            r = {file: file.name, data: r};
            messages.push(r);
            status.done++;
            this.form.setResponse(messages);
            return r;
          })
      );
    }
    return Promise.all(messages);
  }

  render() {
    if (this.state.entity) {
      return (
        <Form 
          action="/cms/answers" 
          handleRequest={this.handleRequest.bind(this)}
          ref={(r) => this.form = r}
        >
          <label>
            JSON Upload
            <input 
              ref={(r) => this.uploadFileInput = r} 
              type="file" name="json" multiple
            />
          </label>        
        </Form>        
      );
    } else {
      return super.render();
    }
  }

};
AnswerPage.entityName = 'Answer';
