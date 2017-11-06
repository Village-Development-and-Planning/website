import fetch from '../../utils/fetch';
import Base from './Base';

export default class NewPage extends Base {
  
  componentDidMount() {
    fetch(`/cms/${this.routeName}/new`)
    .then((res) => this.setState({entity: res}))
    if (this.context.topbar) {
      this.context.topbar().setTitle(`Creating ${this.entityName}`);
    }
  }
}
