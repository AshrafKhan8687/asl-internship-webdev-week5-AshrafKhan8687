import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function FavoriteButton({ city }) {
  const { favorites, dispatch } = useContext(FavoritesContext);

  const isFavorite = favorites.includes(city);

  function toggleFavorite() {
    if (isFavorite) {
      dispatch({
        type: "REMOVE_FAVORITE",
        payload: city,
      });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: city,
      });
    }
  }

  return (
    <button onClick={toggleFavorite}>
      {isFavorite
        ? "Remove Favorite"
        : "Add Favorite"}
    </button>
  );
}

export default FavoriteButton;