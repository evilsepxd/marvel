import useHttp from "../hooks/http.hook";

const useMarvelService = () => {
	const { loading, error, request, clearError } = useHttp();

	const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
	const _apiKey = 'apikey=51611d0224175ec40de8f6fdd861731f';
	const _baseCharactersOffset = 210;
	const _baseComicsOffset = 8;

	const getAllCharacters = async (offset = _baseCharactersOffset) => {
		const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	}

	const getCharacter = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	}

	const getAllComics = async (offset = _baseComicsOffset) => {
		const res = await request(`${_apiBase}/comics?limit=8&offset=${offset}&${_apiKey}`)
		return res.data.results.map(_transformComics);
	}

	const getComic = async (id) => {
		const res = await request(`${_apiBase}/comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	}

	const _transformCharacter = (char) => {
		return {
			name: char.name,
			description: char.description,
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			id: char.id,
			comics: char.comics.items
		}
	}

	const _transformComics = (comics) => {
		return {
			title: comics.title,
			thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
			price: comics.prices[0].price,
			id: comics.id,
			url: comics.urls[0].url,
			description: comics.description ? comics.description : 'No description for this comic',
			pageCount: comics.pageCount ? `${comics.pageCount} pages` : 'No info about the number of pages',
			language: comics.textObjects.language || 'en-us'
		};
	}

	return {loading, error, clearError, getAllCharacters, getCharacter, getAllComics, getComic};
}

export default useMarvelService;