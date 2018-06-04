import React from 'react';
import Form from '../../layout/AppForm';

export default class extends Form {
  handleRequest(action, opts) {
    if (this.uploadFileInput.files.length === 0) {
      opts.body.delete('csv');
    }
    return super.handleRequest(action, opts);
  }

  render() {
    this.children = this.props.children || [
      <h4 key='header' className="title">{this.props.title}</h4>
    ,
      <label key="name">
        <p>Survey name</p>
        <input
          type="text"
          name="name"
          defaultValue={this.props.entity && this.props.entity.name}
          placeholder="Enter survey name"
        />
      </label>
    ,
        <label key="description">
          <p>Survey description</p>
          <textarea
            type="text"
            name="description"
            rows="5"
            defaultValue={this.props.entity && this.props.entity.description}
            placeholder="Enter a description of the survey"
          />
        </label>
    ,
        <label className="row" key="enabled">
          <p>Do you want to enable this survey?<br/>
          <em>Note: This will activate this survey and make it live</em></p>
          <input
            type="checkbox"
            name="enabled"
            value="1"
            defaultChecked={this.props.entity && this.props.entity.enabled}
          />
        </label>
    ,
        <label key="csv-upload">
          <p>Upload this survey<br/>
          <em>Note: This survey needs to be in CSV format</em></p>
          <input ref={(r) => this.uploadFileInput = r} type="file" name="csv"/>
        </label>
    ];
    return super.render();
  }
};
