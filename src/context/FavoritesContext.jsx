import { createContext, useReducer, useEffect } from "react";

export const FavoritesContext = createContext();

const initialState = {
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
};

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (city) => city !== action.payload
        ),
      };

    default:
      return state;
  }
}

export function FavoritesProvider({ children }) {
  const [state, dispatch] = useReducer(
    favoritesReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(state.favorites)
    );
  }, [state.favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites: state.favorites,
        dispatch,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}