import React from 'react';

import ShowPage from '../../../cms/base/Show';
import Responsive from '../../../layout/Responsive';
import Map from './map';
import L from 'leaflet';

import fetch from '../../../utils/fetch';
import {Detail, FTable, Panchayat as PanchayatStyle} from '../style.scss';

export default class Panchayat extends ShowPage {
  setupObject() {
    const uid = this.props.entityId.replace(/\//g, "_");
    return fetch(`/cms/locations/${uid}`).then(
      entity => {
        const mAgg = entity.aggregates.find(
          a => (a.type === 'LocationAggregate/PANCHAYAT/Mapping')
        );
        const locations = [];
        const items = Panchayat.items.map(
          ({key, name}) => ({key, name, data: mAgg.data[key]})
        );
        Panchayat.items.forEach(
          ({key, name}) => {
            const locObj = mAgg.data[`${key}_locations`];
            if (!locObj) return;
            const locs = this._locations(locObj.value);            
            if (!locs) return;            
            locs.forEach(l => locations.push(L.marker(l)));          
          }
        );
        return {items, locations, entity};    
      }
    );
  }

  render() {
    const {entity, items, locations} = this.state;
    if (!entity || !items) return super.render();  

    return <div className={PanchayatStyle}>
      <h3>{entity.name}</h3>
      <Responsive>
        <div className={Detail}>
          {items.map(
            ({key, name, data}) => <div className={FTable} key={key}>
              <div>{name}</div>
              <div>{(data && data.count) || 0}</div>
            </div>
          )}
        </div>
        <Map locations={locations}/>
      </Responsive>
    </div>;
  }

  _locations(value) {    
    if (!value || (typeof value !== 'object')) return;
    let ret = [];
    Object.keys(value).forEach(
      k => {
        console.log(k);
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
      "key": "pds_outlet",
      "name": "pds_outlet"
    },
    {
      "key": "bus_stop",
      "name": "bus_stop"
    },
    {
      "key": "common_land",
      "name": "common_land"
    },
    {
      "key": "road",
      "name": "road"
    },
    {
      "key": "bridge_or_culvert",
      "name": "bridge_or_culvert"
    },
    {
      "key": "agricultural_facility",
      "name": "agricultural_facility"
    },
    {
      "key": "atm",
      "name": "atm"
    },
    {
      "key": "government_buildings",
      "name": "government_buildings"
    },
    {
      "key": "vprc_office",
      "name": "vprc_office"
    },
    {
      "key": "village_panchayat_office",
      "name": "village_panchayat_office"
    },
    {
      "key": "shop",
      "name": "shop"
    },
    {
      "key": "communal_hall_space_or_recreational_center",
      "name": "communal_hall_space_or_recreational_center"
    },
    {
      "key": "place_of_worship",
      "name": "place_of_worship"
    },
    {
      "key": "school_or_education_center",
      "name": "school_or_education_center"
    },
    {
      "key": "man_made_water_source",
      "name": "man_made_water_source"
    },
    {
      "key": "street_light",
      "name": "street_light"
    },
    {
      "key": "bank",
      "name": "bank"
    },
    {
      "key": "anganwadi",
      "name": "anganwadi"
    },
    {
      "key": "public_toilet_or_sanitation_facility",
      "name": "public_toilet_or_sanitation_facility"
    },
    {
      "key": "garbage_bin",
      "name": "garbage_bin"
    }
  ]    
});