import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

import "./WeatherApp.css"; // Don't forget to import it!
import Typography from "@mui/material/Typography";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Ramu",
    temp: 25.2,
    tempMin: 23.71,
    tempMax: 27.22,
    humidity: 73,
    feelsLike: 24.6,
    weather: "Haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="WeatherApp">
      {" "}
      {/* Use the className */}
      <Typography className="app-title" variant="h2" component="h1">
        Weather App by Tahfim
      </Typography>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
