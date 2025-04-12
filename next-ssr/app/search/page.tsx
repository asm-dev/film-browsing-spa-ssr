import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import MovieList from "shared/components/MovieList";
import SearchBar from "shared/components/SearchBar";
import { isMockEnabledServer } from "shared/mocks/mock-mode-server";
import { MOVIE_DATA_MOCK } from "shared/mocks/movie-data-mock";
import { MoviesApiService } from "shared/services/movies/movies-api-service";
import { MovieData } from "shared/services/movies/movies-api-service.types";

type SearchPageProps = {
  searchParams: {
    query?: string;
  };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.query?.trim() || "";

  if (!query) {
    return redirect("/");
  }

  const useMock = await isMockEnabledServer();
  let movies: MovieData[] = [];

  if (useMock) {
    movies = MOVIE_DATA_MOCK.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  } else {
    try {
      const api = new MoviesApiService(process.env.TMDB_API_KEY!);
      const res = await api.searchMovies(query);
      movies = res.results;
    } catch (error) {
      return (
        <Container maxW="6xl" py={10}>
          <Text color="red.500">No se pudieron cargar los resultados.</Text>
        </Container>
      );
    }
  }

  return (
    <Container maxW="6xl" py={10}>
      <VStack gap={6} align="stretch">
        <SearchBar
          initialQuery={query}
          onSearch={(q) => {
            if (typeof window !== "undefined") {
              window.location.href = `/search?query=${encodeURIComponent(q)}`;
            }
          }}
        />

        <Heading size="lg" textAlign="center">
          Resultados para: <em>{query}</em>
        </Heading>

        <MovieList movieList={movies} />
      </VStack>
    </Container>
  );
}
