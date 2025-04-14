"use client";

import { InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  placeholder?: string;
};

export default function SearchBarWithNavigate({
  placeholder = "Buscar películas...",
}: Props) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Box>
      <InputGroup size="md">
        <Input
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <InputRightElement width="6rem">
          <Button
            h="full"
            size="md"
            w="100%"
            bg="gray.700"
            color="white"
            _hover={{ bg: "gray.800" }}
            onClick={handleSubmit}
          >
            Buscar
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
}
