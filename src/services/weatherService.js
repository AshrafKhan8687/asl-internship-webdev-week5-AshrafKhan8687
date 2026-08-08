const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(city) {
  // Get city coordinates
  const geoResponse = await fetch(
    `${GEO_URL}?name=${city}&count=1&language=en&format=json`
  );

  const geoData = await geoResponse.json();

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error("City not found");
  }

  const location = geoData.results[0];

  // Get weather
  const weatherResponse = await fetch(
    `${WEATHER_URL}?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&forecast_days=5`
  );

  const weatherData = await weatherResponse.json();

  return {
    city: location.name,
    country: location.country,
    weather: weatherData,
  };
}