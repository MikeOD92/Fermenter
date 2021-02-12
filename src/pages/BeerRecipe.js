import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BeerRecipe(props) {
	const [beer, setBeer] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/beers/${props.match.params.id}`);
				const data = await response.json();
				setbeer(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			<div className="recipe-head">
				<h1> {beer.name ? beer.name : ''}</h1>
				<h2> {beer.style ? beer.style : ''}</h2>
				<h3> {beer.description ? beer.description : ''}</h3>
				<h4> {beer.abv ? beer.abv : ''}</h4>
				<h4> {beer.ibu ? beer.ibu : ''}</h4>
			</div>
			<div className="recipe-body"></div>
		</div>
	);
}
