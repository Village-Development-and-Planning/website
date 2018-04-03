import React from 'react';
import ShowPage from '../../../cms/base/Show';
import Responsive from '../../../layout/Responsive';

import fetch from '../../../utils/fetch';
import {Column, Detail, Stats as StatStyle} from '../../validation/style.scss';

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
      let numSurveyors, numAnswerFlagged, numTimeFlagged;
      let obj;
      if ((obj = data.answerFlagged)) {
        numSurveyors = obj.count;
        numAnswerFlagged = numSurveyors - obj.value["0"];
      }
      if ((obj = data.timeFlagged)) {
        const count = obj.count;
        numTimeFlagged = count - obj.value["0"];
      }
      weeklyStats.push({
        key, year, week,
        numSurveys, numAnswered,
        numSurveyors, numAnswerFlagged, numTimeFlagged,
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
    return <div className={StatStyle}>
      <Responsive>
        <div className={Detail}>
          <h3>{entity.name}</h3>
          {stats && <p>
            Number of surveys: {numSurveys}<br/>
            Answered: {numAnswered} ({ansPercentage} %)
          </p>}
        </div>
      </Responsive>
      <h4>Weekly Statistics</h4>      
      {weeklyStats && 
        <Responsive>
          <div className={Column} key="header">
            <p>Week</p>
            <p>Surveys</p>
            <p>Answered</p>
            <p>Surveyors</p>
            <p>Answer Flagged</p>
            <p>Time Flagged</p>
          </div>
          {weeklyStats.map(
            ({
              week, year, key,
              numAnswered, numSurveys,
              numSurveyors, numAnswerFlagged, numTimeFlagged,
            }) => <div className={Column} key={key}>
              <p>{week}/{year}</p>
              <p>{numSurveys}</p>
              <p>{numAnswered}</p>
              <p>{numSurveyors}</p>
              <p>{numAnswerFlagged}</p>
              <p>{numTimeFlagged}</p>
            </div>
          )}
        </Responsive>
      }
    </div>;
  }
}

Object.assign(Block, {
  entityName: 'Location',
});