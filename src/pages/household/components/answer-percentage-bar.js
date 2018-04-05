import React from 'react';
import style from '../../validation/style.scss';

export default (props) => {
  const {percentage} = props;
  return <div className={style.AnswerBar}>
    <div className="flagged" style={{width: `${percentage}%`}}>
      {percentage}
    </div>
    <div className="unflagged" style={{width: `${100-percentage}%`}}>
      {100 - percentage}
    </div>
  </div>;

};