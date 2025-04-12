"use client";

import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
  initialQuery?: string;
  placeholder?: string;
};

export default function SearchBar({
  onSearch,
  initialQuery = "",
  placeholder = "Buscar películas...",
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Box>
      <Flex>
        <Input
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          size="md"
        />
        <Button
          onClick={handleSubmit}
          size="md"
          bg="gray.700"
          color="white"
          _hover={{ bg: "gray.800" }}
        >
          Buscar
        </Button>
      </Flex>
    </Box>
  );
}
