import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import fetch from '../../utils/fetch';

export default class SurveysPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      message: 'Loading...',
    }
  }
  componentDidMount() {
    fetch('/cms/surveys')
    .then((res) => this.setState({entities: res}))
  }

  render() {
    if (this.state.entities) {
      return (
        [<h4 key="header">Surveys</h4>].concat(
          this.state.entities.map((e) => {
            return (<Link key={e} to={`/surveys/${e._id}`}>{e.name}</Link>);
          })
        )
      );
    } else {
      return (<p>{this.state.message}</p>);
    }
  }
}
