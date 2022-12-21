import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";
import { Gallery } from "../../components/gallery";
import { Layout } from "../../components/layout";
import { FETCH_ALBUM } from "../../utils/swrKeys";
import { Loader } from "../../components/loader";
import { formatFileTree } from "../../utils/formatFileTree";

export default function Album({ album }) {
  const { data, error } = useSWR(`${FETCH_ALBUM}=${album?.url}`, fetcher);

  if (!data) return <Layout><div className="galleryMessage msgLg"><Loader /></div></Layout>;
  if (error) return <Layout><div className="galleryMessage msgError">{`Whoops! Your request failed. (${error})`}</div></Layout>;

  return (
    <Layout>
        <Gallery data={data} title={album.name} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const data = await import('../../json/FileTree.json');
	const json = JSON.stringify(data);
	const parseObj = JSON.parse(json);
	const albums = formatFileTree(parseObj.data, '');

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
  const data = await import('../../json/FileTree.json');
	const json = JSON.stringify(data);
	const parseObj = JSON.parse(json);
	const mapped = formatFileTree(parseObj.data, '');

  function findById(array, id) {
		for (const item of array) {
			if (item[item.id].id === id) return item;
			if (item[item.id].children?.length) {
				const innerResult = findById(item[item.id].children, id);
				if (innerResult) return innerResult;
			}
		}
	}

  const album = findById(mapped, params.album);

  return {
    props: { album },
  };
}
