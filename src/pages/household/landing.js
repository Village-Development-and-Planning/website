import React from 'react';
import LocationSelect from '../validation/location-select';

import StatePage from './state';
import DistrictPage from './district';

const hierarchy = 'DISTRICT BLOCK PANCHAYAT'.split(' ');

export default class extends React.Component {

  onValueChange({keyLevel, values}) {

    if (!keyLevel) {
      this.setState({component: <StatePage/>});
    } else if (keyLevel === 'DISTRICT') {
      this.setState({
        component: <DistrictPage
          match={{params: {entityId: values[keyLevel].replace(/\//g, '_')}}}
        />
      });
    }
  }

  render() {
    const component = this.state ? this.state.component : <StatePage/>;
    return <React.Fragment>
      <LocationSelect hierarchy={hierarchy} onValueChange={this.onValueChange.bind(this)}/>
      {component}
    </React.Fragment>;
  }

}
