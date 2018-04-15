import React from 'react';
import LocationSelect from '../validation/location-select';

import Page from '../validation/page';
import Stats from './components/stats';
import PStats from './components/panchayat-stats';

const hierarchy = 'DISTRICT BLOCK'.split(' ');

const stateComponent = <Page
  entity={{
    uid: '',
    name: 'Tamil Nadu',
    children: [
      {uid: '21'},
      {uid: '09'},
    ]
  }}
  component={Stats}
/>;

export default class extends React.Component {

  onValueChange({keyLevel, values}) {

    if (!keyLevel) {
      this.setState({component: stateComponent});
    } else {
      let cComponent = Stats;
      if (keyLevel === 'BLOCK')  cComponent = PStats;
      this.setState({
        component: <Page
          match={{params: {entityId: values[keyLevel].replace(/\//g, '_')}}}
          component={cComponent}
        />
      });
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
