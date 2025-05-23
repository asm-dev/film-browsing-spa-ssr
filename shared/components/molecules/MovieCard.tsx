import { Box, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import { MovieData } from "../../services/movies/movies-api-service.types";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w185";

export default function MovieCard({ movie }: { movie: MovieData }) {
  const { t } = useTranslation();

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="sm"
      bg="white"
      _dark={{ bg: "gray.800" }}
      transition="all 0.2s ease"
      _hover={{ boxShadow: "md", transform: "translateY(-2px)" }}
    >
      {movie.poster_path ? (
        <Image
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          objectFit="cover"
          width="100%"
        />
      ) : (
        <Box bg="gray.100" p={4} textAlign="center">
          <Text fontStyle="italic" color="gray.600" fontSize="sm">
            {t("error.imageNotAvailable")}
          </Text>
        </Box>
      )}

      <VStack align="start" gap={1} p={3}>
        <Heading size="sm" lineClamp={2}>
          {movie.title}
        </Heading>
        <Box display="flex" alignItems="center" gap={1}>
          <Icon as={FaStar} color="yellow.400" boxSize={4} />
          <Text fontSize="sm" color="gray.600">
            {movie.vote_average}
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
