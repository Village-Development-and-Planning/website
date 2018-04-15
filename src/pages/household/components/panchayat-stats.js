import Stats from './stats';
import React from 'react';
import style from '../../validation/style.scss';

import {_locations} from '../../validation/map-helpers';
import L from 'leaflet';
import Map from '../../validation/map';

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

  renderWeekly({key, year, week, answerFlagged, timeFlagged}) {
    return <div key={key} className={style.FlagColumn}>
      <h5>{week}/{year}</h5>
      {answerFlagged && answerFlagged.map(
        c => <div key={`${c}/A`}>{c} (A)</div>
      )}
      {timeFlagged && timeFlagged.map(
        c => <div key={`${c}/T`}>{c} (T)</div>
      )}
    </div>;
  }

  renderWeeklyStats() {
    this.weeklyStatsMessage = 'Flagged Surveyors';
    return super.renderWeeklyStats();
  }
  renderSecondComponent() {
    const locations = this.state.stats && this.state.stats.locations;
    if (!locations || !locations.length) return;
    return <Map locations={locations}/>;
  }
}