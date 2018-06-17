import React from 'react';
import style from '../../validation/style.scss';

export default (props) => {
  let {week, year, numFlagged, numSurveyors} = props;
  if (!numFlagged) numFlagged = 0;
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
    <h5 className={style.Caption}>
      {numFlagged}/{numSurveyors} ({parseInt(flaggedPercentage*100, 10)/100}%)<br/>
      Wk {week}/{year}
    </h5>
  </div>;
};