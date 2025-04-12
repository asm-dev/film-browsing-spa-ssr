import { Container } from "@chakra-ui/react";
import { cookies } from "next/headers";
import MovieDetail from "shared/components/MovieDetail";
import { MOVIE_DATA_MOCK } from "shared/mocks/movie-data-mock";
import { MoviesApiService } from "shared/services/movies/movies-api-service";
import { MovieData } from "shared/services/movies/movies-api-service.types";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function MovieDetailPage({ params }: PageProps) {
  const cookieStore = await cookies();
  const useMock = cookieStore.get("useMock")?.value === "true";

  let movie: MovieData;

  if (useMock) {
    const mockId = Number(params.id);
    movie = MOVIE_DATA_MOCK.find((m) => m.id === mockId)!;
    if (!movie) throw new Error("Película mock no encontrada");
  } else {
    const apiKey = process.env.TMDB_API_KEY!;
    const api = new MoviesApiService(apiKey);
    try {
      movie = await api.getMovieDetails(Number(params.id));
    } catch {
      throw new Error("No se pudo cargar la película.");
    }
  }

  return (
    <Container maxW="4xl" py={10}>
      <MovieDetail movie={movie} />
    </Container>
  );
}
