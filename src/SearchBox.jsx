// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useState } from "react";

// import "./SearchBox.css";

// export default function SearchBox({ updateInfo }) {
//   let [city, setCity] = useState("");
//   let [error, setError] = useState(false);
//   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
//   const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
//   let getWeatherInfo = async () => {
//     // eslint-disable-next-line no-useless-catch
//     try {
//       let response = await fetch(
//         `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
//       );
//       let jsonResponse = await response.json();
//       console.log(jsonResponse);
//       let result = {
//         city: city,
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity,
//         feelsLike: jsonResponse.main.feels_like,
//         weather: jsonResponse.weather[0].description,
//       };
//       console.log(result);
//       return result;
//     } catch (err) {
//       throw err;
//     }
//   };

//   let handleChange = (evt) => {
//     setCity(evt.target.value);
//   };

//   let handleSubmit = async (evt) => {
//     try {
//       evt.preventDefault();
//       console.log(city);
//       setCity("");
//       let newInfo = await getWeatherInfo();
//       updateInfo(newInfo);
//     } catch (err) {
//       setError(true);
//     }
//   };
//   return (
//     <div className="SearchBox">
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="City Name"
//           variant="outlined"
//           required
//           value={city}
//           onChange={handleChange}
//         />
//         <br /> <br />
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//         {error && <p style={{ color: "red" }}>No such place found</p>}
//       </form>
//     </div>
//   );
// }

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

// Helper function to map WMO weather codes to descriptions
// You can expand this with more codes from the Open-Meteo documentation
const getWeatherDescription = (code) => {
  const codes = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    95: "Thunderstorm",
  };
  return codes[code] || "Unknown weather";
};

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  // Open-Meteo does not require an API key for basic use
  const GEOCODING_API_URL = "https://geocoding-api.open-meteo.com/v1/search";
  const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

  let getWeatherInfo = async () => {
    try {
      // 1. Geocoding: Get coordinates for the city
      const geoResponse = await fetch(
        `${GEOCODING_API_URL}?name=${city}&count=1&language=en&format=json`
      );
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const location = geoData.results[0];
      const { latitude, longitude, name: cityName } = location;

      // 2. Weather Forecast: Get weather for the coordinates
      const weatherResponse = await fetch(
        `${WEATHER_API_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code&daily=temperature_2m_max,temperature_2m_min,uv_index_max&timezone=auto`
      );
      const weatherData = await weatherResponse.json();

      // 3. Structure the result object
      let result = {
        city: cityName,
        temp: weatherData.current.temperature_2m,
        tempMin: weatherData.daily.temperature_2m_min[0], // Today's min temp
        tempMax: weatherData.daily.temperature_2m_max[0], // Today's max temp
        humidity: weatherData.current.relative_humidity_2m,
        feelsLike: weatherData.current.apparent_temperature,
        weather: getWeatherDescription(weatherData.current.weather_code),
        uvIndex: weatherData.daily.uv_index_max[0], // Today's max UV Index
      };

      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
      // Re-throw the error to be caught by handleSubmit
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(city);
    // Reset error state on new submission
    setError(false);
    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setCity(""); // Clear input on success
    } catch (err) {
      setError(true);
      setCity(""); // Also clear input on error
    }
  };

  return (
    <div className="SearchBox">
      <h4>Search for City</h4>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && (
          <p style={{ color: "red" }}>No such place found in our database.</p>
        )}
      </form>
    </div>
  );
}
