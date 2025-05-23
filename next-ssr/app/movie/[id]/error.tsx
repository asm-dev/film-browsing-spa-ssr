"use client";

import ErrorFallback from "shared/components/organisms/ErrorFallback";

type ErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return <ErrorFallback error={error} reset={reset} />;
}
