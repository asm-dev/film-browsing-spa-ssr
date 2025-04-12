import { Container } from "@chakra-ui/react";
import MovieDetail from "shared/components/MovieDetail";
import { isMockEnabledServer } from "shared/mocks/mock-mode-server";
import { MOVIE_DATA_MOCK } from "shared/mocks/movie-data-mock";
import { MoviesApiService } from "shared/services/movies/movies-api-service";
import { MovieData } from "shared/services/movies/movies-api-service.types";

type PageProps = {
  params: {
    id: string;
  };
};
export default async function MovieDetailPage({ params }: PageProps) {
  const shouldUseMockData = await isMockEnabledServer();

  const { id } = await Promise.resolve(params);
  const movieId = Number(id);

  let movie: MovieData | undefined;

  if (shouldUseMockData) {
    movie = MOVIE_DATA_MOCK.find((m) => m.id === movieId);
    if (!movie) throw new Error("Película mock no encontrada");
  } else {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY!;
    const api = new MoviesApiService(apiKey);
    movie = await api.getMovieDetails(movieId);
  }

  return (
    <Container maxW="4xl" py={10}>
      <MovieDetail movie={movie} />
    </Container>
  );
}
