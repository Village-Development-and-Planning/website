import React, {Component} from 'react';
import ActionButton from './ActionButton';
import Header from '../components/Header/Header';
import './Topbar.scss';

export default class Topbar extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      title: "Administration",
      actions: [],
      userAction: (<ActionButton to="/hello">Sign out</ActionButton>),
    };
  }

  setTitle(title) {
    this.setState({title});
  }
  setActions(actions) {
    this.setState({actions});
  }
  render() {
    return (
      <Header>
        {this.state.actions}
        {this.state.userAction}
      </Header>
      // <div className="Topbar">
      //   <div className="title">
      //     <h4>{this.state.title}</h4>
      //   </div>
      //   <div className="actions">
      //     {this.state.actions}
      //     {this.state.userAction}
      //   </div>
      // </div>
    );
  }
}
