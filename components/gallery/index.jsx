import {GalleryImage} from '../gallery-image';
import styles from './index.module.scss';

export function Gallery({data, title}) {
	return (
		<div className={styles.galleryWrap}>
		<h1>{title}</h1>
		{data.length === 0
				? `We couldn't find any images for that album.`
		
			
				: <section className={styles.gallery}>{data.map(image => (
						<div className={styles.imageItem} key={image.id}>
							<a href={`/images/${image.id}`} key={image.id}>
								<GalleryImage image={image} />
							</a>
						</div>
				  ))}
				  </section>
				  }
		
		</div>
	);
}
