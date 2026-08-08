import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function Favorites() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div>
      <h1>⭐ Favorite Cities</h1>

      {favorites.length === 0 ? (
        <div
          className="card"
          style={{
            textAlign: "center",
            padding: "40px 20px",
          }}
        >
          <div style={{ fontSize: "50px", marginBottom: "15px" }}>
            ⭐
          </div>

          <h2 style={{ color: "#2563eb" }}>
            No Favorite Cities Yet
          </h2>

          <p style={{ color: "#64748b" }}>
            Search for a city and add it to your favorites.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {favorites.map((city) => (
            <div
              key={city}
              className="card"
              style={{
                textAlign: "center",
                padding: "25px 20px",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginBottom: "10px",
                }}
              >
                📍
              </div>

              <h2
                style={{
                  color: "#2563eb",
                  marginBottom: "15px",
                }}
              >
                {city}
              </h2>

              <button
                onClick={() => removeFavorite(city)}
                style={{
                  background:
                    "linear-gradient(135deg, #ef4444, #f87171)",
                  padding: "10px 18px",
                  borderRadius: "20px",
                  color: "white",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                🗑 Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;