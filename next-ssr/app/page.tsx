"use client";

import {
  Link as ChakraLink,
  Container,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
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
import SearchBarWithRouter from "../components/SearchBarWithRouter";

export default function HomePage() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [useMock, setUseMock] = useState(false);
  const [ready, setReady] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const shouldUseMock = isMockEnabledClient();
    setUseMock(shouldUseMock);

    if (shouldUseMock) {
      setMovies(MOVIE_DATA_MOCK);
    }

    setReady(true);
  }, [retryKey]);

  useEffect(() => {
    if (ready && !useMock) {
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY!;
      const api = new MoviesApiService(apiKey);

      api
        .getPopularMovies()
        .then((res) => setMovies(res.results))
        .catch((err) => setError(err));
    }
  }, [useMock, retryKey, ready]);

  const handleReset = () => {
    setError(null);
    setRetryKey((key) => key + 1);
  };

  const handleUseMock = () => {
    enableMockClient();
    setError(null);
    setUseMock(true);
    setMovies(MOVIE_DATA_MOCK);
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
        <SearchBarWithRouter placeholder="Buscar películas..." />
        <SimpleGrid
          columns={[1, 2, 3, 4, 5]}
          gap={6}
          px={{ base: 4, md: 0 }}
          justifyItems="center"
        >
          {movies.map((movie) => (
            <ChakraLink
              w="full"
              display="block"
              as={Link}
              href={`/movie/${movie.id}`}
              key={movie.id}
              maxW={{ base: "100%" }}
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
            >
              <MovieCard movie={movie} />
            </ChakraLink>
          ))}
        </SimpleGrid>
      </VStack>

      {useMock && <DisableMockButton />}
    </Container>
  );
}
