import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleCharacterLayout.scss';

const SingleCharacterPage = ({ data }) => {
	const navigate = useNavigate();

	const { name, thumbnail, description } = data;

	return (
		<div className="single-char">
			<Helmet>
				<meta
					name="description"
					content={`Marvel's character's page of ${name}`}
				/>
				<title>{ name }</title>
			</Helmet>
			<img src={thumbnail} alt={name} className="single-char__img"/>
			<div className="single-char__info">
				<h2 className="single-char__name">{name}</h2>
				<p className="single-char__descr">{description ? description : 'There is no description'}</p>
			</div>
			<button className='single-char__btn button button__main' onClick={() => navigate(-1)}>
				<div className="inner">MOVE BACK</div>
			</button>
		</div>
	);
}

export default SingleCharacterPage;