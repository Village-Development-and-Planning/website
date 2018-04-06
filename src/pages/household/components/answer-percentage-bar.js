import React from 'react';
import style from '../../validation/style.scss';

export default (props) => {
  const {percentage} = props;
  return <div className={style.Detail}>
    <p>Answered {percentage}%</p>
    <div className={style.AnswerBar}>    
      <div className="unflagged" style={{width: `${percentage}%`}}>
      </div>
      <div className="flagged" 
        style={{
          width: `${100-percentage}%`,
          textAlign: 'right',
        }}
      >
      </div>
    </div>
  </div>;
};