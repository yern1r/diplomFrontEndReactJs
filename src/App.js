import React from "react";
import {MapContainer , 
        TileLayer,
        Polygon
      } from 'react-leaflet';
import './App.css'
import 'leaflet/dist/leaflet.css'
import { kzData } from "./dataset";
import { geoData } from "./dataKZ";
import {regionsData} from "./data";
import {dataKaz} from "./kz_1"
export default function App() {
  const center = [51.14785201811187, 71.42051412480411];

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: '100vw', height: '100vh' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=lAfPUf5Gp1V0b67cBxkI"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {dataKaz.features.map((region) => {
        const { geometry } = region;
        if (geometry.type === 'MultiPolygon') {
          return geometry.coordinates.map((coordinates) => (
            <Polygon
              pathOptions={{
                fillColor: '#FD8D3C',
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: 'white',
              }}
              positions={coordinates[0].map((coord) => [coord[1], coord[0]])}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 5,
                    dashArray: '',
                    color: '#666',
                    fillColor: '#d45962',
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: '3',
                    color: 'white',
                    fillColor: '#FD8D3C',
                  });
                },
                click: (e) => {},
              }}
            />
          ));
        } else if (geometry.type === 'Polygon') {
          const coordinates = geometry.coordinates[0].map((coord) => [
            coord[1],
            coord[0],
          ]);
          return (
            <Polygon
              pathOptions={{
                fillColor: '#FD8D3C',
                fillOpacity: 0.7,
                weight: 2,
                opacity: 1,
                dashArray: 3,
                color: 'white',
              }}
              positions={coordinates}
              eventHandlers={{
                mouseover: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 5,
                    dashArray: '',
                    color: '#666',
                    fillColor: '#d45962',
                  });
                },
                mouseout: (e) => {
                  const layer = e.target;
                  layer.setStyle({
                    fillOpacity: 0.7,
                    weight: 2,
                    dashArray: '3',
                    color: 'white',
                    fillColor: '#FD8D3C',
                  });
                },
                click: (e) => {},
              }}
            />
          );
        }
        return null;
      })}
    </MapContainer>
  );
}
