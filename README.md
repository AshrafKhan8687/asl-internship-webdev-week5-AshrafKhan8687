# React Weather Dashboard v6

A responsive React Weather Dashboard developed as the final capstone project for the Advance Soft Logics Web Development Internship — Web Development Track.

The application allows users to search for cities, view current weather conditions and forecasts, save favorite cities, view detailed weather information, and navigate between different pages using React Router.

## Live Application

**Live Demo:**  
https://asl-internship-webdev-week5-ashraf.vercel.app

---

## Features

- Search weather information by city name
- Display current temperature and weather conditions
- Display wind information
- Display a 5-day weather forecast
- View recent searches
- Add cities to favorites
- Remove cities from favorites
- Persistent favorite cities using `localStorage`
- Weather details page
- Dynamic routing with React Router
- Home, Favorites, Details, and Not Found pages
- Loading states during data fetching
- Friendly error messages for invalid cities
- Responsive layout for desktop and mobile screens
- Production deployment using Vercel

---

## Technologies Used

- React
- JavaScript
- JSX
- CSS
- React Router
- Context API
- `useReducer`
- Custom React Hooks
- Open-Meteo API
- Vite
- Git
- GitHub
- Vercel

---

## Weather API

This project uses the **Open-Meteo API** to retrieve weather and location data.

The application uses:

- Open-Meteo Geocoding API for searching cities
- Open-Meteo Forecast API for weather and forecast information

No API key is required.

---

## State Management and Persistence

The application uses React Context API and `useReducer` to manage shared application state.

Favorite cities are persisted using the browser's `localStorage`.

This means that when a user adds a city to their favorites, the favorite information remains available even after refreshing or reopening the application in the same browser.

---

## Project Architecture

The project is organized into reusable components, pages, hooks, and services.

### Components

Reusable interface components include:

- `Navbar`
- `SearchBar`
- `WeatherCard`
- `Forecast`
- `Loading`
- `ErrorMessage`
- `RecentSearches`

### Pages

The application contains the following pages:

- `Home`
- `Details`
- `Favorites`
- `NotFound`

### Custom Hooks

`useWeather.js` is used to handle weather-related data fetching and state used by the application.

### Services

`weatherService.js` handles communication with the Open-Meteo APIs.

### Global State

The application uses Context API and `useReducer` for managing shared favorites/global state.

### Persistence

Browser `localStorage` is used to persist favorite cities between sessions and page refreshes.

---

## Project Structure

```text
src/
│
├── hooks/
│   └── useWeather.js
│
├── pages/
│   ├── Home.jsx
│   ├── Details.jsx
│   ├── Favorites.jsx
│   └── NotFound.jsx
│
├── services/
│   └── weatherService.js
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│   ├── Forecast.jsx
│   ├── Loading.jsx
│   ├── ErrorMessage.jsx
│   └── RecentSearches.jsx
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Routing

React Router is used for client-side navigation.

The application includes routes for:

- Home
- Weather Details
- Favorites
- Not Found

Dynamic routes are used to display weather details for selected cities.

The Vercel deployment is configured to redirect application routes to `index.html`, allowing direct visits and page refreshes on client-side routes.

---

## Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/AshrafKhan8687/asl-internship-webdev-week5-AshrafKhan8687.git
```

### 2. Navigate to the project directory

```bash
cd asl-internship-webdev-week5-AshrafKhan8687
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## Production Build

The project can be built for production using:

```bash
npm run build
```

Vite creates an optimized production version of the application inside the `dist` directory.

The production build was tested successfully before deployment.

---

## Deployment

The final application is deployed using **Vercel**.

The deployment process includes:

1. Building the React application for production.
2. Connecting the project with the GitHub repository.
3. Configuring client-side routing.
4. Deploying the production build to Vercel.
5. Testing the live application.

### Production URL

https://asl-internship-webdev-week5-ashraf.vercel.app

---

## Final Testing and QA

The deployed application was tested on the live production URL.

The following functionality was verified:

- City search
- Current weather information
- Weather forecast
- Recent searches
- Favorites
- Persistent favorites
- Weather details
- Navigation between pages
- Dynamic routes
- Invalid city handling
- Loading states
- Page refresh
- Client-side routing
- Production deployment
- Responsive layout

The application was verified to work correctly in the browser after deployment.

---

## Error Handling

The application provides user-friendly feedback when weather data cannot be retrieved or when an invalid city is searched.

Loading states are displayed while data is being fetched, and users receive a clear error message instead of being exposed to technical errors or application stack traces.

---

## Responsive Design

The dashboard is designed to work across different screen sizes, including:

- Desktop
- Tablet
- Mobile

The layout and interface were checked during the final QA process to ensure the application remains usable on smaller screens.

---

## Version

**Final Release:** `v6.0.0`

---

## Advance Soft Logics Internship

**Program:** Remote Internship Program  
**Track:** Web Development Track  
**Week:** Week 6 — Capstone / Final Week  
**Project:** React Weather Dashboard

This project represents the final release of the React Weather Dashboard developed throughout Weeks 1–6 of the internship.

---

## Future Improvements

Possible future improvements include:

- More detailed weather information
- Weather charts and visualizations
- Additional weather metrics
- Improved accessibility
- Progressive Web App support
- Performance optimization
- Automated CI/CD deployment
- Custom domain support
- Additional weather-related features

---

## Author

**Ashraf Khan**

React Weather Dashboard — Advance Soft Logics Web Development Internship