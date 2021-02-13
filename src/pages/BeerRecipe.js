import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BeerRecipe(props) {
	const [beer, setBeer] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/beers/${props.match.params.id}`);
				const data = await response.json();
				console.log(data);
				setBeer(data);
				console.log(beer);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			<div className="recipe-head">
				{beer.name ? <h1>{beer.name}</h1> : ''}
				{beer.style ? <h2>{beer.style}</h2> : ''}
				{beer.description ? <p>{beer.description}</p> : ''}
				{beer.abv ? <h4> abv: {beer.abv}</h4> : ''}
				{beer.ibu ? <h4> ibu: {beer.ibu}</h4> : ''}
			</div>
			<div>
				{' '}
				<h2> ingredients</h2>
				<h4> Malt</h4>
				{/* /////////////////////////////////// */}
				{/* {beer.ingredients.malt.map(item => {
					return (
						<>
							<p>{item.name}</p>
							<p>
								{item.amount.value} {item.amount.unit}
							</p>
						</>
					);
				})} */}
				{/* /////////////////////////*/}
			</div>
		</div>
	);
}
