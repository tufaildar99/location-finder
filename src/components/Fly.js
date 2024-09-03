import { useState } from "react";
import Axios from "axios";
import styles from "../App.module.css";

const API_KEY =
  "pk.eyJ1IjoidHVmYWlsZGFyOTkiLCJhIjoiY20wZGdvMWhqMGNibzJpczh2ZWM5N3F0eCJ9.UahuMneVQ4xK0eCE1M9zRg";

function Fly({ setLat, setLon }) {
  const [city, setCity] = useState("Kolkata");

  function getCoordinates() {
    Axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${API_KEY}`
    ).then((res) => {
      // Longitude
      setLon(res.data.features[0].geometry.coordinates[0]);

      // Latitude
      setLat(res.data.features[0].geometry.coordinates[1]);
    });
  }

  return (
    <div className="Fly">
      <div className={styles.Fly}>
        <label>Enter City Name:</label>
        <input type="text" onChange={(e) => setCity(e.target.value)} />
        <button onClick={() => getCoordinates()}>Go</button>
      </div>
    </div>
  );
}

export default Fly;
