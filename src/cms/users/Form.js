import React from 'react';
import Form from '../../layout/AppForm';
import {T, t} from '../../translations';

export default class UserForm extends Form {
  render() {
    if (this.props.multiple === undefined)
      this.multiple = true;
    else
      this.multiple = !!this.props.multiple;
    this.children = this.props.children || <React.Fragment>
      <h4 key='header' className="title">{this.props.title}</h4>
      <label key="name">
        <p><T>Full Name</T></p>
        <input
          type="text"
          name="name"
          defaultValue={this.props.entity && this.props.entity.name}
          placeholder={t("Enter full name")}
        />
      </label>
      <label key="username">
        <p><T>Username</T></p>
        <input
          type="text"
          name="username"
          defaultValue={this.props.entity && this.props.entity.username}
          placeholder={t("Enter username")}
        />
      </label>
      <label key="passphrase">
        <p><T>Passphrase</T></p>
        <input
          type="password"
          name="passphrase"
          placeholder={t("Enter passphrase")}
        />
      </label>
      <label key="roles">
        <p><T>User roles</T></p>
        <select
          type="text"
          multiple
          name="roles[]"
          defaultValue={this.props.entity && this.props.entity.roles}
        >
          <option value='content-viewer'>Viewer</option>
          <option value='content-manager'>Editor</option>
          <option value='admin'>Admin</option>
        </select>
      </label>
    </React.Fragment>;
    return super.render();
  }
};
