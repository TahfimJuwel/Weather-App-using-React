// /* eslint-disable react/prop-types */
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import SunnyIcon from "@mui/icons-material/Sunny";
// import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
// import AcUnitIcon from "@mui/icons-material/AcUnit";

// import "./InfoBox.css";

// export default function InfoBox({ info }) {
//   const HOT_URL =
//     "https://www.aprilaire.com/blog/wp-content/uploads/2022/08/Hazy-Skies-scaled.webp";
//   const RAIN_URL =
//     "https://media.istockphoto.com/id/503284599/photo/rainy-weather.jpg?s=612x612&w=0&k=20&c=pV38CVp0CLArYEZ6OUWnaqo6J5mo4JpbEZd61Vxr_I4=";
//   const COLD_URL =
//     "https://www.climaterealityproject.org/sites/default/files/styles/intro_title_impact_small_never_crop/public/adam-chang-iwenq-4jhqo-unsplash.jpg?itok=hYswWfUO";

//   return (
//     <div className="InfoBox">
//       {/* This title should probably be white to match the theme */}
//       <h2 style={{ textAlign: "center", color: "white" }}>
//         Weather Information
//       </h2>
//       <div className="cardContainer">
//         <Card
//           sx={{
//             maxWidth: 345,
//             backgroundColor: "rgba(44, 83, 100, 0.35)", // A deep teal-blue
//             backdropFilter: "blur(5px)",
//             border: "1px solid rgba(255, 255, 255, 0.18)",
//             borderRadius: "16px",
//             boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <CardMedia
//             sx={{ height: 140 }}
//             image={
//               info.humidity > 80
//                 ? RAIN_URL
//                 : info.temp > 20
//                 ? HOT_URL
//                 : COLD_URL
//             }
//             title="green iguana"
//           />
//           <CardContent>
//             {/* Make the city name white for better contrast */}
//             <Typography
//               gutterBottom
//               variant="h5"
//               component="div"
//               sx={{ color: "white" }}
//             >
//               {info.city}{" "}
//               {info.humidity > 80 ? (
//                 <ThunderstormIcon />
//               ) : info.temp > 20 ? (
//                 <SunnyIcon />
//               ) : (
//                 <AcUnitIcon />
//               )}
//             </Typography>
//             {/* Change the text color inside the card */}
//             <Typography
//               variant="body2"
//               component="span"
//               sx={{ color: "rgba(255, 255, 255, 0.85)" }} // A slightly softer white
//             >
//               <p>Temperature = {info.temp}&deg;C</p>
//               <p>Humidity = {info.humidity}</p>
//               <p>Min Temp = {info.tempMin}&deg;C</p>
//               <p>Max Temp = {info.tempMax}&deg;C</p>
//               <p>
//                 The weather can be described as <i>{info.weather}</i> and feels
//                 like {info.feelsLike}&deg;C
//               </p>
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

// Import icons
import SunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

import "./InfoBox.css";

export default function InfoBox({ info }) {
  // Guard Clause: If we don't have weather info yet, don't render anything.
  // This prevents errors on the initial page load.
  if (!info.city) {
    return null;
  }
  
  // --- Image URLs (with RAIN_URL corrected) ---
  const HOT_URL = "https://www.aprilaire.com/blog/wp-content/uploads/2022/08/Hazy-Skies-scaled.webp";
  const RAIN_URL = "https://media.istockphoto.com/id/503284599/photo/rainy-weather.jpg?s=612x612&w=0&k=20&c=pV38CVp0CLArYEZ6OUWnaqo6J5mo4JpbEZd61Vxr_I4=";
  const COLD_URL = "https://www.climaterealityproject.org/sites/default/files/styles/intro_title_impact_small_never_crop/public/adam-chang-iwenq-4jhqo-unsplash.jpg?itok=hYswWfUO";
  const CLOUDY_URL = "https://t3.ftcdn.net/jpg/03/10/45/78/360_F_310457894_HIpFBaxSQxiptoVgx0y1o4ZGXyH92YO9.jpg";

  const getWeatherVisuals = () => {
    const weather = info.weather.toLowerCase();
    if (weather.includes("rain") || weather.includes("drizzle") || weather.includes("thunderstorm")) {
      return { imageUrl: RAIN_URL, icon: <ThunderstormIcon /> };
    }
    if (weather.includes("clear") || weather.includes("sunny")) {
      return { imageUrl: HOT_URL, icon: <SunnyIcon /> };
    }
    if (weather.includes("cloud") || weather.includes("overcast") || weather.includes("fog")) {
      return { imageUrl: CLOUDY_URL, icon: <CloudIcon /> };
    }
    if (info.temp < 20) {
      return { imageUrl: COLD_URL, icon: <AcUnitIcon /> };
    }
    // Default fallback
    return { imageUrl: HOT_URL, icon: <SunnyIcon /> };
  };

  const { imageUrl, icon } = getWeatherVisuals();

  const getUvAdvice = () => {
    if (info.uvIndex > 7) {
      return (
        <span style={{ color: "#ff5252", display: 'flex', alignItems: 'center' }}>
          <WarningAmberIcon fontSize="small" /> &nbsp;Extreme: Extra protection required
        </span>
      );
    }
    if (info.uvIndex > 5) {
        return (
          <span style={{ color: "#ffd740", display: 'flex', alignItems: 'center' }}>
            <WarningAmberIcon fontSize="small" /> &nbsp;High: Protection needed
          </span>
        );
      }
    return `Low to Moderate`;
  };
  
  // For debugging: you can add this line to see what URL is being used
  // console.log("Current Image URL:", imageUrl);

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "rgba(44, 83, 100, 0.35)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            color: "white",
          }}
        >
          <CardMedia sx={{ height: 140 }} image={imageUrl} title="weather image" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {icon}
            </Typography>
            <Typography variant="body2" component="div" sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Feels Like: {info.feelsLike}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
              <p>Max UV Index: {info.uvIndex} ({getUvAdvice()})</p>
              <p style={{ marginTop: '1rem' }}>
                The weather can be described as <i>{info.weather}</i>.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}