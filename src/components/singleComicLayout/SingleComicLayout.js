import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './singleComicLayout.scss';

const SingleComicPage = ({ data }) => {
	const {title, description, pageCount, thumbnail, language, price} = data;

	const navigate = useNavigate();

	return (
		<div className="single-comic">
			<Helmet>
				<meta
					name="description"
					content={`${title} comics book`}
				/>
				<title>{ title }</title>
			</Helmet>

			<img src={thumbnail} alt={title} className="single-comic__img"/>
			<div className="single-comic__info">
				<h2 className="single-comic__name">{title}</h2>
				<p className="single-comic__descr">{description}</p>
				<p className="single-comic__descr">{pageCount}</p>
				<p className="single-comic__descr">{language}</p>
				<div className="single-comic__price">{price}$</div>
				<button className='single-comic__back' onClick={() => navigate(-1)}>Move back</button>
			</div>
			<Link to='/comics' className="single-comic__back-all">Back to all</Link>
		</div>
	);
}

export default SingleComicPage;