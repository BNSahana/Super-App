import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import GenrePage from "./pages/GenrePage/GenrePage";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/genre" element={<GenrePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
