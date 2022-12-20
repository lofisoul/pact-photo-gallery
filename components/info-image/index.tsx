import {useState} from 'react';
import Image from 'next/image';
import cn from 'classnames';
import styles from './index.module.scss';

export function InfoImage({image}) {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div className={styles.infoImageWrap}>
			<div className={styles.container}>
				<div className={styles.imageContainer}>
					<Image
						fill
						onLoadingComplete={() => setIsLoading(false)}
						src={image.url.canto['500']}
						alt={image.name}
						className={cn(styles.infoImage, {loading: isLoading})}
					/>
				</div>
				<div className={cn(styles.info, {loading: isLoading})}>
					<div className={styles.inner}>
						<h2>Image Details</h2>
						<ul>
							<li>
								<strong>Name:</strong> {image.name}
							</li>
							<li>
								<strong>Album:</strong> {image.albumName}
							</li>
						</ul>
						<div className={styles.imageValuesList}>
							<strong>Keywords:</strong>{' '}
							<div>
								{image.keyword.map(keyword => (
									<span key={keyword} className="imageKeyWord">
										{keyword}
									</span>
								))}
							</div>
						</div>
						<div className={styles.imageValuesList}>
							<strong>Tags:</strong>{' '}
							<div>
								{image.tag.map(tag => (
									<span key={tag} className="imageTag">
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
