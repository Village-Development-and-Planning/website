import React, {Component} from 'react';
import './Topbar.scss';

export default class AppRouter extends Component {
  render() {
    return (
      <div className="Topbar">
        <div className="title">
          <h4>Action happening</h4>
        </div>
        <div className="actions">
          <h5>Delete</h5>
          <h5>Create</h5>
        </div>
      </div>
    );
  }
}
