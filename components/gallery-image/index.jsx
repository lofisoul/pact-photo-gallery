import {useState} from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './index.module.scss';

export function GalleryImage({image}) {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<Image
			fill
			onLoadingComplete={() => setIsLoading(false)}
			src={image.url.canto['500']}
			alt={image.name}
			className={cn(styles.galleryImage, {loading: isLoading})}
		/>
	);
}
