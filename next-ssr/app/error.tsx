"use client";

import ErrorFallback from "shared/components/ErrorFallback";

type GlobalErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <ErrorFallback error={error} reset={reset} />
      </body>
    </html>
  );
}
