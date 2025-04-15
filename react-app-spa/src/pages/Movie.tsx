import { Container, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import MovieDetail from "shared/components/organisms/MovieDetail";
import { isMockEnabledClient } from "shared/mocks/mock-mode-client";
import { MOVIE_DATA_MOCK } from "shared/mocks/movie-data-mock";
import { MoviesApiService } from "shared/services/movies/movies-api-service";
import { MovieData } from "shared/services/movies/movies-api-service.types";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieData | null>(null);

  useEffect(() => {
    if (!id) return;

    if (isMockEnabledClient()) {
      const mockMovie = MOVIE_DATA_MOCK.find((m) => m.id === Number(id));
      if (mockMovie) setMovie(mockMovie);
    } else {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY!;
      const api = new MoviesApiService(apiKey);
      api.getMovieDetails(Number(id)).then(setMovie);
    }
  }, [id]);

  const { t } = useTranslation();

  if (!movie) {
    return (
      <Container maxW="4xl" py={10}>
        <Text>{t("error.movieNotFound")}</Text>
      </Container>
    );
  }

  return (
    <Container maxW="4xl" py={10}>
      <MovieDetail movie={movie} />
    </Container>
  );
}
