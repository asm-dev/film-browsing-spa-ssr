"use client";

import { useRouter } from "next/navigation";
import SearchBar from "shared/components/SearchBar";

type Props = {
  placeholder?: string;
  initialQuery?: string;
};

export default function SearchBarWithRouter({
  placeholder,
  initialQuery,
}: Props) {
  const router = useRouter();

  const handleNavigate = (query: string) => {
    if (!query.trim()) return;
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <SearchBar
      onSearch={handleNavigate}
      placeholder={placeholder}
      initialQuery={initialQuery}
    />
  );
}
