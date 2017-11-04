import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import fetch from '../../utils/fetch';

export default class SurveyPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...',
    }
  }
  componentDidMount() {
    const entityId = this.props.match.params.entityId;
    fetch(`/cms/surveys/${entityId}`)
    .then((res) => this.setState({entity: res}))
  }

  render() {
    if (this.state.entity) {
      return ([
        <h4 key="header">Survey: {this.state.entity.name}</h4>
      ]);
    } else {
      return (<p>{this.state.message}</p>);
    }
  }
}
