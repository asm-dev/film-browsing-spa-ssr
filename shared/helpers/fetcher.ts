/**
 * @param baseUrl
 * @param params
 * @returns
 */
export function buildUrlWithParams(
  baseUrl: string,
  params: Record<string, string>
): string {
  const fullUrl = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) => {
    fullUrl.searchParams.set(key, value);
  });
  return fullUrl.toString();
}

/**
 * @param response
 */
async function handleApiError(response: Response): Promise<never> {
  let message = `HTTP ${response.status}`;
  try {
    const errorBody = await response.json();
    if (errorBody.status_message) {
      message = errorBody.status_message;
    }
  } catch {
    message = `${message} - ${response.statusText}`;
  }
  throw new Error(message);
}

/**
 * Fetches data from an API with optional query parameters.
 *
 * @template T
 * @param url
 * @param params
 * @returns
 * @throws If the response is not ok or the request fails.
 */
export async function fetcher<T>(
  url: string,
  params: Record<string, string> = {}
): Promise<T> {
  const fullUrl = buildUrlWithParams(url, params);

  const res = await fetch(fullUrl);

  if (!res.ok) {
    await handleApiError(res);
  }

  return res.json();
}
