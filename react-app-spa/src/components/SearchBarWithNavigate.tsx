"use client";

import { useNavigate } from "react-router-dom";
import SearchBar from "shared/components/organisms/SearchBar";

type Props = {
  placeholder?: string;
  initialQuery?: string;
};

export default function SearchBarWithNavigate({
  placeholder,
  initialQuery,
}: Props) {
  const navigate = useNavigate();

  const handleNavigate = (query: string) => {
    if (!query.trim()) return;
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <SearchBar
      onSearch={handleNavigate}
      placeholder={placeholder}
      initialQuery={initialQuery}
    />
  );
}
