import { useState } from "react";
import { getWeather } from "../services/weatherService";

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load recent searches from localStorage
  const [recentSearches, setRecentSearches] = useState(() => {
    return JSON.parse(localStorage.getItem("recentSearches")) || [];
  });

  async function searchWeather(city) {
    if (!city.trim()) return;

    try {
      setLoading(true);
      setError("");

      const data = await getWeather(city);

      setWeather(data);

      // Update recent searches
      setRecentSearches((prev) => {
        const updated = [
          city,
          ...prev.filter(
            (item) => item.toLowerCase() !== city.toLowerCase()
          ),
        ].slice(0, 5);

        localStorage.setItem(
          "recentSearches",
          JSON.stringify(updated)
        );

        return updated;
      });

      // Save last searched weather
      localStorage.setItem("lastWeather", JSON.stringify(data));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    weather,
    loading,
    error,
    searchWeather,
    recentSearches,
  };
}

export default useWeather;