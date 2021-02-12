import React from 'react';
import App from '../pages/App';
import About from '../pages/About';
import Home from '../pages/Home';
import LactoFerments from '../pages/Lactoferments';
import Beers from '../pages/Beers';
import LactoRecipe from '../pages/LactoRecipe';
import BeerRecipe from '../pages/BeerRecipe';

const routes = [
	{
		Component: LactoRecipe,
		key: 'LactoRecipe',
		path: '/lactoferments/:id'
	},
	{
		Component: BeerRecipe,
		key: 'BeerRecipe',
		path: '/beers/:id'
	},
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
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
