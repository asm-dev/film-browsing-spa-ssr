"use client";

import {
  Link as ChakraLink,
  Container,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMockErrorHandlers } from "../../hooks/use-mock-error";
import { isMockEnabledClient } from "../../mocks/mock-mode-client";
import { MOVIE_DATA_MOCK } from "../../mocks/movie-data-mock";
import { MoviesApiService } from "../../services/movies/movies-api-service";
import { MovieData } from "../../services/movies/movies-api-service.types";
import DisableMockButton from "../atoms/DisableMockButton";
import MovieCard from "../molecules/MovieCard";
import ErrorFallback from "../organisms/ErrorFallback";

type HomeProps = {
  apiKey: string;
  LinkComponent: React.ElementType;
  linkPropName: "href" | "to";
  SearchBarComponent: React.ElementType;
};

export default function Home({
  apiKey,
  LinkComponent,
  linkPropName,
  SearchBarComponent,
}: HomeProps) {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [useMock, setUseMock] = useState(false);
  const [ready, setReady] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const { handleReset, handleUseMock } = useMockErrorHandlers(
    setError,
    setRetryKey,
    setUseMock,
    setMovies
  );

  useEffect(() => {
    const shouldUseMock = isMockEnabledClient();
    setUseMock(shouldUseMock);
    if (shouldUseMock) setMovies(MOVIE_DATA_MOCK);
    setReady(true);
  }, [retryKey]);

  useEffect(() => {
    if (ready && !useMock) {
      const api = new MoviesApiService(apiKey);
      api
        .getPopularMovies()
        .then((res) => setMovies(res.results))
        .catch((err) => setError(err));
    }
  }, [useMock, retryKey, ready, apiKey]);

  if (error) {
    return (
      <>
        <ErrorFallback
          error={error}
          reset={handleReset}
          onUseMock={handleUseMock}
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

        <SearchBarComponent />

        <SimpleGrid
          columns={[1, 2, 3, 4, 5]}
          gap={6}
          px={{ base: 4, md: 0 }}
          justifyItems="center"
        >
          {movies.map((movie) => (
            <ChakraLink
              key={movie.id}
              as={LinkComponent}
              {...{ [linkPropName]: `/movie/${movie.id}` }}
              w="full"
              display="block"
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
