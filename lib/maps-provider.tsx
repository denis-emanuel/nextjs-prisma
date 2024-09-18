"use client";

import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

const defaultMapCenter = {
  lat: 47.1359488,
  lng: 24.4756406,
};
const defaultZoom = 18;
const defaultMapOptions = {
  zoomControl: true,
  tilt: 0,
};

type Poi = { key: string; location: google.maps.LatLngLiteral };
const locations: Poi[] = [
  { key: "utilaje", location: { lat: 47.1359488, lng: 24.4756406 } },
];

export const MapProvider = () => {
  return (
    <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY ?? ""}>
      <Map
        style={{ width: "100%", height: "100%" }}
        defaultCenter={defaultMapCenter}
        defaultZoom={defaultZoom}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {locations.map((poi: Poi) => (
          <AdvancedMarker key={poi.key} position={poi.location}>
            <Pin
              background={"#FBBC04"}
              glyphColor={"#000"}
              borderColor={"#000"}
            />
            {/* <div className="bg-white p-2 rounded-lg shadow-md">
              <h2 className="text-lg">Utilaje</h2>
              <p>Str. Some street, nr. 1</p>
            </div> */}
          </AdvancedMarker>
        ))}
      </Map>
    </APIProvider>
  );
};
