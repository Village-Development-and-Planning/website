import fetch from '../../utils/fetch';
import Base from './Base';

export default class ShowPage extends Base {
  
  componentDidMount() {
    const entityId = this.props.match.params.entityId;
    fetch(`/cms/${this.routeName}/${entityId}`)
    .then((res) => this.setState({entity: res}))
  }
}
