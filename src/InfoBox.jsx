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
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";

// // Import icons
// import SunnyIcon from "@mui/icons-material/WbSunny";
// import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import CloudIcon from "@mui/icons-material/Cloud";
// import WarningAmberIcon from "@mui/icons-material/WarningAmber";

// import "./InfoBox.css";

// export default function InfoBox({ info }) {
//   // Guard Clause: If we don't have weather info yet, don't render anything.
//   if (!info.city) {
//     return null;
//   }

//   // --- Image URLs ---
//   const HOT_URL =
//     "https://www.aprilaire.com/blog/wp-content/uploads/2022/08/Hazy-Skies-scaled.webp";
//   const RAIN_URL =
//     "https://media.istockphoto.com/id/503284599/photo/rainy-weather.jpg?s=612x612&w=0&k=20&c=pV38CVp0CLArYEZ6OUWnaqo6J5mo4JpbEZd61Vxr_I4=";
//   const COLD_URL =
//     "https://www.climaterealityproject.org/sites/default/files/styles/intro_title_impact_small_never_crop/public/adam-chang-iwenq-4jhqo-unsplash.jpg?itok=hYswWfUO";
//   const CLOUDY_URL =
//     "https://t3.ftcdn.net/jpg/03/10/45/78/360_F_310457894_HIpFBaxSQxiptoVgx0y1o4ZGXyH92YO9.jpg";

//   const getWeatherVisuals = () => {
//     const weather = info.weather.toLowerCase();
//     if (
//       weather.includes("rain") ||
//       weather.includes("drizzle") ||
//       weather.includes("thunderstorm")
//     ) {
//       return { imageUrl: RAIN_URL, icon: <ThunderstormIcon /> };
//     }
//     if (weather.includes("clear") || weather.includes("sunny")) {
//       return { imageUrl: HOT_URL, icon: <SunnyIcon /> };
//     }
//     if (
//       weather.includes("cloud") ||
//       weather.includes("overcast") ||
//       weather.includes("fog")
//     ) {
//       return { imageUrl: CLOUDY_URL, icon: <CloudIcon /> };
//     }
//     if (info.temp < 10) {
//       return { imageUrl: COLD_URL, icon: <AcUnitIcon /> };
//     }
//     return { imageUrl: HOT_URL, icon: <SunnyIcon /> };
//   };

//   // This function now returns a style object instead of a JSX element
//   const getUvAdvice = () => {
//     const uv = info.uvIndex;
//     const warningIcon = (
//       <WarningAmberIcon
//         sx={{ fontSize: "1rem", verticalAlign: "middle", marginRight: "4px" }}
//       />
//     );

//     if (uv >= 11) {
//       return {
//         category: "Extreme",
//         message: "Take all precautions; skin can burn in minutes.",
//         backgroundColor: "#e040fb", // Magenta
//         textColor: "#fff",
//         icon: warningIcon,
//       };
//     }
//     if (uv >= 8) {
//       return {
//         category: "Very High",
//         message: "Extra protection required; avoid midday sun.",
//         backgroundColor: "#ff5252", // Red
//         textColor: "#fff",
//         icon: warningIcon,
//       };
//     }
//     if (uv >= 6) {
//       return {
//         category: "High",
//         message: "Protection needed; cover up and use sunscreen.",
//         backgroundColor: "#ffab40", // Orange
//         textColor: "#000",
//         icon: warningIcon,
//       };
//     }
//     if (uv >= 3) {
//       return {
//         category: "Moderate",
//         message: "Take precautions, especially near midday.",
//         backgroundColor: "#ffd740", // Yellow
//         textColor: "#000",
//         icon: null,
//       };
//     }
//     return {
//       category: "Low",
//       message: "No protection needed for most; wear sunglasses.",
//       backgroundColor: "#69f0ae", // Green
//       textColor: "#000",
//       icon: null,
//     };
//   };

//   const { imageUrl, icon } = getWeatherVisuals();
//   const uvAdvice = getUvAdvice();

//   return (
//     <div className="InfoBox">
//       <div className="cardContainer">
//         <Card
//           sx={{
//             maxWidth: 345,
//             backgroundColor: "rgba(44, 83, 100, 0.35)",
//             backdropFilter: "blur(5px)",
//             border: "1px solid rgba(255, 255, 255, 0.18)",
//             borderRadius: "16px",
//             boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
//             color: "white",
//           }}
//         >
//           <CardMedia
//             sx={{ height: 140 }}
//             image={imageUrl}
//             title="weather image"
//           />
          
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {info.city} {icon}
//             </Typography>
//             <Typography
//               variant="body2"
//               component="div"
//               sx={{ color: "rgba(255, 255, 255, 0.9)" }}
//             >
//               <p>Temperature: {info.temp}&deg;C</p>
//               <p>Feels Like: {info.feelsLike}&deg;C</p>
//               <p>Humidity: {info.humidity}%</p>
//               <p>Min Temp: {info.tempMin}&deg;C</p>
//               <p>Max Temp: {info.tempMax}&deg;C</p>

//               {/* UV INDEX and the new ADVICE BOX */}
//               <p>Max UV Index: {info.uvIndex}</p>
//               <div
//                 style={{
//                   backgroundColor: uvAdvice.backgroundColor,
//                   color: uvAdvice.textColor,
//                   borderRadius: "8px",
//                   padding: "10px",
//                   marginTop: "8px",
//                   textAlign: "center",
//                 }}
//               >
//                 <div style={{ fontWeight: "bold" }}>
//                   {uvAdvice.icon}
//                   {uvAdvice.category}
//                 </div>
//                 <div style={{ fontSize: "0.8rem", marginTop: "4px" }}>
//                   {uvAdvice.message}
//                 </div>
//               </div>

//               <p style={{ marginTop: "1rem" }}>
//                 The weather can be described as <i>{info.weather}</i>.
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
import Chip from "@mui/material/Chip"; // 1. IMPORT CHIP

// Import icons
import SunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

import "./InfoBox.css";

export default function InfoBox({ info }) {
  if (!info.city) {
    return null;
  }

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
    if (info.temp < 10) {
      return { imageUrl: COLD_URL, icon: <AcUnitIcon /> };
    }
    return { imageUrl: HOT_URL, icon: <SunnyIcon /> };
  };

  const getUvAdvice = () => {
    const uv = info.uvIndex;
    const warningIcon = <WarningAmberIcon sx={{ fontSize: "1rem", verticalAlign: "middle", marginRight: "4px" }} />;

    // 2. CLARIFY UV CATEGORY TEXT
    if (uv >= 11) {
      return { category: "Extreme Exposure", message: "Take all precautions; skin can burn in minutes.", backgroundColor: "#e040fb", textColor: "#fff", icon: warningIcon };
    }
    if (uv >= 8) {
      return { category: "Very High Exposure", message: "Extra protection required; avoid midday sun.", backgroundColor: "#ff5252", textColor: "#fff", icon: warningIcon };
    }
    if (uv >= 6) {
      return { category: "High Exposure", message: "Protection needed; cover up and use sunscreen.", backgroundColor: "#ffab40", textColor: "#000", icon: warningIcon };
    }
    if (uv >= 3) {
      return { category: "Moderate Exposure", message: "Take precautions, especially near midday.", backgroundColor: "#ffd740", textColor: "#000", icon: null };
    }
    return { category: "Low Exposure", message: "No protection needed for most; wear sunglasses.", backgroundColor: "#69f0ae", textColor: "#000", icon: null };
  };

  const { imageUrl, icon } = getWeatherVisuals();
  const uvAdvice = getUvAdvice();

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
            {/* 3. CITY NAME AND WEATHER CHIP */}
            <div>
              <Typography gutterBottom variant="h5" component="span">
                {info.city} {icon}
              </Typography>
              <Chip
                label={info.weather}
                size="small"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  marginLeft: "10px",
                  verticalAlign: "middle",
                }}
              />
            </div>
            
            <Typography
              variant="body2"
              component="div"
              sx={{ color: "rgba(255, 255, 255, 0.9)", mt: 2 }} // Added margin-top for spacing
            >
              <p>Temperature: {info.temp}&deg;C</p>
              <p>Feels Like: {info.feelsLike}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Min Temp: {info.tempMin}&deg;C</p>
              <p>Max Temp: {info.tempMax}&deg;C</p>
            </Typography>

            {/* 4. RESTRUCTURED UV SECTION */}
            <div style={{ marginTop: "16px" }}>
              <Typography variant="body2" component="p" sx={{ fontWeight: 'bold' }}>
                Max UV Index: {info.uvIndex}
              </Typography>
              <div
                style={{
                  backgroundColor: uvAdvice.backgroundColor,
                  color: uvAdvice.textColor,
                  borderRadius: "8px",
                  padding: "10px",
                  marginTop: "8px",
                }}
              >
                <div style={{ fontWeight: "bold" }}>
                  {uvAdvice.icon}
                  {uvAdvice.category}
                </div>
                {/* 5. ADDED CUSTOM FONT */}
                <div style={{ 
                  fontSize: "0.8rem", 
                  marginTop: "4px",
                  fontFamily: "'Roboto', sans-serif" 
                }}>
                  {uvAdvice.message}
                </div>
              </div>
            </div>

            {/* 6. REMOVED OLD WEATHER DESCRIPTION FROM HERE */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}