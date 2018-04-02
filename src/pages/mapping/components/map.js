import React, {Component} from 'react';
import {Map} from '../style.scss';
import L from 'leaflet';

let counter = 0;

export default class extends Component {
  componentDidMount() {
    if (!this.mapId) return;
    const locations = this.props.locations;

    const map = L.map(this.mapId);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);    
    if (!locations) {
      map.setView([10.8, 77], 6);
      return;
    }
    locations.forEach(l => l.addTo(map));
    map.fitBounds((new L.featureGroup(locations)).getBounds());
  }
  render() {
    const mapId = `map-${counter++}`;
    this.mapId = mapId;
    return <div className={Map} id={mapId}>
    </div>;
  }
}