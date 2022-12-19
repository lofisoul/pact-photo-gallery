import { Layout } from "../components/layout";
import { fetcher } from "../utils/fetcher";
import useSWR from "swr";
import { Gallery } from "../components/gallery";

export default function Home() {
  const { data, error } = useSWR("/api/contentobjects", fetcher);

  if (!data) return "Loading...";
  if (error) return "Error";

  return (
    <Layout isHome>
      <Gallery data={data} />
    </Layout>
  );
}
