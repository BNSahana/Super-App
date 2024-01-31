import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import { useState } from "react";

function App() {
  const [userRegistered, setUserRegistered] = useState(false);
  const [moviesGenreVisited, setMoviesGenreVisited] = useState(false);
  const [homeVisited, setHomeVisited] = useState(false);
 

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            userRegistered ? (
              <Navigate to="/genre" />
            ) : (
              <RegisterPage setUserRegistered={setUserRegistered} />
            )
          }
        />
        <Route
          path="/genre"
          element={
            !userRegistered ? (
              <Navigate to="/" />
            ) : !moviesGenreVisited ? (
              <GenrePage setMoviesGenreVisited={setMoviesGenreVisited} />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="/home"
          element={
            !moviesGenreVisited ? (
              <Navigate to="/genre" />
            ) : !homeVisited ? (
              <HomePage setHomeVisited={setHomeVisited} />
            ) : (
              <Navigate to="/movies" />
            )
          }
        />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
