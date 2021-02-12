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
					{/* ////Salt */}
					{ferment.name ? (
						<li key={`Salt${ferment._id}`}>
							Salt:: {ferment.ingredients.salt.amount.value}{' '}
							{ferment.ingredients.salt.amount.unit}
						</li>
					) : (
						''
					)}
					{/* ////// Aromatics */}
					{ferment.name ? (
						<div>
							Aromatics:
							<ul>
								{ferment.ingredients.other.map(item => {
									return (
										<li key={`${item._id}${item.name}`}>
											{item.name} :: {item.amount.value} {item.amount.unit}
										</li>
									);
								})}
							</ul>
						</div>
					) : (
						''
					)}
					{/* ////Volume  */}
					{ferment.name ? (
						<div>
							volume
							{ferment.name ? (
								<div>
									<h4> Volume </h4>
									{ferment.volume.val} :: {ferment.volume.unit}
								</div>
							) : (
								''
							)}
						</div>
					) : (
						''
					)}
				</ul>
			</div>
		</div>
	);
}
