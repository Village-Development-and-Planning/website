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
    const data = mAgg.data;
    if (!data || !data.numAnswered) return;
    const numSurveys = data.numAnswered.count;
    const numAnswered = data.numAnswered.value;
    const numNotWilling = data.numNotWilling.value;
    const numNotThere = data.numNotHere.value;
    const numNotAlive = data.numNotAlive.value;
    return {mAgg, numSurveys, numAnswered, numNotWilling, numNotThere, numNotAlive};
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
      const data = agg.data;
      if (!data || !data.numAnswered) continue;
      weeklyStats.push(this._parseWeekly({key, year, week, data}));
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

  _parseWeekly({key, year, week, data}) {
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
    return ({
      key, year, week,
      numSurveys, numAnswered,
      numSurveyors, numAnswerFlagged, numTimeFlagged, numFlagged,
    });
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
    const {entity, stats} = this.state;
    if (!entity) return super.render();
    console.log('test stats', stats);
    let {numAnswered, numSurveys, numNotWilling, numNotThere, numNotAlive} = stats || {};
    numAnswered = parseInt(numAnswered, 10);
    numSurveys = parseInt(numSurveys, 10);
    let ansPercentage = Math.round(numAnswered / numSurveys * 1000) / 10;
    let numNotWillingPercentage = Math.round(numNotWilling / numSurveys * 1000) / 10;
    let numNotTherePercentage = Math.round(numNotThere / numSurveys * 1000) / 10;
    let numNotAlivePercentage = Math.round(numNotAlive / numSurveys * 1000) / 10;
    return <div className={style.Stats}>
      <Responsive>
        <div className={style.Detail}>
          <h3>{entity.name}</h3>
          {stats && <p>
            Total number of surveys completed: {numSurveys}<br/>
            Number of surveys answered: {numAnswered} ({ansPercentage} %)<br/>

            Percentage of households reported 'not willing': {numNotWillingPercentage} %<br/>
            Percentage of households reported 'not there': {numNotTherePercentage} %<br />
            Percentage of households reported 'dead': {numNotAlivePercentage} %<br />
          </p>}
        </div>
        {this.renderSecondComponent()}
      </Responsive>
      {this.renderWeeklyStats()}
    </div>;
  }

  renderSecondComponent() {
    const {stats} = this.state;
    let {numAnswered, numSurveys} = stats || {};
    numAnswered = parseInt(numAnswered, 10);
    numSurveys = parseInt(numSurveys, 10);
    let ansPercentage = Math.round(numAnswered / numSurveys * 1000) / 10;
    return <APBar percentage={ansPercentage}/>;
  }

  renderWeeklyStats() {
    const {weeklyStats} = this.state;
    const message = this.weeklyStatsMessage || 'Proportion of Surveyors that are flagged';
    if (!weeklyStats) return;
    return <React.Fragment>
      <h4>{message}</h4>
      {weeklyStats &&
        <div className={style.Row}>
          {weeklyStats.map(this.renderWeekly.bind(this))}
        </div>
      }
    </React.Fragment>;
  }

  renderWeekly(weekStats) {
    return <Bar {...weekStats}/>;
  }
}

Object.assign(Block, {
  entityName: 'Location',
});