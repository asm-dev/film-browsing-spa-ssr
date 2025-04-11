"use client";

import { useEffect, useState } from "react";
import ErrorFallback from "shared/components/ErrorFallback";
import MovieList from "shared/components/MovieList";
import { MOVIE_DATA_MOCK } from "shared/mocks/movie-data-mock";
import { MoviesApiService } from "shared/services/movies/movies-api-service";
import { MovieData } from "shared/services/movies/movies-api-service.types";

export default function HomePage() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [useMock, setUseMock] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    if (useMock) {
      setMovies(MOVIE_DATA_MOCK);
      return;
    }

    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY!;
    const api = new MoviesApiService(apiKey);

    api
      .getPopularMovies()
      .then((res) => setMovies(res.results))
      .catch((err) => setError(err));
  }, [useMock, retryKey]);

  if (error) {
    return (
      <ErrorFallback
        error={error}
        reset={() => {
          setError(null);
          setRetryKey((key) => key + 1);
        }}
        useMock={() => {
          setError(null);
          setUseMock(true);
        }}
      />
    );
  }

  return (
    <main>
      <h1>Películas populares</h1>
      <MovieList movieList={movies} />
    </main>
  );
}
