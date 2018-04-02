import React from 'react';
import { Link } from 'react-router-dom';
import ShowPage from '../../../cms/base/Show';
import Responsive from '../../../layout/Responsive';
import Map from './map';
import L from 'leaflet';

import fetch from '../../../utils/fetch';
import {Detail, FTable, Panchayat as PanchayatStyle} from '../style.scss';

export default class Panchayat extends ShowPage {
  _parseSurveyors(entity) {    
    const aType = 'LocationAggregate/PANCHAYAT/MappingSurveyors';
    if (!entity || !entity.aggregates) return;
    const mAgg = entity.aggregates.find(
      a => (a.type === aType)
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
    const aType = 'LocationAggregate/PANCHAYAT/Mapping';
    if (!entity || !entity.aggregates) return;
    const mAgg = entity.aggregates.find(
      a => (a.type === aType)
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
        const locs = this._locations(locObj.value);            
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
          {surveyor && <React.Fragment>
            <h4>Surveyor Code: <Link to={`/surveyors/${surveyor.username}`}>
              {surveyor.username}
            </Link></h4>
            <h4>Surveyor Name: <Link to={`/surveyors/${surveyor.username}`}>
              {surveyor.name}
            </Link></h4>
          </React.Fragment>}          
        </div>
        <Map locations={locations}/>
      </Responsive>
      <p>Summary Sheet of infrastructure available in the village:</p>
      {items.map(
        ({key, name, data}) => <div className={FTable} key={key}>
          <div>{name}</div>
          <div>{(data && data.count) || 0}</div>
        </div>
      )}      
    </div>;
  }

  _locations(value) {    
    if (!value || (typeof value !== 'object')) return;
    let ret = [];
    Object.keys(value).forEach(
      k => {        
        const l = this._location(k);
        if (l) ret.push(l);
      }
    );
    return ret;
  }

  _location(key) {
    let [lat, long] = key.split(',');
    if (!lat || !long) return;
    lat = parseInt(lat, 10) / 10000;
    long = parseInt(long, 10) / 10000;
    return [lat, long];
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
      "name": "Bridge or culvert"
    },
    {
      "key": "shop",
      "name": "Shops"
    },
    {
      "key": "agricultural_facility",
      "name": "Agricultural facility"
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
      "name": "ATM"
    },
    {
      "key": "garbage_bin",
      "name": "Garbage bins"
    }
  ]    
});