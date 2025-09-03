'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import branches from '@/data/branches.json';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Define branch type
type Branch = {
  id: string | number;
  name: string;
  lat: number;
  lng: number;
};

export default function BranchesMap() {
  return (
    <MapContainer center={[40.7128, -74.006]} zoom={13} className="h-96 w-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {(branches as Branch[]).map((branch) => (
        <Marker key={branch.id} position={[branch.lat, branch.lng]}>
          <Popup>{branch.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
