export async function fetcher<T>(
  url: string,
  params: Record<string, string> = {}
): Promise<T> {
  const fullUrl = new URL(url);
  for (const key in params) {
    fullUrl.searchParams.set(key, params[key]);
  }

  const res = await fetch(fullUrl.toString());

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.status_message || "Error fetching from API");
  }

  return res.json();
}
