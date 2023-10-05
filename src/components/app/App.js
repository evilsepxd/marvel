import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import('../pages/404'));
const CharactersPage = lazy(() => import('../pages/CharactersPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicLayout = lazy(() => import('../singleComicLayout/SingleComicLayout'));
const SingleCharacterLayout = lazy(() => import('../singleCharacterLayout/SingleCharacterLayout'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {
	const location = useLocation();

	return (
		<div className="app">
			<AppHeader />
			<main>
				{
					<Suspense fallback={<Spinner/>}>
						<SwitchTransition>
							<CSSTransition
								key={location.key} 
								classNames='page' 
								timeout={300} 
								unmountOnExit
								in={true}
								appear={true} >
								<Routes location={location} >
									<Route path='/' element={<CharactersPage />} />
									<Route path='/comics' element={<ComicsPage />} />
									<Route 
									path='/comics/:dataId'
									element={
										<SinglePage Component={SingleComicLayout} dataType={'comic'} />
									} />
									<Route 
									path='/characters/:dataId'
									element={
										<SinglePage Component={SingleCharacterLayout} dataType={'character'} />
									} />
									<Route path="*" element={<Page404 />} />
								</Routes>
							</CSSTransition>
						</SwitchTransition>
					</Suspense>
				}
			</main>
		</div>
	)
}

export default App;