import {Layout} from '../../components/layout';
import {Gallery} from '../../components/gallery';
import {useRouter} from 'next/router';
import useSWR from 'swr';
import {fetcher} from '../../utils/fetcher';
import { Loader } from "../../components/loader";

export default function Results() {
	const router = useRouter();
	const query = router.query;

	const {data, error} = useSWR(
		`api/album/searchresults?keyword=${query.searchTerms}`,
		fetcher,
	);

	if (!data) return <Layout><div className="galleryMessage msgLg"><Loader /></div></Layout>;
  if (error) return <Layout><div className="galleryMessage msgError">{`Whoops! Your request failed. (${error})`}</div></Layout>;

	return (
		<Layout>
			<Gallery data={data} title={`Results based on: ${query.searchTerms}`} />
		</Layout>
	);
}
