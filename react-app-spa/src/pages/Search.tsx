import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useSearchParams } from "react-router-dom";
import DisableMockButton from "shared/components/atoms/DisableMockButton";
import MovieCard from "shared/components/molecules/MovieCard";
import ErrorFallback from "shared/components/organisms/ErrorFallback";
import { useMockErrorHandlers } from "shared/hooks/use-mock-error";
import { isMockEnabledClient } from "shared/mocks/mock-mode-client";
import { MOVIE_DATA_MOCK } from "shared/mocks/movie-data-mock";
import { MoviesApiService } from "shared/services/movies/movies-api-service";
import { MovieData } from "shared/services/movies/movies-api-service.types";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const [results, setResults] = useState<MovieData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [useMock, setUseMock] = useState(false);
  const [ready, setReady] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  const { handleReset, handleUseMock } = useMockErrorHandlers(
    setError,
    setRetryKey,
    setUseMock,
    setResults
  );

  useEffect(() => {
    const shouldUseMock = isMockEnabledClient();
    setUseMock(shouldUseMock);
    setReady(true);
  }, [retryKey]);

  useEffect(() => {
    if (!ready || !query.trim()) return;

    if (useMock) {
      const filtered = MOVIE_DATA_MOCK.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      return;
    }

    try {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY!;
      const api = new MoviesApiService(apiKey);

      api
        .searchMovies(query)
        .then((res) => setResults(res.results))
        .catch((err) => setError(err));
    } catch (err: any) {
      setError(err);
    }
  }, [query, useMock, ready, retryKey]);

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

  const { t } = useTranslation();

  return (
    <Container maxW="6xl" py={10}>
      <VStack align="stretch" gap={6}>
        <Heading size="lg">
          {t("search.resultsFor")}{" "}
          <Text as="span" color="blue.500">
            {query}
          </Text>
        </Heading>

        <SimpleGrid
          columns={[1, 2, 3, 4, 5, 6]}
          gap={6}
          px={{ base: 4, md: 0 }}
          justifyItems="center"
        >
          {results.map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <MovieCard key={movie.id} movie={movie} />
            </Link>
          ))}
        </SimpleGrid>
      </VStack>

      {useMock && <DisableMockButton />}
    </Container>
  );
}
