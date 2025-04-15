import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { MovieData } from "shared/services/movies/movies-api-service.types";

export default function MovieDetail({ movie }: { movie: MovieData }) {
  return (
    <VStack gap={6} align="start">
      <Heading>{movie.title}</Heading>
      {movie.poster_path && (
        <Image
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          borderRadius="md"
        />
      )}
      <Text color="gray.600">{movie.overview}</Text>
      <Text fontWeight="bold">Puntuación: {movie.vote_average}</Text>
      <Text>Fecha de estreno: {movie.release_date}</Text>
      <Text>ID TMDb: {movie.id}</Text>
    </VStack>
  );
}
