import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

import "./WeatherApp.css";
import Typography from "@mui/material/Typography";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="app-container">
      <Typography className="app-title" variant="h3" component="h1">
        La La Weather 
      </Typography>

      {/* The SearchBox panel now has an extra class */}
      <div className="glass-panel search-panel">
        <SearchBox updateInfo={updateInfo} />
      </div>

      {weatherInfo ? (
        <div className="glass-panel">
          <InfoBox info={weatherInfo} />
        </div>
      ) : (
        <div className="glass-panel initial-message">
          <TravelExploreIcon
            sx={{ fontSize: "4rem", color: "rgba(255, 255, 255, 0.7)" }}
          />
          <Typography variant="h6" component="p">
            Enter a city to begin your journey in the Atmosphere with Tahfim.
          </Typography>
        </div>
      )}
    </div>
  );
}
