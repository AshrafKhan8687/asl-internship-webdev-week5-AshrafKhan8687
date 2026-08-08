function Forecast({ weather }) {
  if (!weather) return null;

  const daily = weather.weather.daily;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="card">
      <h2
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "25px",
        }}
      >
        📅 5-Day Weather Forecast
      </h2>

      {daily.time.map((date, index) => {
        const dayName = days[new Date(date).getDay()];

        return (
          <div className="forecast-card" key={date}>
            <div>
              <h3
                style={{
                  color: "#2563eb",
                  marginBottom: "5px",
                }}
              >
                ☀ {dayName}
              </h3>

              <small
                style={{
                  color: "#777",
                }}
              >
                {date}
              </small>
            </div>

            <div
              style={{
                display: "flex",
                gap: "30px",
                fontWeight: "bold",
              }}
            >
              <span
                style={{
                  color: "#e11d48",
                }}
              >
                🌡 {daily.temperature_2m_max[index]}°C
              </span>

              <span
                style={{
                  color: "#2563eb",
                }}
              >
                ❄ {daily.temperature_2m_min[index]}°C
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Forecast;