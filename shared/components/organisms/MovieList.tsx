import { SimpleGrid, Text } from "@chakra-ui/react";
import { MovieData } from "../../services/movies/movies-api-service.types";
import MovieCard from "../molecules/MovieCard";

export default function MovieList({ movieList }: { movieList: MovieData[] }) {
  if (!movieList?.length) {
    return <Text>No hay películas disponibles.</Text>;
  }

  return (
    <SimpleGrid columns={[1, 2, 3]} gap={6}>
      {movieList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </SimpleGrid>
  );
}
