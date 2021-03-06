import React from 'react';
import App from '../pages/App';
import LactoFerments from '../pages/Lactoferments';
import Beers from '../pages/Beers';
import LactoRecipe from '../pages/LactoRecipe';
import BeerRecipe from '../pages/BeerRecipe';
import BeerRecipeEdit from '../pages/BeerRecipeEdit';
import LactoRecipeEdit from '../pages/LactoRecipeEdit';
import NewBeer from '../pages/NewBeer';
import NewLactoFerment from '../pages/NewLactoferment';

const routes = [
	{
		Component: NewBeer,
		key: 'NewBeer',
		path: '/beers/new'
	},
	{
		Component: NewLactoFerment,
		key: 'NewLactoFerment',
		path: '/lactoferments/new'
	},
	{
		Component: BeerRecipeEdit,
		key: 'BeerRecipeEdit',
		path: '/beers/:id/edit'
	},
	{
		Component: LactoRecipeEdit,
		key: 'LactoRecipeEdit',
		path: '/lactoferments/:id/edit'
	},
	{
		Component: BeerRecipe,
		key: 'BeerRecipe',
		path: '/beers/:id'
	},
	{
		Component: LactoRecipe,
		key: 'LactoRecipe',
		path: '/lactoferments/:id'
	},
	{
		Component: Beers,
		key: 'Beers',
		path: '/beers'
	},
	{
		Component: LactoFerments,
		key: 'LactoFerments',
		path: '/lactoferments'
	},
	{
		Component: App,
		key: 'App',
		path: '/'
	}
];

export default routes;
