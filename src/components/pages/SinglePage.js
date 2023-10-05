import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import AppBanner from "../appBanner/AppBanner";
import useMarvelService from '../../services/MarvelService';

const SinglePage = ({ Component, dataType }) => {

	const { dataId } = useParams();
	const [ data, setData ] = useState(null);
	
	const { loading, error, getCharacter, getComic, clearError } = useMarvelService();

	useEffect(() => {
		updateData();
	}, [dataId]);

	const updateData = () => {
		clearError();

		switch (dataType) {
			case 'comic':
				getComic(dataId).then(onDataLoaded);
				break;
			case 'character':
				getCharacter(dataId).then(onDataLoaded);
		}
	}
	
	const onDataLoaded = (data) => {
		setData(data);
	}

	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = !(loading || error || !data) ? <Component data={data}/> : null;

	return (
		<>
			<AppBanner />
			{ errorMessage }
			{ spinner }
			{ content }
		</>
	);

}

export default SinglePage;