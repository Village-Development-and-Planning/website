import React from 'react';
import Form from '../../layout/AppForm';
import fetch from '../../utils/fetch';

import Response from '../../layout/AppForm/Response';

export default class AnswerPage extends Form {

  _statsComponent(done) {
    const className = done ? "success" : "progress";
    const verb = done ? "Uploaded" : "Uploading...";
    const message = `${verb} ${this.stats.count} / ${this.stats.total}`;
    return <Response 
      statusClass={className} statusMessage={message} key="status"
    />;
  }  

  handleRequest(action, opts) {
    const formData = opts.body;
    const givenName = formData.get('name');
    formData.delete('json');

    const promises=[];
    this.stats = {
      total: this.uploadFileInput.files.length, 
      count: 0
    };
    this.setState({response: this._statsComponent()});

    for (let i=0; i<this.uploadFileInput.files.length; i++) {
      let file = this.uploadFileInput.files[i];
      formData.delete('dataFile');
      formData.append('dataFile', file);

      formData.delete('name');
      formData.append('name', `${givenName || 'File'}-${file.name}`);

      promises.push(
        fetch(action, opts).then(() => {
          this.stats.count++;
          this.setState({response: this._statsComponent()});
        })
      );
    }
    return Promise.all(promises).then(
      () => ({component: this._statsComponent(true)})
    );
  }

  render() {
    this.children = this.props.children || [
      <h4 key='header' className="title">Uploading answers...</h4>      
    ,
      <label key="name">
        <p>Name / Identifier</p>
        <input 
          type="text" 
          name="name"
          defaultValue={this.props.entity && this.props.entity.name}
          placeholder="Enter answer identifier"
        />
      </label>
    ,
      <label key="json-files">
        <p>Answer JSON files</p>
        <input 
          ref={(r) => this.uploadFileInput = r} 
          type="file" name="json" multiple
        />
      </label>
    ];
    return super.render();
  }
};
