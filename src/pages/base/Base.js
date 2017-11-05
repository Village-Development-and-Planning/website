import React, {Component} from 'react';

export default class BasePage extends Component {
  
  constructor(...args) {
    super(...args);
    this.state = {
      message: 'Loading...',
    }
    this._setupVariable('entityName', 'Entity');
    this._setupVariable('collectionName', this.entityName + 's');
    this._setupVariable('routeName', this.collectionName.toLowerCase());
  }

  _setupVariable(name, def) {
    this[name] = this[name] ||
      this.constructor[name] ||
      def;
  }

  render() {
    return (<p>{this.state.message}</p>);
  }
}
