import { isMockEnabledServer } from "shared/mocks/mock-mode-server";
import SearchPageClient from "./SearchPageClient";

type SearchPageProps = {
  searchParams: { query?: string };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.query ?? "";
  const shouldUseMock = await isMockEnabledServer();

  return <SearchPageClient query={query} useMock={shouldUseMock} />;
}
