import {Layout} from '../components/layout';
import {fetcher} from '../utils/fetcher';
import useSWR from 'swr';
import {Gallery} from '../components/gallery';
import {FETCH_ALL_IMAGES} from '../utils/swrKeys';
import { Loader } from "../components/loader";

export default function Home() {
	const {data, error} = useSWR(FETCH_ALL_IMAGES, fetcher);

	if (!data) return <Layout><div className="galleryMessage msgLg"><Loader /></div></Layout>;
  if (error) return <Layout><div className="galleryMessage msgError">{`Whoops! Your request failed. (${error})`}</div></Layout>;

	return (
		<Layout>
			<Gallery data={data} title={"Welcome!"} />
		</Layout>
	);
}
