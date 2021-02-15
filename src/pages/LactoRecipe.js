import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function LactoRecipe(props) {
	const [currentFerment, setFerment] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`/api/lactoferments/${props.match.params.id}`
				);
				const data = await response.json();
				setFerment(data);
				console.log(data);
				console.log('looking for the ID', props.match.params.id);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			<div className="recipe-head">
				<h1> {currentFerment.name ? currentFerment.name : ''}</h1>
				<h3> {currentFerment.description ? currentFerment.description : ''}</h3>
			</div>
			<div className="recipe-body">
				<h4> ingredients </h4>
				<div>
					{currentFerment.name ? (
						<li key={`firstIngredent${currentFerment._id}`}>
							{' '}
							{currentFerment.ingredients.main[0].name} ::{' '}
							{currentFerment.ingredients.main[0].amount.value}{' '}
							{currentFerment.ingredients.main[0].amount.unit}
						</li>
					) : (
						''
					)}
					{/* ////Salt */}
					{currentFerment.name ? (
						<li key={`Salt${currentFerment._id}`}>
							Salt:: {currentFerment.ingredients.salt.amount.value}{' '}
							{currentFerment.ingredients.salt.amount.unit}
						</li>
					) : (
						''
					)}
					{/* ////// Aromatics */}
					{currentFerment.name ? (
						<div>
							Other ingredients and Aromatics:
							<ul>
								{currentFerment.ingredients.other.map(item => {
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
				</div>
				{/* ////Volume  */}
				{currentFerment.name ? (
					<div>
						{currentFerment.volume ? (
							<div>
								<h4> Volume </h4>
								{currentFerment.volume.val} - {currentFerment.volume.unit}
							</div>
						) : (
							''
						)}
					</div>
				) : (
					''
				)}

				<h4> Method</h4>
				{/* {currentFerment.method ? (
					<h1> {currentFerment.method.ferment.temp}</h1>
				) : (
					''
				)} */}
				{currentFerment.method ? (
					<div>
						<p>
							{' '}
							Ferment at {currentFerment.method.ferment.temp}C for{' '}
							{currentFerment.method.ferment.duration}
						</p>
					</div>
				) : (
					''
				)}
			</div>
			<Link to={`/lactoferments/${currentFerment._id}/edit`}>
				{' '}
				Update Recipe{' '}
			</Link>
		</div>
	);
}
