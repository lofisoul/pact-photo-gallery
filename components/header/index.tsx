import {useState} from 'react';
import Link from 'next/link';
import {SearchImage} from '../search';
import HomeFilled from '@ant-design/icons/HomeFilled';
import cn from 'classnames';
import styles from './index.module.scss';

export function Header() {
	const [expanded, setExpanded] = useState(false);
	function toggleSearch() {
		setExpanded(!expanded);
	}
	return (
		<header className={styles.header}>
			<div className={cn(styles.home, {expanded: expanded})}>
				<Link href="/">
					<HomeFilled />
				</Link>
				<h1>Photo Gallery</h1>
			</div>
			<SearchImage expanded={expanded} toggle={toggleSearch} />
		</header>
	);
}
