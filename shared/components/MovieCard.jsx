import { Box, Image, Text, VStack } from "@chakra-ui/react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w185";

export default function MovieCard({ movie }) {
  return (
    <Box borderWidth={1} borderRadius="lg" overflow="hidden" p={4}>
      {movie.poster_path ? (
        <Image
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          borderRadius="md"
        />
      ) : (
        <Box bg="gray.100" p={4}>
          <Text>La película no dispone de imagen disponible.</Text>
        </Box>
      )}
      <VStack align="start" mt={3}>
        <Text fontWeight="bold">Título: {movie.title}</Text>
        <Text>Votos: {movie.vote_average}</Text>
      </VStack>
    </Box>
  );
}
