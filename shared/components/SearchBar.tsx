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
    <Box>
      <InputGroup>
        <Input
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleSubmit}>
            Buscar
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
