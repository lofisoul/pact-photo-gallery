import {useState} from 'react';
import {GalleryNav} from '../gallery-nav';
import {Header} from '../header';
import Head from 'next/head';
import useSWR from 'swr';
import {fetcher} from '../../utils/fetcher';
import styles from './index.module.scss';
import {FETCH_FILETREE} from '../../utils/swrKeys';
import {Loader} from "../loader";

export function Layout({children}) {
	const [isNavOpen, setNavIsOpen] = useState(false);
	
	function toggleSideNav() {
		setNavIsOpen(!isNavOpen);
	}

	const {data, error} = useSWR(FETCH_FILETREE, fetcher);

	if (!data) return <div className="galleryMessage msgLg"><Loader /></div>;
	if (error) return <div className="galleryMessage msgError">{`Whoops! Your request failed. (${error})`}</div>;
	return (
		<>
			<Head>
				<title>Photo Gallery with NextJS</title>
				<meta name="description" content="Generated with NextJS" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<GalleryNav items={data} isOpen={isNavOpen} toggle={toggleSideNav} />
				<section className="content">
					<Header isNavOpen={isNavOpen} />
					{children}
				</section>
			</main>
		</>
	);
}
