"use client";

import Link from "next/link";
import Home from "shared/components/pages/Home";
import "../../i18n";
import SearchBarWithRouter from "../components/SearchBarWithRouter";

export default function HomePage() {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY!;

  return (
    <Home
      apiKey={apiKey}
      LinkComponent={Link}
      linkPropName="href"
      SearchBarComponent={SearchBarWithRouter}
    />
  );
}
