import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Gallery } from "../../components/gallery";
import { Layout } from "../../components/layout";

export default function Album({ album }) {
  const { data, error } = useSWR(
    `/api/album/images?idPath=${album?.url}`,
    fetcher
  );

  if (!data) return <>Loading ...</>;
  if (error) return <>{`Whoops! ${error}`}</>;

  return (
    <Layout>
      <section>
        <h1>{album.name}</h1>
        <Gallery data={data} />
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await fetch("http://localhost:3000/api/filetree");
  const albums = await data.json();
  const pathIDs = [];

  function getPaths(obj) {
    pathIDs.push({
      params: { album: obj[obj.id].id },
    });

    if (!obj[obj.id].children) {
      return;
    }

    obj[obj.id].children.forEach((child) => getPaths(child));
  }

  albums.map((album) => {
    getPaths(album);
  });

  return {
    paths: pathIDs,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(`http://localhost:3000/api/album/${params.album}`);
  const album = await data.json();

  return {
    props: { album },
  };
}
