"use client";

import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const getLanguageOptionFromCurrent = (current: string): string =>
  current === "es" ? "en" : "es";

export default function ToggleLanguageButton() {
  const { i18n } = useTranslation();
  const selectedLanguage = getLanguageOptionFromCurrent(i18n.language);

  const onLanguageChange = () => {
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <Button
      size="sm"
      onClick={onLanguageChange}
      position="fixed"
      top="20px"
      right="20px"
      zIndex={1000}
      variant="outline"
      borderColor="gray.300"
      color="gray.600"
      bg="transparent"
      _hover={{ bg: "gray.50", borderColor: "gray.400", color: "gray.800" }}
    >
      {selectedLanguage}
    </Button>
  );
}
