import {Layout} from '../../components/layout';
import {InfoImage} from '../../components/info-image';

export default function Image({image}) {
	return (
		<Layout>
			<InfoImage image={image} />
		</Layout>
	);
}

export async function getStaticPaths() {
	const data = await import('../../json/ContentObjects.json');
	const json = JSON.stringify(data);
	const parseObj = JSON.parse(json);
	const imgData = parseObj.data.results;

	const paths = imgData.map(image => {
		return {
			params: {
				image: image.id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({params}) {
	const data = await import('../../json/ContentObjects.json');
	const json = JSON.stringify(data);
	const parseObj = JSON.parse(json);
	const result = parseObj.data.results;
	const image = result.find(img => img.id === params.image);
	return {
		props: {image},
	};
}
