import { Helmet } from 'react-helmet';

import AppBanner from '../appBanner/AppBanner';
import ComicsList from '../comicsList/ComicsList';

const Comics = () => {
	return (
		<div>
			<Helmet>
				<meta
					name="description"
					content="Page with list of comics"
				/>
				<title>Comics page</title>
			</Helmet>
			<AppBanner />
			<ComicsList />
		</div>
	);
}

export default Comics;