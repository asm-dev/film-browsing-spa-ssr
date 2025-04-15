"use client";

import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  disableMockClient,
  isMockEnabledClient,
} from "../../mocks/mock-mode-client";

export default function DisableMockButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isMockEnabledClient()) {
      setVisible(true);
    }
  }, []);

  const handleClick = () => {
    disableMockClient();
    window.location.reload();
  };

  if (!visible) return null;

  return (
    <Button
      position="fixed"
      bottom="20px"
      right="20px"
      colorScheme="red"
      size="sm"
      zIndex={1000}
      onClick={handleClick}
    >
      Quitar datos de prueba
    </Button>
  );
}
