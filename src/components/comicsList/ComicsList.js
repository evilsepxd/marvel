import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';

const ComicsList = () => {
    	const { loading, error, clearError, getAllComics } = useMarvelService();
	const [comicsList, setComicsList] = useState([]);
	const [offset, setOffset] = useState(8);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [ended, setEnded] = useState(false);

	useEffect(() => {
		onRequest(false);
	}, []);

	const onRequest = (initialValue) => {
		clearError();
		setNewItemLoading(initialValue);
		getAllComics(offset)
			.then(onComicsListLoaded);
	}

	const onComicsListLoaded = (newComicsList) => {
		if (newComicsList.length < 8) {
			setEnded(true);
		}

		setNewItemLoading(false);
		setComicsList(comicsList => [...comicsList, ...newComicsList]);
		setOffset(offset => offset + 100);
	}

	const renderItems = (arr) => {
		const items = arr.map((item, i) => {

			return (
				<li key={i} className="comics__item">
					<Link to={`/comics/${item.id}`}>
						<img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
						<div className="comics__item-name">{item.title}</div>
						<div className="comics__item-price">{item.price}$</div>
					</Link>
				</li>
			);
		});

		return (
			<ul className="comics__grid">
				{items}
			</ul>
		);
	}

	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading && !newItemLoading ? <Spinner/> : null;

	const list = renderItems(comicsList);

	return (
			<div className="comics__list">
				{errorMessage}
				{spinner}
				{list}
				<button
					className="button button__main button__long"
					onClick={() => onRequest(true)}
					disabled={newItemLoading}
					style={{display: ended ? 'none' : 'block'}}>
					<div className="inner">load more</div>
				</button>
			</div>
	)
}

export default ComicsList;