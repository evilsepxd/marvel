import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';

import './style/style.scss';

ReactDOM
	.createRoot(document.getElementById('root'))
	.render(
		<React.StrictMode>
			<Router>
				<App />
			</Router>
		</React.StrictMode>
	);

