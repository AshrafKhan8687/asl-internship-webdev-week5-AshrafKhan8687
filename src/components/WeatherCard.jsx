import FavoriteButton from "./FavoriteButton";

function WeatherCard({ weather }) {
  if (!weather) return null;

  const current = weather.weather.current;

  return (
    <div
      className="card"
      style={{
        background: "linear-gradient(135deg, #3b82f6, #60a5fa)",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "28px",
        }}
      >
        🌤 Current Weather
      </h2>

      <h3
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "24px",
        }}
      >
        📍 {weather.city}, {weather.country}
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            padding: "15px",
            borderRadius: "12px",
          }}
        >
          <h4>🌡 Temperature</h4>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            {current.temperature_2m}°C
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            padding: "15px",
            borderRadius: "12px",
          }}
        >
          <h4>💨 Wind Speed</h4>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            {current.wind_speed_10m} km/h
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            padding: "15px",
            borderRadius: "12px",
          }}
        >
          <h4>🕒 Time</h4>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginTop: "8px",
            }}
          >
            {current.time}
          </p>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.2)",
            padding: "15px",
            borderRadius: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FavoriteButton city={weather.city} />
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;