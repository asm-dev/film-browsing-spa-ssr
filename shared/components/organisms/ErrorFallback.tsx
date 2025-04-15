import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type ErrorFallbackProps = {
  error: Error;
  reset?: () => void;
  onUseMock?: () => void;
};

export default function ErrorFallback({
  error,
  reset,
  onUseMock,
}: ErrorFallbackProps) {
  const { t } = useTranslation();

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      bg="red.50"
      p={6}
      boxShadow="sm"
      maxW="lg"
      mx="auto"
      mt={10}
    >
      <Stack gap={4} align="center" textAlign="center">
        <Heading size="md" color="red.600">
          {t("error.somethingWentWrong")}
        </Heading>
        <Text color="red.800">{error.message}</Text>

        {(reset || onUseMock) && (
          <Flex mt={4} gap={3} justify="center" wrap="wrap">
            {reset && (
              <Button
                onClick={reset}
                bg="red.500"
                color="white"
                _hover={{ bg: "red.600" }}
              >
                {t("action.retry")}
              </Button>
            )}
            {onUseMock && (
              <Button
                onClick={onUseMock}
                bg="gray.700"
                color="white"
                _hover={{ bg: "gray.800" }}
              >
                {t("action.loadMockData")}
              </Button>
            )}
          </Flex>
        )}
      </Stack>
    </Box>
  );
}
