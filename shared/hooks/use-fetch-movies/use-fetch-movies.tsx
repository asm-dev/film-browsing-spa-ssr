import { useEffect, useState } from "react";
import { MoviesApiService } from "../../services/movies/movies-api-service";
import { MovieData } from "../../services/movies/movies-api-service.types";
import { UseMoviesResult } from "./use-fetch-movies.types";

export function useFetchMovies(api: MoviesApiService): UseMoviesResult {
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
