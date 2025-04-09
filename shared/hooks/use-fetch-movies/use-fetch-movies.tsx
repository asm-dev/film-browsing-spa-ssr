import { useEffect, useState } from "react";
import { TMDB_API_KEY } from "../../config/tmdb.config";
import { MoviesApiService } from "../../services/movies-service/movies-api-service";
import { MovieData } from "../../services/movies-service/movies-api-service.types";

const api = new MoviesApiService(TMDB_API_KEY);

export function useFetchMovies() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getPopularMovies()
      .then((res) => {
        setMovies(res.results);
      })
      .catch((err) => {
        setError(err.message || "Error al cargar películas");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { movies, loading, error };
}
