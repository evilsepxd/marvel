import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Skeleton from '../skeleton/Skeleton'

import './charInfo.scss';

const CharInfo = (props) => {
	const [char, setChar] = useState(null);

	const {loading, error, getCharacter, clearError} = useMarvelService();

	useEffect(() => updateChar(), []);

	useEffect(() => {
		updateChar();
	}, [props.charId]);

	const updateChar = () => {
		if (!props.charId) {
			return;
		}

		clearError();
		getCharacter(props.charId)
			.then(onCharLoaded)
	}
	
	const onCharLoaded = (char) => {
		setChar(char);
	}

	const skeleton = char || loading || error ? null : <Skeleton/>;
	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = !(loading || error || !char) ? <View char={char}/> : null;

	return (
		<div className="char__info">
			{skeleton}
			{errorMessage}
			{spinner}
			{content}
		</div>
	)
}

const View = ({char}) => {
	const {name, description, thumbnail, homepage, wiki, comics} = char;
	return (
		<>
			<div className="char__basics">
				<img
					src={thumbnail}
					alt={name}
					style={thumbnail?.match('image_not_available.jpg') ? {objectFit: 'contain'} : null}/>
				<div>
					<div className="char__info-name">{name}</div>
					<div className="char__btns">
					<a href={homepage} className="button button__main">
						<div className="inner">Homepage</div>
					</a>
					<a href={wiki} className="button button__secondary">
						<div className="inner">Wiki</div>
					</a>
					</div>
				</div>
			</div>
			<div className="char__descr">
				{description}
			</div>
			<div className="char__comics">Comics:</div>
			<ul className="char__comics-list">
				{comics?.length > 0 ? null : 'There is no comics with this character'}
					{
						comics?.slice(0, 10).map((item, i) => {
							return (
								<Link key={i} className="char__comics-item" to={`/comics/${item.resourceURI.match(/\d*$/)}`}>
									{item.name}
								</Link>
							);
						})
					}
			</ul>
		</>
	);
}

CharInfo.propTypes = {
    	charId: PropTypes.number
};

export default CharInfo;