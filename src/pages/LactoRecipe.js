import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LactoRecipe(props) {
	const [ferment, setFerment] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`/api/lactoferments/${props.match.params.id}`
				);
				const data = await response.json();
				setFerment(data);
			} catch (error) {
				console.error(error);
			} finally {
				console.log(ferment);
			}
		})();
	}, []);

	return (
		<div>
			<div className="recipe-head">
				<h1> {ferment.name ? ferment.name : ''}</h1>
				<h3> {ferment.description ? ferment.description : ''}</h3>
			</div>
			<div className="recipe-body">
				<h4> ingredients </h4>
				<ul>
					{ferment.name ? (
						<li key={`firstIngredent${ferment._id}`}>
							{' '}
							{ferment.ingredients.main[0].name} ::{' '}
							{ferment.ingredients.main[0].amount.value}{' '}
							{ferment.ingredients.main[0].amount.unit}
						</li>
					) : (
						''
					)}
				</ul>
			</div>
		</div>
	);
}
