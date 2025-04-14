import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "shared/components/MovieCard";
import { MoviesApiService } from "shared/services/movies/movies-api-service";
import { MovieData } from "shared/services/movies/movies-api-service.types";
import SearchBarWithNavigate from "../components/SearchBarWithNavigate";

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [results, setResults] = useState<MovieData[]>([]);

  useEffect(() => {
    if (!query) return;

    const apiKey = process.env.REACT_APP_TMDB_API_KEY!;
    const api = new MoviesApiService(apiKey);
    api.searchMovies(query).then((res) => setResults(res.results));
  }, [query]);

  return (
    <Container maxW="6xl" py={10}>
      <VStack gap={6} align="stretch">
        <Heading size="xl" textAlign="center" mb={4}>
          Resultados para: "{query}"
        </Heading>

        <SearchBarWithNavigate />

        {results.length === 0 ? (
          <Text>No se encontraron resultados.</Text>
        ) : (
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            {results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Container>
  );
}
