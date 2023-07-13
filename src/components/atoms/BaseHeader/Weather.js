import React, { useEffect, useState } from "react";

export default function Weather() {
  const [maxT, setMaxT] = useState(null);
  const [minT, setMinT] = useState(null);
  const [tz, setTz] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [actual, setActual] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { hourly, timezone, latitude, longitude, current_weather } = data;
        const actualTemp = current_weather.temperature;
        const temperatures = hourly.temperature_2m;
        const maxT = Math.max(...temperatures);
        const minT = Math.min(...temperatures);
        setMaxT(maxT);
        setMinT(minT);
        setTz(timezone);
        setLat(latitude);
        setLong(longitude);
        setActual(actualTemp);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="currentWeather">
      <h5 className="actualWeather">CLIMA HOY AHORA: {actual}°C</h5>
      <h5 className="actualWeather">
        máxima: {maxT}°C - mínima: {minT}°C
      </h5>
      <h5 className="actualWeather">
        (lat: {lat} - long: {long} - {tz})
      </h5>
    </div>
  );
}
