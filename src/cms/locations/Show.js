import React from 'react';
import ShowPage from '../base/Show';
import YAML from 'js-yaml';

import L from 'leaflet';

export default class Show extends ShowPage {
  render() {
    let entity = this.state.entity;
    if (entity) {
      return (
        <div>
          <h4>{entity.type}</h4>
          <p>{entity.uid} - {entity.name}</p>
          <div id="map" style={{width: "60em", height: "60ex"}}/>          

          <h4>Payload</h4>
          <code><pre>
            {JSON.stringify(entity.payload, null, 2)}
          </pre></code>

          <h4>Aggregates</h4>
          <code><pre>
            {YAML.safeDump(entity.aggregates.map(
              ({type, key, data, metadata=null}) => 
              ({type, key, data, metadata})
            ))}
          </pre></code>
        </div>
      );
    } else {
      return super.render();
    }
  }

  componentDidUpdate() {
    const entity = this.state.entity;
    if (!entity) return;

    const aggregates = entity.aggregates;
    if (!aggregates) return;

    const agg = aggregates.find(({type}) => (type.endsWith('/Household')));
    if (!agg) return;

    const locations = agg.data && agg.data.locations;
    if (!locations || !locations.value || !locations.count) return;
    let avgLat = 0, avgLong = 0, len = 0;

    const markers = [];
    const map = L.map('map');
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    for(let key of Object.keys(locations.value)) {
      let [lat, long] = key.split(',');
      if (!lat || !long) continue;
      lat = parseInt(lat, 10) / 10000;
      long = parseInt(long, 10) / 10000;
      avgLat += lat;
      avgLong += long;
      len = len + 1;
      markers.push(
        L.marker(
          [lat, long]
        ).addTo(map)
      );
    }
    avgLat /= len;
    avgLong /= len;

    map.fitBounds(
      (new L.featureGroup(markers)).getBounds().pad(0.1)
    );
  }
  
};
Show.entityName = 'Location';
