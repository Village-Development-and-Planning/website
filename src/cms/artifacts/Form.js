import React from 'react';
import Form from '../../layout/AppForm';
import fetch from '../../utils/fetch';
import {parse} from 'query-string';

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
    const type = parse(this.props.location.search, {ignoreQueryPrefix: true}).type || 'image';
    if (this.props.multiple === undefined)
      this.multiple = true;
    else
      this.multiple = !!this.props.multiple;
    this.children = this.props.children || <React.Fragment>
      <h4 key='header' className="title">{this.props.title}</h4>
      {this.props.description && <p>{this.props.description}</p>}
      <label key="description">
        <p>Image description</p>
        <input
          type="text"
          name="description"
          defaultValue={this.props.entity && this.props.entity.description}
          placeholder="Enter a description of the image"
        />
      </label>
      <input name="type" type="hidden" value={type}/>
      <label key="file">
        <p>{this.props.fileInputMessage}<br/>
          <em>Note: Please name Images in this format - SurveyName_QuestionNumber_Answer.extension (Answer - good, bad, average, 1/2/3, etc.) - for example: Mapping_1.2.1_good.jpg</em>
        </p>
        <input ref={(r) => this.uploadFileInput = r} type="file" name="data" multiple={this.multiple}/>
      </label>
    </React.Fragment>;
    return super.render();
  }
};
