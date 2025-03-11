import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { AMSTERDAM_COORDS } from '../const/const.ts'
import { OfferMap } from '../types/type.ts';

type MapProps = {
  offers: OfferMap[];
};

const Map = ({ offers }: MapProps) => {

  useEffect(() => {

    const map = L.map('map').setView(AMSTERDAM_COORDS, 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map);


    offers.forEach(offer => {
      const marker = L.marker([offer.location.latitude, offer.location.longitude]).addTo(map);
      marker.bindPopup(offer.title);
    });

    return () => {
      map.remove();
    };
  }, [offers]);

  return (
    <div
      id="map"
      style={{ height: '100%', width: '100%' }}
    />
  );
};

export default Map;
