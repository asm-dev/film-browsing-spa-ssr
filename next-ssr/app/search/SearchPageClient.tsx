"use client";

import {
  Link as ChakraLink,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import MovieCard from "shared/components/molecules/MovieCard";
import SearchBar from "shared/components/organisms/SearchBar";
import { MOVIE_DATA_MOCK } from "shared/mocks/movie-data-mock";
import { MoviesApiService } from "shared/services/movies/movies-api-service";
import { MovieData } from "shared/services/movies/movies-api-service.types";

type SearchPageClientProps = {
  query: string;
  useMock: boolean;
};

export default function SearchPageClient({
  query,
  useMock,
}: SearchPageClientProps) {
  const [results, setResults] = useState<MovieData[]>([]);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    if (!query.trim()) return;

    if (useMock) {
      const filtered = MOVIE_DATA_MOCK.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } else {
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY!;
      const api = new MoviesApiService(apiKey);

      api
        .searchMovies(query)
        .then((res) => setResults(res.results))
        .catch(() => setResults([]));
    }
  }, [query, useMock]);

  const handleSearch = (newQuery: string) => {
    if (!newQuery.trim()) return;
    router.push(`/search?query=${encodeURIComponent(newQuery)}`);
  };

  return (
    <Container maxW="6xl" py={10}>
      <VStack gap={6} align="stretch">
        <Heading size="xl" textAlign="center">
          {t("search.title")}
        </Heading>

        <SearchBar initialQuery={query} onSearch={handleSearch} />

        {query && results.length === 0 && (
          <Text textAlign="center" color="gray.500">
            {t("error.noSearchResults")}
          </Text>
        )}

        <SimpleGrid columns={[1, 2, 3, 5, 6]} gap={6}>
          {results.map((movie) => (
            <ChakraLink
              key={movie.id}
              as={Link}
              href={`/movie/${movie.id}`}
              _hover={{ textDecoration: "none" }}
              _focus={{ boxShadow: "none" }}
              display="block"
              w="full"
              maxW="100%"
            >
              <MovieCard movie={movie} />
            </ChakraLink>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
