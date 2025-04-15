import { SimpleGrid, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MovieData } from "../../services/movies/movies-api-service.types";
import MovieCard from "../molecules/MovieCard";

export default function MovieList({ movieList }: { movieList: MovieData[] }) {
  const { t } = useTranslation();

  if (!movieList?.length) {
    return <Text>{t("home.noMovies")}</Text>;
  }

  return (
    <SimpleGrid columns={[1, 2, 3]} gap={6}>
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
}
