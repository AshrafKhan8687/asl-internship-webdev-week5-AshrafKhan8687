function RecentSearches({ recentSearches, onSearch }) {
  return (
    <div className="card recent-searches">
      <h2
        style={{
          textAlign: "center",
          color: "#2563eb",
          marginBottom: "20px",
        }}
      >
        🕒 Recent Searches
      </h2>

      {recentSearches.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#777",
          }}
        >
          No recent searches yet.
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          {recentSearches.map((city) => (
            <button
              key={city}
              onClick={() => onSearch(city)}
              style={{
                background: "linear-gradient(135deg,#2563eb,#3b82f6)",
                color: "white",
                border: "none",
                borderRadius: "30px",
                padding: "12px 22px",
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
                boxShadow: "0 5px 12px rgba(0,0,0,.15)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.background =
                  "linear-gradient(135deg,#1d4ed8,#2563eb)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0px)";
                e.target.style.background =
                  "linear-gradient(135deg,#2563eb,#3b82f6)";
              }}
            >
              📍 {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentSearches;