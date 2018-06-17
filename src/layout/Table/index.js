import React from 'react';
import {Table as TableStyle} from './style.scss';
import {T} from '../../translations';
import CSV from 'csv-stringify/lib/es5/sync';
// import CSV from 'csv.js';

export default class Table extends React.Component {

  arrowClassFor(column) {
    let className = 'sort-direction';
    if (!this.props.sort) return className;
    if (this.props.sort.column === column) {
      className += this.props.sort.direction === 'asc' ? ' asc' : ' desc';
    }
    return className;
  }

  renderCSV() {
    let {columnsOrder, columns, entities, ctx} = this.props;
    if (!columnsOrder) columnsOrder = Object.keys(columns);
    let data = [];
    columnsOrder.forEach((key) => (
      (key === 'actions') || (data.push(columns[key].name))
    ));
    data = [data];
    entities.forEach(e => {
      const row = [];
      columnsOrder.forEach((key) => {
        if (key === 'actions' || columns[key].noCSV) return;
        const col = columns[key];
        row.push(
          (col.rawValue || col.value).call(ctx, e)
        );
      });
      data.push(row);
    });
    //return CSV.encode(data, ',', false);
    return CSV(data);
  }

  render() {
    let {columnsOrder, columns, onSort, entities, ctx, csvName} = this.props;
    if (!columns) return false;
    if (!columnsOrder) columnsOrder = Object.keys(columns);
    if (!csvName) csvName = 'table';
    return <React.Fragment>
      <a href={window.URL.createObjectURL(
        new Blob([this.renderCSV()], {type: 'text/csv'})
      )} download={`${csvName}.csv`}>Download table as CSV</a>
      <table className={TableStyle}>
        <thead>
          <tr>
            {columnsOrder.map(key => {
              const name = columns[key].name;
              if(key === 'actions'){
                return <td key={key}><T>{name}</T></td>;
              }
              return <td className={onSort && 'clickable'} onClick={e => onSort && onSort(key)} key={key}>
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
      </table>
    </React.Fragment>;
  }
}