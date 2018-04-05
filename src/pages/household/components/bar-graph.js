import React from 'react';
import style from '../../validation/style.scss';

export default (props) => {
  const {week, year, numFlagged, numSurveyors} = props;
  const numUnFlagged = numSurveyors - numFlagged;
  const flaggedPercentage = numFlagged / numSurveyors * 100;
  const unflaggedPercentage = numUnFlagged / numSurveyors * 100;
  return <div>
    <div className={style.Bar}>
      <div className="flagged" style={{height: `${flaggedPercentage}%`}}>
      </div>
      <div className="unflagged" style={{height: `${unflaggedPercentage}%`}}>
      </div>
    </div>
    <h5 className={style.Caption}>{week}/{year}</h5>
  </div>;
};