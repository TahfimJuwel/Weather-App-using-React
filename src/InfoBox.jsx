/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://www.aprilaire.com/blog/wp-content/uploads/2022/08/Hazy-Skies-scaled.webp";
  const RAIN_URL =
    "https://media.istockphoto.com/id/503284599/photo/rainy-weather.jpg?s=612x612&w=0&k=20&c=pV38CVp0CLArYEZ6OUWnaqo6J5mo4JpbEZd61Vxr_I4=";
  const COLD_URL =
    "https://www.climaterealityproject.org/sites/default/files/styles/intro_title_impact_small_never_crop/public/adam-chang-iwenq-4jhqo-unsplash.jpg?itok=hYswWfUO";

  return (
    <div className="InfoBox">
      {/* This title should probably be white to match the theme */}
      <h2 style={{ textAlign: "center", color: "white" }}>
        Weather Information
      </h2>
      <div className="cardContainer">
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "rgba(50, 161, 126, 0.25)", // Bluish, semi-transparent
            backdropFilter: "blur(5px)", // The "glass" blur effect
            border: "1px solid rgba(255, 255, 255, 0.18)", // Optional subtle border
            borderRadius: "16px", // Softer corners
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", // A softer shadow
          }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 20
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            {/* Make the city name white for better contrast */}
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              {info.city}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 20 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            {/* Change the text color inside the card */}
            <Typography
              variant="body2"
              component="span"
              sx={{ color: "rgba(255, 255, 255, 0.85)" }} // A slightly softer white
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
