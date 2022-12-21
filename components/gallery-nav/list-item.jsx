import {useState, useRef} from 'react';
import Link from 'next/link';
import cn from 'classnames';
import FolderOutlined from '@ant-design/icons/FolderOutlined';
import FolderOpenOutlined from '@ant-design/icons/FolderOpenOutlined';
import PictureOutlined from '@ant-design/icons/PictureOutlined';
import styles from './index.module.scss';

export function ListItem({item, isAlbum, level, idx}) {
	const [active, setActive] = useState(false);
	const [subMenuHeight, setSubMenuHeight] = useState('auto');
	const subMenuRef = useRef(null);

	function toggleItem() {
		setActive(!active);
	}

	const size = item[item.id].size;

	let children = null;
	if (item[item.id].children && item[item.id].children.length) {
		children = (
			<ul
				ref={subMenuRef}
				style={{height: subMenuHeight}}
				className={cn(`level${level}`, {isOpen: active})}
			>
				{item[item.id].children.map(li => {
					const isAlbum = li[li.id].scheme === 'album';
					return (
						<ListItem
							item={li}
							isAlbum={isAlbum}
							key={li.id}
							level={(level += 1)}
						/>
					);
				})}
			</ul>
		);
	}

	function renderButtonContent(active) {
		return active ? (
			<>
				<FolderOpenOutlined />
				{`${item.name} (${size})`}
			</>
		) : (
			<>
				<FolderOutlined />
				{`${item.name} (${size})`}
			</>
		);
	}

	if(isAlbum && size === '0') {
		return
	}

	return (
		<li className={styles.navItem} style={{'--delay': idx}}>
			{isAlbum ? (
				<Link href={`/album/${item[item.id].id}`}>
					<PictureOutlined />
					{`${item.name} (${size})`}
				</Link>
			) : (
				<button
					className={cn({active: active}, {empty: size === '0'})}
					onClick={size === '0' ? undefined : toggleItem}
				>
					{renderButtonContent(active)}
				</button>
			)}
			{active ? children : ''}
		</li>
	);
}
