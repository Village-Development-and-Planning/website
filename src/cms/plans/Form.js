import React from 'react';
import Form from '../../layout/AppForm';
import fetch from '../../utils/fetch';

import Response from '../../layout/AppForm/Response';

import {t, T} from '../../translations';

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

    if (!this.multiple) {
      if (!this.uploadFileInput.files.length) formData.delete('data');
      return fetch(action, opts);
    }

    formData.delete('data');

    const promises=[];
    this.stats = {
      total: this.uploadFileInput.files.length,
      count: 0
    };
    this.setState({response: this._statsComponent()});

    for (let i=0; i<this.uploadFileInput.files.length; i++) {
      let file = this.uploadFileInput.files[i];
      formData.delete('data');
      formData.append('data', file);

      formData.delete('name');
      let name = `${givenName || 'Image'}`;
      if (this.uploadFileInput.files.length !== 1) {
        name = `${name}-${i+1}`;
      }
      formData.append('name', name);

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
    if (this.props.multiple === undefined)
      this.multiple = true;
    else
      this.multiple = !!this.props.multiple;
    this.children = this.props.children || <React.Fragment>
      <h4 key='header' className="title"><T>{this.props.title}</T></h4>
      {this.props.description && <p><T>{this.props.description}</T></p>}
      <label key="name">
        <p><T>Plan name</T></p>
        <input
          type="text"
          name="name"
          defaultValue={this.props.entity && this.props.entity.name}
          placeholder={t("Enter plan name")}
        />
      </label>
      <label key="description">
        <p><T>Plan description</T></p>
        <input
          type="text"
          name="description"
          defaultValue={this.props.entity && this.props.entity.description}
          placeholder={t("Enter plan description")}
        />
      </label>
      <input name="type" type="hidden" value="plan"/>
      <label key="file">
        <p><T>{this.props.fileInputMessage}</T></p>
        <input ref={(r) => this.uploadFileInput = r} type="file" name="data" multiple={this.multiple}/>
      </label>
    </React.Fragment>;
    return super.render();
  }
};
