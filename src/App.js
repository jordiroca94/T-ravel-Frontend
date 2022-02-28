import * as React from 'react';
import Map, {Marker} from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const RACT_APP_MAPBOX = "pk.eyJ1Ijoiam9yZGlyb2NhOTQiLCJhIjoiY2wwNnp0ZTZ1MDFpZTNrcDYzanhod2VnbSJ9.4qhWWAscO01UzSdinUba1Q"


function App() {
  return (
    <Map
    initialViewState={{
      latitude: 45,
      longitude: 16,
      zoom: 4
    }}
    style={{width: "100vw", height: "100vh"}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={RACT_APP_MAPBOX}
  >
    <Marker longitude={12.492373} latitude={41.890251} color="black" />
  </Map>
  );
}

export default App