import React from 'react';
import {Link} from 'react-router-dom'
import fetch from '../../utils/fetch';
import Base from './Base';

export default class ListPage extends Base {
  
  componentDidMount() {
    fetch(`/cms/${this.routeName}`)
    .then((res) => this.setState({entities: res}))
  }

  render() {
    if (this.state.entities) {
      return (
        [<h4 key="header">{this.collectionName}</h4>].concat(
          this.state.entities.map((e) => {
            return (
              <p>
                <Link key={e} to={`/${this.routeName}/${e._id}`}>{e.name}</Link>
              </p>
            );
          })
        )
      );
    } else {
      return super.render();
    }
  }
}
