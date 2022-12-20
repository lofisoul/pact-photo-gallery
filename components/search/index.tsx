import {useState} from 'react';
import SearchOutlined from '@ant-design/icons/SearchOutlined';
import ArrowRightOutlined from '@ant-design/icons/ArrowRightOutlined';
import cn from 'classnames';
import styles from './index.module.scss';

export function SearchImage({expanded, toggle}) {
	const [searchTerm, setSearchTerm] = useState('');

	function submitHandler(e) {
		e.preventDefault();
		console.log(searchTerm);
	}

	function inputHandler(e) {
		setSearchTerm(e.target.value);
	}

	return (
		<div className={cn(styles.search, {expanded: expanded})}>
			<div className={cn(styles.container)}>
				<button className={styles.toggle} onClick={toggle}>
					<SearchOutlined />
				</button>
				<form onSubmit={submitHandler}>
					<input
						type="text"
						placeholder="Search images"
						onChange={inputHandler}
					/>
					<button type="submit">
						<ArrowRightOutlined />
					</button>
				</form>
			</div>
		</div>
	);
}
