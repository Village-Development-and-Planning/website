import Stats from './stats';
import React from 'react';
import style from '../../validation/style.scss';
import {t} from '../../../translations';
import {_locations} from '../../validation/map-helpers';
import L from 'leaflet';
import Map from '../../validation/map';
import Table from '../../../layout/Table';
import { Link } from 'react-router-dom';
import fetch from '../../../utils/fetch';

export default class extends Stats {

  _parseStats(entity) {
    const obj = super._parseStats(entity);
    if (!obj) return;
    const {mAgg} = obj;
    if (!mAgg || !mAgg.data || !mAgg.data.locations) return obj;
    const locs = _locations(mAgg.data.locations.value);
    if (!locs) return obj;
    const locations = [];
    locs.forEach(l => locations.push(L.marker(l)));
    obj.locations = locations;
    return obj;
  }

  _parseWeekly({key, year, week, data}) {
    let answerFlagged, timeFlagged;
    if (data.answerFlagged && data.answerFlagged.value) {
      answerFlagged = Object.keys(data.answerFlagged.value).filter(s => s !== '0');
    }
    if (data.timeFlagged && data.timeFlagged.value) {
      timeFlagged = Object.keys(data.timeFlagged.value).filter(s => s !== '0');
    }
    return {key, year, week, answerFlagged, timeFlagged};
  }

  async fetchSurveyorNames(codes) {
    if (!codes) return codes;
    let output=[];
    for(let a of codes) {
      let name = await fetch(`/cms/surveyors/${a}`).then((e) => e && e.name);
      output.push(`${a} - ${name}`);
    }
    return output;
  }

  async fetchSurveyorInfo(data) {
    const {weeklyStats} = data;
    if (!weeklyStats) return data;
    for(let w of weeklyStats) {
      w.timeFlagged = await this.fetchSurveyorNames(w.timeFlagged);
      w.answerFlagged = await this.fetchSurveyorNames(w.answerFlagged);
    }
    return data;
  }

  setupObject() {
    return super.setupObject().then((data) => this.fetchSurveyorInfo(data));
  }

  renderWeekly({key, year, week, answerFlagged, timeFlagged}) {
    return <div key={key} className={style.FlagColumn}>
      <h5>{week}/{year}</h5>
      {answerFlagged && answerFlagged.map(
        c => <Link key={`${c}/A`} to={`/surveyors/${c}`}>{c} (Ans)</Link>
      )}
      {timeFlagged && timeFlagged.map(
        c => <Link key={`${c}/T`} to={`/surveyors/${c}`}>{c} (Time)</Link>
      )}
    </div>;
  }

  renderWeeklyStats() {
    let {weeklyStats} = this.state;
    if (!weeklyStats) weeklyStats = [];
    return <React.Fragment>
      <h4>{t('Surveyors flagged')}</h4>
      <Table
        ctx={this}
        columns={{
          week: {
            name: `${t('Week')} / ${t('Year')}`,
            value: ({year, week}) => `${week}/${year}`,
          },
          answerFlagged: {
            name: 'Surveyors flagged for answer',
            value: ({answerFlagged: flags}) => flags
              && flags.map((e, idx) => (<span key={idx}>{e}<br/></span>)),
            rawValue: ({answerFlagged: flags}) => flags
              && flags.join('\n'),

          },
          timeFlagged: {
            name: 'Surveyors flagged for time',
            value: ({timeFlagged: flags}) => flags
              && flags.map((e, idx) => (<span key={idx}>{e}<br/></span>)),
            rawValue: ({answerFlagged: flags}) => flags
              && flags.join('\n'),
          }
        }}
        entities={weeklyStats}
      />
    </React.Fragment>;
  }

  renderSecondComponent() {
    const locations = this.state.stats && this.state.stats.locations;
    if (!locations || !locations.length) return;
    return <Map locations={locations}/>;
  }
}