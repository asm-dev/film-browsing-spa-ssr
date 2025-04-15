import { Route, Routes } from "react-router-dom";
import { enableMockClient } from "shared/mocks/mock-mode-client";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";
import SearchPage from "./pages/Search";

export default function App() {
  return (
    <ErrorBoundary
      onUseMock={() => {
        enableMockClient();
        window.location.reload();
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </ErrorBoundary>
  );
}
