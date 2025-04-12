import { Box, Button, Text, VStack } from "@chakra-ui/react";

type ErrorFallbackProps = {
  error: Error;
  reset?: () => void;
  useMock?: () => void;
};

export default function ErrorFallback({
  error,
  reset,
  useMock,
}: ErrorFallbackProps) {
  return (
    <Box p={6} borderWidth={1} borderRadius="md" bg="red.50">
      <VStack spacing={4} align="start">
        <Text fontSize="xl" fontWeight="bold" color="red.600">
          Algo salió mal
        </Text>
        <Text>{error?.message || "Error desconocido."}</Text>
        <Box>
          {reset && (
            <Button onClick={reset} colorScheme="blue" mr={2}>
              Reintentar
            </Button>
          )}
          {useMock && (
            <Button onClick={useMock} colorScheme="orange">
              Cargar datos mock
            </Button>
          )}
        </Box>
      </VStack>
    </Box>
  );
}
