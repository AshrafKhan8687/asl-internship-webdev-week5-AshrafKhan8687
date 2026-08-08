import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            padding: "10px 18px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            color: isActive ? "white" : "#2563eb",
            background: isActive ? "#2563eb" : "transparent",
            transition: "0.3s",
          })}
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/favorites"
          style={({ isActive }) => ({
            padding: "10px 18px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            color: isActive ? "white" : "#2563eb",
            background: isActive ? "#2563eb" : "transparent",
            transition: "0.3s",
          })}
        >
          ⭐ Favorites
        </NavLink>

        <NavLink
          to="/details/1"
          style={({ isActive }) => ({
            padding: "10px 18px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            color: isActive ? "white" : "#2563eb",
            background: isActive ? "#2563eb" : "transparent",
            transition: "0.3s",
          })}
        >
          📍 Details
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;