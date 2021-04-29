import React from 'react';
import { useState, useEffect } from 'react';

export default function DynamicMainInput(props) {
	const [ferment, setFerment] = useState(props.lactoFerment);

	useEffect(() => {
		console.log('mounted');
	}, [props]);

	return ferment.ingredients.main.map((ingredient, index) => {
		return (
			<div>
				<input
					type="string"
					name={`ingredients.main[${index}].name`}
					defaultValue={props.lactoFerment.ingredients.main[index].name}
					key={`${props.lactoFerment.ingredients.main[index].name}${index}`}
				/>

				<input
					type="string"
					name={`ingredients.main[${index}].value`}
					defaultValue={props.lactoFerment.ingredients.main[index].value}
					key={`${props.lactoFerment.ingredients.main[index].value}${index}`}
				/>

				<input
					type="string"
					name={`ingredients.main[${index}].unit`}
					defaultValue={props.lactoFerment.ingredients.main[index].unit}
					key={`${props.lactoFerment.ingredients.main[index].unit}${index}`}
				/>

				{/* <button
					onClick={e => {
						e.preventDefault();
						props.lactoFerment.ingredients.main.push({
							name: '',
							value: 0.0,
							unit: 'unit'
						});
						setFerment(ferment);
						console.log(props.lactoFerment.ingredients.main);
					}}
				>
					+
				</button> */}
			</div>
		);
	});
}
