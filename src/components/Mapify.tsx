import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface CountryData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  lat: number;
  long: number;
}

interface MapProps {
  countryData: CountryData[];
}

const Mapify: React.FC<MapProps> = ({ countryData }) => {
    
  return (
    <div>
      <h2>COVID-19 Map</h2>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '300px', width: '50%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {countryData.map((data, index) => (
            
  // Check if latitude and longitude are defined
  data.lat !== undefined && data.long !== undefined ? (
    <Marker key={index}  position={[data.lat, data.long]}>
      <Popup>
        <strong>{data.country}</strong>
        <br />
        Active: {data.active}
        <br />
        Recovered: {data.recovered}
        <br />
        Deaths: {data.deaths}
      </Popup>
    </Marker>
  ) : null // Skip rendering for data with missing coordinates
))}

      </MapContainer>
    </div>
  );
};

export default Mapify;
