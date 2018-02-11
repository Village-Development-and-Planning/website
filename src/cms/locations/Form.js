import React from 'react';
import Form from '../../layout/AppForm';
import fetch from '../../utils/fetch';

import Response from '../../layout/AppForm/Response';

export default class LocationForm extends Form {


  render() {
    this.children = this.props.children || <React.Fragment>
      <h4 key='header' className="title">{this.props.title}</h4>
      <label key="name">
        <p>Name</p>
        <input
          type="text"
          name="name"
          defaultValue={this.props.entity && this.props.entity.name}
          placeholder="Enter name"
        />
      </label>
      <label key="description">
        <p>Description</p>
        <input
          type="text"
          name="description"
          defaultValue={this.props.entity && this.props.entity.description}
          placeholder="Enter  description"
        />
      </label>
      <label key="type">
        <p>Type</p>
        <select name="type">
          <option>image</option>
        </select>
      </label>
      <label key="img-upload">
        <p>Image(s) Upload</p>
        <input ref={(r) => this.uploadFileInput = r} type="file" name="data" multiple={this.multiple}/>
      </label>
    </React.Fragment>;
    return super.render();
  }
};
