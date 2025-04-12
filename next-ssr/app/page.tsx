"use client";

import { Container, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import DisableMockButton from "shared/components/DisableMockButton";
import ErrorFallback from "shared/components/ErrorFallback";
import MovieCard from "shared/components/MovieCard";
import {
  enableMockClient,
  isMockEnabledClient,
} from "shared/mocks/mock-mode-client";
import { MOVIE_DATA_MOCK } from "shared/mocks/movie-data-mock";
import { MoviesApiService } from "shared/services/movies/movies-api-service";
import { MovieData } from "shared/services/movies/movies-api-service.types";

export default function HomePage() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [useMock, setUseMock] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    if (isMockEnabledClient()) {
      setUseMock(true);
    }
  }, []);

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

  const handleReset = () => {
    setError(null);
    setRetryKey((key) => key + 1);
  };

  const handleUseMock = () => {
    enableMockClient();
    setError(null);
    setUseMock(true);
  };

  if (error) {
    return (
      <>
        <ErrorFallback
          error={error}
          reset={handleReset}
          useMock={handleUseMock}
        />
        {useMock && <DisableMockButton />}
      </>
    );
  }

  return (
    <Container maxW="6xl" py={10}>
      <VStack gap={6} align="stretch">
        <Heading size="xl" textAlign="center" mb={4}>
          Películas populares
        </Heading>

        <SimpleGrid columns={[1, 2, 3]} gap={6}>
          {movies.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </SimpleGrid>
      </VStack>

      {useMock && <DisableMockButton />}
    </Container>
  );
}
