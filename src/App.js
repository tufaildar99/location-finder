import React, { useState, useRef, useEffect } from "react";
import Map from "react-map-gl";
import Fly from "./components/Fly";
import styles from "./App.module.css";

function App() {
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3639);
  const mapRef = useRef();

  const [viewState, setViewState] = useState({
    longitude: lon,
    latitude: lat,
    zoom: 3.5,
  });

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.getMap(); // Correct method name
      map.flyTo({
        center: [lon, lat],
        zoom: 10,
        speed: 1.2,
        curve: 1.414,
      });
    }
  }, [lat, lon]);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken="pk.eyJ1IjoidHVmYWlsZGFyOTkiLCJhIjoiY20wZGdvMWhqMGNibzJpczh2ZWM5N3F0eCJ9.UahuMneVQ4xK0eCE1M9zRg"
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      className={styles["map-container"]}
      style={{ width: "100%", height: "100vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    >
      <Fly setLon={setLon} setLat={setLat} />
    </Map>
  );
}

export default App;
