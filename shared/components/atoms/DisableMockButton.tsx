"use client";

import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

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
      {t("error.removeMockData")}
    </Button>
  );
}
