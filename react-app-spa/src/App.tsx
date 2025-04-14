import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";
import SearchPage from "./pages/Search";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}
