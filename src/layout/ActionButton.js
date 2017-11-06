import React from 'react'
import {Link} from 'react-router-dom'
import './ActionButton.scss'

export default class ActionButton extends React.Component {
  render() {
    return (
      <div className="Action-Button">
        {(this.props.to ?
          <Link {...this.props}>
            <h5>
              {this.props.children}
            </h5>
          </Link> :
          <h5 {...this.props}>
            {this.props.children}
          </h5>
        )}
      </div>
    );
  }
}