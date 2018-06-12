import React from 'react';
import { Link } from 'react-router-dom';
import ShowPage from '../../../cms/base/Show';
import Responsive from '../../../layout/Responsive';
import Map from '../../validation/map';
import L from 'leaflet';
import {_locations} from '../../validation/map-helpers';
import fetch from '../../../utils/fetch';
import {Detail, FTable, Panchayat as PanchayatStyle} from '../../validation/style.scss';

import {T} from '../../../translations';

export default class Panchayat extends ShowPage {
  _parseSurveyors(entity) {
    if (!entity || !entity.aggregates) return;
    const mAgg = entity.aggregates.find(
      a => (a.type && a.type.endsWith('/MappingSurveyors'))
    );
    let ids;
    ids = mAgg
      && (ids = mAgg.data)
      && (ids = ids.idSpec)
      && (ids = ids.value)
      && (ids = Object.keys(ids))
      && (ids = ids[0]);
    if (!ids) return;
    return fetch(`/cms/surveyors/${ids}`)
      .then(surveyor => ({surveyor}));
  }

  _parseLocations(entity) {
    if (!entity || !entity.aggregates) return;
    const mAgg = entity.aggregates.find(
      a => (a.type && a.type.endsWith('/Mapping'))
    );
    if (!mAgg) return;
    const locations = [], items = [];
    Panchayat.items.forEach(
      ({key, name}) => {
        const data = mAgg.data[key];
        if (!data) return;
        items.push({key, name, data});

        const locObj = mAgg.data[`${key}_locations`];
        if (!locObj) return;
        const locs = _locations(locObj.value);
        if (!locs) return;
        locs.forEach(l => locations.push(L.marker(l)));
      }
    );
    return {items, locations};
  }

  setupObject() {
    const uid = this.props.entityId.replace(/\//g, "_");
    return fetch(`/cms/locations/${uid}`).then(
      entity => {
        const ret = {entity};
        return Promise.all([
          Promise.resolve(this._parseLocations(entity))
            .then(l => Object.assign(ret, l)),
          Promise.resolve(this._parseSurveyors(entity))
            .then(l => Object.assign(ret, l)),
        ]).then(() => ret);
      }
    );
  }

  render() {
    const {entity, items, locations, surveyor} = this.state;
    if (!entity || !items) return super.render();

    return <div className={PanchayatStyle}>
      <Responsive>
        <div className={Detail}>
          <h3>{entity.name}</h3>
          {entity.type === 'PANCHAYAT' && surveyor && <React.Fragment>
            <h4><T>Surveyor Code</T>: <Link to={`/surveyors/${surveyor.username}`}>
              {surveyor.username}
            </Link></h4>
            <h4><T>Surveyor Name</T>: <Link to={`/surveyors/${surveyor.username}`}>
              {surveyor.name}
            </Link></h4>
          </React.Fragment>}
        </div>
        {locations && !!locations.length && <Map locations={locations}/>}
      </Responsive>
      <T>
        <p>Summary of infrastructure available{':'}</p>
        <React.Fragment>
          {items.map(
            ({key, name, data}) => <div className={FTable} key={key}>
              <div>{name}</div>
              <div>{(data && data.count) || 0}</div>
            </div>
          )}
        </React.Fragment>
      </T>
    </div>;
  }

}

Object.assign(Panchayat, {
  entityName: 'Location',
  items: [
    {
      "key": "road",
      "name": "Roads"
    },
    {
      "key": "street_light",
      "name": "Street lights"
    },
    {
      "key": "man_made_water_source",
      "name": "Water sources"
    },
    {
      "key": "public_toilet_or_sanitation_facility",
      "name": "Public toilets"
    },
    {
      "key": "pds_outlet",
      "name": "PDS outlets"
    },
    {
      "key": "anganwadi",
      "name": "Anganwadis"
    },
    {
      "key": "bus_stop",
      "name": "Bus stops"
    },
    {
      "key": "school_or_education_center",
      "name": "Schools"
    },
    {
      "key": "place_of_worship",
      "name": "Place of worship"
    },
    {
      "key": "common_land",
      "name": "Common land"
    },
    {
      "key": "communal_hall_space_or_recreational_center",
      "name": "Communal halls"
    },
    {
      "key": "bridge_or_culvert",
      "name": "Bridges or culverts"
    },
    {
      "key": "shop",
      "name": "Shops"
    },
    {
      "key": "agricultural_facility",
      "name": "Agricultural facilities"
    },
    {
      "key": "government_buildings",
      "name": "Government buildings"
    },
    {
      "key": "vprc_office",
      "name": "VPRC office"
    },
    {
      "key": "village_panchayat_office",
      "name": "Village Panchayat Office"
    },
    {
      "key": "bank",
      "name": "Banks"
    },
    {
      "key": "atm",
      "name": "ATMs"
    },
    {
      "key": "garbage_bin",
      "name": "Garbage bins"
    }
  ]
});