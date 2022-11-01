import { getCenter } from "geolib";
import { useEffect, useState } from "react";
import MapGL, { Marker, Popup } from "react-map-gl";
import { InfoCardProps, InfoCardPropsBlank } from "./InfoCard";
import "mapbox-gl/dist/mapbox-gl.css";
import { isThisMinute } from "date-fns/esm";

// interface ViewportProps {
//   latitude: number;
//   longitude: number;
//   zoom: number;
// }

// interface ICoordinates {
//   latitude: number;
//   longitude: number;
// }

// interface ICoordinatesResult extends Array<ICoordinates> {}

export default function Map({ searchResults }: any) {
  const [selectedLocation, setSelectedLocation] = useState<InfoCardPropsBlank>();
  const coordinates = searchResults?.map((item: InfoCardProps) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const center: any = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <MapGL
      mapStyle={"mapbox://styles/koreasledo/cl9xg8s7o000314mqa9kdy3nt"}
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={viewport}
      style={{ width: "100%", height: "100%" }}
      onMove={(e) => setViewport(e.viewState)}
    >
      {searchResults?.map((item: InfoCardProps, idx: number) => (
        <div key={`marker_${idx}`} className="relative">
          <Marker longitude={item.long} latitude={item.lat}>
            <p
              role={"img"}
              onClick={() => setSelectedLocation(item)}
              className="cursor-pointer text-2xl active:animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {item.long === selectedLocation?.long ? (
            <Popup latitude={item.lat} longitude={item.long} anchor="bottom">
              {item.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </MapGL>
  );
}
