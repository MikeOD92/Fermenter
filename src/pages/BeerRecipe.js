import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BeerRecipe(props) {
	const [beer, setBeer] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/beers/${props.match.params.id}`);
				const data = await response.json();
				// console.log(data);
				setBeer(data);
			} catch (error) {
				console.error(error);
			} finally {
				console.log(beer);
			}
		})();
	}, []);

	return (
		<div>
			<div className="recipe-head">
				{beer.name ? <h1>{beer.name}</h1> : ''}
				{beer.style ? <h2>{beer.style}</h2> : ''}
				{beer.description ? <h3>{beer.description}</h3> : ''}
				{beer.abv ? <h4> abv: {beer.abv}</h4> : ''}
				{beer.ibu ? <h4> ibu: {beer.ibu}</h4> : ''}
			</div>

			{/* I have NO IDEA Why i cant acess the malts or anything in ingredients/method etc.
			none of the nested objs seems to work at all. 
				
				<div className="recipe-body">
					<h2> Grain bill and Malt</h2>
					{beer.ingredients.malt
					? beer.ingredients.malt.map(item => {
							return (
								<div>
									{item.name}
									{item.amount.value}
									{item.amount.unit}
								</div>
							);
					  })
					: ''}
				<h2>Hops</h2>
				{beer.ingredients.hops
					? beer.ingredients.hops.map(item => {
							return (
								<div>
									{item.name}
									{item.attribute}
									{item.add}
									{item.amount.value}
									{item.amount.unit}
								</div>
							);
					  })
					: ''}
				<h2>Yeast</h2>
				<p>{beer.ingredients.yeast ? beer.ingredients.yeast : ''}</p>
			</div> */}
		</div>
	);
}
