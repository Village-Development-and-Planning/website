import React from 'react';
import {Table as TableStyle} from './style.scss';
import {T} from '../../translations';


export default class Table extends React.Component {

  arrowClassFor(column) {
    let className = 'sort-direction';
    if (!this.props.sort) return className;
    if (this.props.sort.column === column) {
      className += this.props.sort.direction === 'asc' ? ' asc' : ' desc';
    }
    return className;
  }

  render() {
    let {columnsOrder, columns, onSort, entities, ctx} = this.props;
    if (!columns) return false;
    if (!columnsOrder) columnsOrder = Object.keys(columns);

    return <table className={TableStyle}>
      <thead>
        <tr>
          {columnsOrder.map(key => {
            const name = columns[key].name;
            if(key === 'actions'){
              return <td key={key}><T>{name}</T></td>;
            }
            return <td onClick={e => onSort && onSort(key)} key={key}>
              <T>{name}</T>
              <span className={this.arrowClassFor(key)}></span>
            </td>;
          })}
        </tr>
      </thead>
      <tbody>
        {entities.map(
          (e, idx) => <tr key={idx}>
            {columnsOrder.map(key => {
              const {name, value, style} = columns[key];
              return <td style={style} key={name}>{value.call(ctx, e)}</td>;
            })}
          </tr>
        )}
      </tbody>
    </table>;
  }
}