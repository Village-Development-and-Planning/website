import React from 'react';
import LocationSelect from '../validation/location-select';

import Page from './block';

const hierarchy = 'DISTRICT BLOCK'.split(' ');

const stateComponent = <Page
  level='STATE'
  entity={{
    uid: '',
    payload: {STATE_NAME: 'Tamil Nadu'},
    children: [
      {uid: '21'},
      {uid: '09'},
    ]
  }}
/>;

export default class extends React.Component {

  onValueChange({keyLevel, values}) {
    if (keyLevel) {
      this.setState({
        component: <Page
          level={keyLevel}
          match={{params: {entityId: values[keyLevel].replace(/\//g, '_')}}}
        />
      });
    } else {
      this.setState({component: stateComponent});
    }
  }

  render() {
    const component = this.state ? this.state.component : stateComponent;
    return <React.Fragment>
      <LocationSelect hierarchy={hierarchy} onValueChange={this.onValueChange.bind(this)}/>
      {component}
    </React.Fragment>;
  }

}
