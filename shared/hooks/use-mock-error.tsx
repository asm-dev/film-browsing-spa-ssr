import { useCallback } from "react";
import { enableMockClient } from "../mocks/mock-mode-client";
import { MOVIE_DATA_MOCK } from "../mocks/movie-data-mock";
import { MovieData } from "../services/movies/movies-api-service.types";

type Handlers = {
  handleReset: () => void;
  handleUseMock: () => void;
};

/**
 * Custom hook for handling API errors and enabling mock data.
 *
 * @param setError - Function to update the error state
 * @param setRetryKey - Used to re-trigger effects
 * @param setUseMock - Enables mock mode
 * @param setData - Populates mock data
 */
export function useMockErrorHandlers(
  setError: (error: Error | null) => void,
  setRetryKey: (updateFn: (key: number) => number) => void,
  setUseMock: (enabled: boolean) => void,
  setData: (mockData: MovieData[]) => void
): Handlers {
  const handleReset = useCallback(() => {
    setError(null);
    setRetryKey((currentKey) => currentKey + 1);
  }, [setError, setRetryKey]);

  const handleUseMock = useCallback(() => {
    enableMockClient();
    setUseMock(true);
    setError(null);
    setRetryKey((currentKey) => currentKey + 1);
    setData(MOVIE_DATA_MOCK);
  }, [setError, setRetryKey, setUseMock, setData]);

  return { handleReset, handleUseMock };
}
