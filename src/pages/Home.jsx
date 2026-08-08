import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import Forecast from "../components/Forecast";
import RecentSearches from "../components/RecentSearches";
import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import useWeather from "../hooks/useWeather";

function Home() {
  const {
    weather,
    loading,
    error,
    searchWeather,
    recentSearches,
  } = useWeather();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Weather Dashboard</h1>

      <SearchBar onSearch={searchWeather} />

      <RecentSearches
      recentSearches={recentSearches}
        onSearch={searchWeather}
      />

      {loading && <Loading />}

      {error && <ErrorMessage message={error} />}

      {weather && (
        <>
          <WeatherCard weather={weather} />
          <Forecast weather={weather} />
        </>
      )}
    </div>
  );
}

export default Home;