// import React, {useRef, useEffect} from 'react';
// import leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import useMap from '../../hooks/use-map';


// const DetailsIcon = {
//     Url: 'img/icon.png',
//     Width: 46,
//     Height: 60,
// };

// const address = {
//     lat: 52.938955,
//     lng: 54.315644,
//     zoom: 3,
//     };


// const customIcon = leaflet.icon({
//   iconUrl: DetailsIcon.Url,
//   iconSize: [DetailsIcon.Width, DetailsIcon.Height],
//   iconAnchor: [DetailsIcon.Width/2, DetailsIcon.Height],
// });


// function Map() {
//   const mapRef = useRef(null);
//   const map = useMap(mapRef, address);

//   // useEffect(() => {
//   //   if (map) {
//   //       leaflet
//   //         .marker({
//   //           lat: address.lat,
//   //           lng: address.lng,
//   //         }, {
//   //           icon: customIcon,
//   //         })
//   //         .addTo(map);
//   //     }
//   //   }, [map, address]);

//   return (
//     <div
//     className="map"
//     style={{
//       width: 555,
//       height: 700}}
//       ref={mapRef}
//     >
//     </div>
//   );
// }

// export default Map;

import { YMaps, Map, Placemark } from "react-yandex-maps";

const mapData = {
  center: [59.751574, 30.573856],
  zoom: 7,
};

function MapI ({address}) {

  return (
    <YMaps>
    <Map style={{
      width: 555,
      height: 700,
    }} defaultState={mapData}>
      <Placemark geometry={address} />
    </Map>
  </YMaps>
  )
}
export default MapI;
