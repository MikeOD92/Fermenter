import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import LactoFerments from '../pages/Lactoferments';
import Beers from '../pages/Beers';
import LactoRecipe from '../pages/LactoRecipe';

const routes = [
	{
		Component: LactoFerments,
		key: 'LactoFerments',
		path: '/lactoferments'
	},
	{
		Component: Beers,
		key: 'Beers',
		path: '/beers'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/home'
	},
	{
		Component: About,
		key: 'About',
		path: '/about'
	},
	{
		Component: LactoRecipe,
		key: 'LactoRecipe',
		path: '/:id'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
