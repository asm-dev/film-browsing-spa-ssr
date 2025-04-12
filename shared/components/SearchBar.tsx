"use client";

import { InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Button, Input } from "@chakra-ui/react";
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
    <Box w="100%">
      <InputGroup size="md">
        <Input
          placeholder={placeholder || "Buscar películas..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          borderRadius="md"
          pr="5.5rem"
        />
        <InputRightElement
          width="5.5rem"
          height="100%"
          pointerEvents="none"
          right="0"
          top="0"
        >
          <Button
            h="100%"
            w="100%"
            size="md"
            bg="gray.700"
            color="white"
            _hover={{ bg: "gray.800" }}
            onClick={handleSubmit}
            borderLeftRadius={0}
            borderRightRadius="md"
            pointerEvents="auto"
          >
            Buscar
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
