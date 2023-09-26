import { Link } from "react-router-dom";

import img from '../../resources/gif/404.gif';

const Page404 = () => {
	return (
		<div>
			<img src={img} alt='404' style={{margin: '0 auto', display: 'block', width: '700px'}} />
			<Link to='/' style={{display: 'block', textAlign: 'center', fontWeight: 'bold', fontSize: '24px'}}>Back to main page</Link>
		</div>
	);
}


export default Page404;