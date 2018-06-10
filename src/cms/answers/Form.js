import React from 'react';
import Form from '../../layout/AppForm';
import fetch from '../../utils/fetch';

import Response from '../../layout/AppForm/Response';
import {t} from '../../translations';

export default class AnswerForm extends Form {

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
      <h4 key='header' className="title">{t("Upload data collected")}</h4>
      <label key="json-files">
        <p>{t("Upload data")}<br/>
          <em>{t("Note: You can select multiple files, they must all be in JSON format")}</em></p>
        <input
          ref={(r) => this.uploadFileInput = r}
          type="file" name="json" multiple
        />
      </label>
    </React.Fragment>;
    return super.render();
  }
};
