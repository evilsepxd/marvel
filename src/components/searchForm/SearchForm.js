import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import useMarvelService from '../../services/MarvelService';

import './searchForm.scss';

const SearchForm = () => {
	const  [ charList, setCharList ]  = useState(null);
	const { loading, error, clearError, getCharactersByNameStart } = useMarvelService();

	const onCharsLoaded = charList => {
		setCharList(charList);
	}

	const updateCharList = name => {
		clearError();
		getCharactersByNameStart(name)
		.then(onCharsLoaded);
	}

	const successBlock = !(error || loading) && charList?.[0].name && <SuccessBlock charList={charList} />
	const errorMessage = error && <Message 
							text='Fetch error' 
							typeOfMessage='error' />;
	const notFoundMessage = charList?.[0].name === null && <Message 
									text='The character was not found. Check the name and try again' 
									typeOfMessage='error' />;
	
	return (
		<Formik
			initialValues = {{
				name: ''
			}}
			validationSchema = {
				Yup.object({
					name: Yup.string()
							.required('This field is required')
				})
			}
			onSubmit = {
				({ name }, {setSubmitting}) => {
					updateCharList(name);
					setSubmitting(false);
				}
			}
		>
			{
				({ isSubmitting }) => (
					<Form className='search-form'>
						<label className="search-form__title" htmlFor='name'>
							Or find a character by name:
						</label>
						<Field 
							className='search-form__input'
							placeholder='Enter name'
							id='name'
							name='name'
							type='text'
						/>
						<button 
							className='search-form__btn button button__main'
							type='submit'
							disabled={isSubmitting}
						>
							<div className="inner">FIND</div>
						</button>
						{ successBlock }
						{ errorMessage }
						{ notFoundMessage }
						<ErrorMessage 
							className='search-form__message search-form__message_error' 
							name='name' 
							component='div' 
						/>
					</Form>
				)
			}
		</Formik>
	);
}

const Message = ({text, typeOfMessage}) => {
	return (
		<div className={`search-form__message search-form__message_${typeOfMessage}`}>
			{text}
		</div>
	);
}

const SuccessBlock = ({ charList }) => {
	return (
		<div className="search-form__list">
			{
				charList.map((char, i) => {
					return (
						<Link key={i} to={`/characters/${char.id}`}>
							<div className="search-form__list-item">
								<img src={char.thumbnail} alt={char.name} className="search-form__list-item-img" />
								<div className="search-form__list-item-name">{char.name}</div>
							</div>
						</Link>
					);
				})
			}
		</div>
	);
}

export default SearchForm;