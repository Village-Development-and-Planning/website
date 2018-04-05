import React from 'react';
import ShowPage from '../../../cms/base/Show';
import Responsive from '../../../layout/Responsive';
import Bar from './bar-graph';
import APBar from './answer-percentage-bar';

import fetch from '../../../utils/fetch';
import style from '../../validation/style.scss';

export default class Block extends ShowPage {
  _parseStats(entity) {
    if (!entity || !entity.aggregates) return;
    const mAgg = entity.aggregates.find(
      a => (
        a.type.startsWith('LocationAggregate')
        && a.type.endsWith('/Household')
      )
    );
    if (!mAgg) return;
    console.log(mAgg);
    const data = mAgg.data;
    if (!data || !data.numAnswered) return;
    const numSurveys = data.numAnswered.count;
    const numAnswered = data.numAnswered.value;
    return {numSurveys, numAnswered};
  }

  _parseWeeklyStats(entity) {
    if (!entity || !entity.aggregates) return;
    let weeklyStats = [];
    for(let agg of entity.aggregates) {
      const type = agg.type;
      if (!type.endsWith('/Household/Weekly')) continue;
      const key = agg.key.slice(entity.uid.length+1);
      let [year, week] = key.split('/');      
      year = parseInt(year, 10);
      week = parseInt(week, 10);
      console.log(year, week, agg.data);
      const data = agg.data;
      if (!data || !data.numAnswered) continue;
      const numSurveys = data.numAnswered.count;
      const numAnswered = data.numAnswered.value;
      let numSurveyors, numAnswerFlagged, numTimeFlagged = 0, numFlagged = 0;
      let obj, afValue;
      if ((obj = data.answerFlagged)) {
        numSurveyors = obj.count;
        numAnswerFlagged = numSurveyors - obj.value["0"];
        afValue = obj.value;
      }
      if ((obj = data.timeFlagged)) {
        const count = obj.count;
        numTimeFlagged = count - obj.value["0"];
        numFlagged = 0;
        for (let key of Object.keys(obj.value)) {
          if (key === '0') continue;
          if (afValue[key]) numFlagged++;
        }
      }
      numFlagged = numAnswerFlagged + numTimeFlagged - numFlagged;
      weeklyStats.push({
        key, year, week,
        numSurveys, numAnswered,
        numSurveyors, numAnswerFlagged, numTimeFlagged, numFlagged,
      });
    }
    return weeklyStats.sort(
      (w1, w2) => {
        if (w1.year < w2.year) return -1;
        if (w1.year > w2.year) return 1;
        if (w1.week < w2.week) return -1;
        if (w1.week > w2.week) return 1;
        return 0;
      }      
    );
  }

  setupObject() {
    const uid = this.props.entityId.replace(/\//g, "_");
    return fetch(`/cms/locations/${uid}`).then(
      entity => ({
        entity,
        stats: this._parseStats(entity),
        weeklyStats: this._parseWeeklyStats(entity),
      })
    );
  }

  render() {
    const {entity, stats, weeklyStats} = this.state;
    if (!entity) return super.render();
    let {numAnswered, numSurveys} = stats || {};
    numAnswered = parseInt(numAnswered, 10);
    numSurveys = parseInt(numSurveys, 10);
    let ansPercentage = Math.round(numAnswered / numSurveys * 1000) / 10;
    return <div className={style.Stats}>
      <Responsive>
        <div className={style.Detail}>
          <h3>{entity.name}</h3>
          {stats && <p>
            Number of surveys: {numSurveys}<br/>
            Answered: {numAnswered} ({ansPercentage} %)
          </p>}
        </div>
        <APBar percentage={ansPercentage}/>
      </Responsive>
      <h4>Surveyor Statistics</h4>      
      {weeklyStats && 
        <div className={style.Row}>
          {weeklyStats.map(
            weekStats => <Bar {...weekStats}/>
          )}
        </div>
      }
    </div>;
  }
}

Object.assign(Block, {
  entityName: 'Location',
});