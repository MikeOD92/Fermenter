import React from 'react';
import { useState, useEffect } from 'react';

export default function DynamicMainInput(props) {
	const add = e => {
		e.preventDefault();
		props.lactoFerment.ingredients.main.push({
			name: '',
			value: 0.0,
			unit: 'unit'
		});
		props.set(props.lactoFerment);
		apiCall();
	};

	const remove = e => {
		props.lactoFerment.ingredients.main.splice(e.target.id, 1);
		props.set(props.lactoFerment);
		apiCall();
	};

	const apiCall = () => {
		(async () => {
			try {
				const response = await fetch(`/api/lactoferments/${props.match}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(props.lactoFerment)
				});
			} catch (error) {
				console.error(error);
			} finally {
				props.setUpdater(props.updater + 1);
			}
		})();
	};

	return props.lactoFerment.ingredients.main.length > 0 ? (
		props.lactoFerment.ingredients.main.map((ingredient, index) => {
			return (
				<div index={index}>
					<input
						type="string"
						name={`main[${index}].name`}
						defaultValue={props.lactoFerment.ingredients.main[index].name}
						key={`${props.lactoFerment.ingredients.main[index].name}${index}`}
					/>

					<input
						type="string"
						name={`main[${index}].value`}
						defaultValue={props.lactoFerment.ingredients.main[index].value}
						key={`${props.lactoFerment.ingredients.main[index].value}${index}`}
					/>

					<input
						type="string"
						name={`main[${index}].unit`}
						defaultValue={props.lactoFerment.ingredients.main[index].unit}
						key={`${props.lactoFerment.ingredients.main[index].unit}${index}`}
					/>

					<button onClick={add}>+</button>
					<button onClick={remove} id={index}>
						-
					</button>
				</div>
			);
		})
	) : (
		<div>
			<button onClick={add}>+ ingredient</button>
		</div>
	);
}
