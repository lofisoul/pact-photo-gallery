import {Layout} from '../components/layout';
import {fetcher} from '../utils/fetcher';
import useSWR from 'swr';
import {Gallery} from '../components/gallery';
import {FETCH_ALL_IMAGES} from '../utils/swrKeys';

export default function Home() {
	const {data, error} = useSWR(FETCH_ALL_IMAGES, fetcher);

	if (!data) return 'Loading...';
	if (error) return 'Error';

	return (
		<Layout>
			<Gallery data={data} />
		</Layout>
	);
}
