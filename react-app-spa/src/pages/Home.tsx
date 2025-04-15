import { Link } from "react-router-dom";
import Home from "shared/components/pages/Home";
import SearchBarWithNavigate from "../components/SearchBarWithNavigate";

export default function HomePage() {
  const apiKey = import.meta.env.VITE_TMDB_API_KEY!;

  return (
    <Home
      apiKey={apiKey}
      LinkComponent={Link}
      linkPropName="to"
      SearchBarComponent={SearchBarWithNavigate}
    />
  );
}
