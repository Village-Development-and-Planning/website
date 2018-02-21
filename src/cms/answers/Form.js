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
      statusClass={className} statusMessage={message} key="status">
        {this.stats.done.map((fname) => <p>{fname}</p>)}
    </Response>;
  }  

  handleRequest(action, opts) {
    const formData = opts.body;
    const givenName = formData.get('name');
    formData.delete('json');

    const promises=[];
    this.stats = {
      total: this.uploadFileInput.files.length,
      done: [], 
      count: 0
    };
    this.setState({response: this._statsComponent()});

    for (let i=0; i<this.uploadFileInput.files.length; i++) {
      let file = this.uploadFileInput.files[i];

      if (file.name === 'info.json') {
        this.stats.count++;
        this.stats.done.push(`Ignored ${file.name}`);
        continue;
      }

      formData.delete('data-file');
      formData.append('data-file', file);

      formData.delete('name');
      formData.append('name', `${givenName || 'File'}-${file.name}`);

      ((fname) => {
        promises.push(
          fetch(action, opts).then((res) => {
            this.stats.count++;
            if (res.entity && res.entity.existing)
              this.stats.done.push(`Already Uploaded ${fname}`);
            else
              this.stats.done.push(`Uploaded ${fname}`);
            this.setState({response: this._statsComponent()});
          })
        );
      })(file.name);
    }
    return Promise.all(promises).then(
      () => ({component: this._statsComponent(true)})
    );
  }

  render() {
    this.children = this.props.children || <React.Fragment>
      <h4 key='header' className="title">Uploading answers...</h4>      
      <label key="name">
        <p>Name / Identifier</p>
        <input 
          type="text" 
          name="name"
          defaultValue={this.props.entity && this.props.entity.name}
          placeholder="Enter answer identifier"
        />
      </label>
      <label key="json-files">
        <p>Answer JSON files</p>
        <input 
          ref={(r) => this.uploadFileInput = r} 
          type="file" name="json" multiple
        />
      </label>
    </React.Fragment>;
    return super.render();
  }
};
