import {ListItem} from './list-item';
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import cn from 'classnames';
import styles from './index.module.scss';

function Trigger({isOpen, toggle}) {
	return (
		<button onClick={toggle}>
			{isOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
		</button>
	);
}

export function GalleryNav({items, isOpen, toggle}) {
	return (
		<nav className={cn(styles.galleryNav, {isOpen: isOpen})}>
			<div className={styles.trigger}>
				<Trigger isOpen={isOpen} toggle={toggle} />
			</div>
			<ul>
				{items.map((item, idx) => {
					const isAlbum = item[item.id].scheme === 'album';
					return (
						<ListItem
							item={item}
							isAlbum={isAlbum}
							key={item.id}
							level={0}
							idx={idx}
						/>
					);
				})}
			</ul>
		</nav>
	);
}
