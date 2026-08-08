import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (city.trim() === "") return;

    onSearch(city);
    setCity("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        marginBottom: "30px",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search any city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{
          width: "380px",
          padding: "14px 18px",
          borderRadius: "30px",
          border: "2px solid #3b82f6",
          outline: "none",
          fontSize: "16px",
          background: "white",
          boxShadow: "0 6px 15px rgba(0,0,0,.08)",
        }}
      />

      <button
        type="submit"
        style={{
          padding: "14px 28px",
          border: "none",
          borderRadius: "30px",
          background: "linear-gradient(135deg,#2563eb,#3b82f6)",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 6px 15px rgba(0,0,0,.15)",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = "translateY(-3px)";
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = "translateY(0)";
        }}
      >
        🔎 Search
      </button>
    </form>
  );
}

export default SearchBar;