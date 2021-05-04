import React from 'react';

export default function DynamicOtherInput(props) {
	const add = e => {
		e.preventDefault();
		props.lactoFerment.ingredients.other.push({
			name: '',
			value: 0.0,
			unit: 'unit'
		});
		props.set(props.lactoFerment);
		apiCall();
	};

	const remove = e => {
		e.preventDefault();
		props.lactoFerment.ingredients.other.splice(e.target.id, 1);
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
	return props.lactoFerment.ingredients.other.length > 0 ? (
		props.lactoFerment.ingredients.other.map((ingredient, index) => {
			return (
				<div index={index}>
					<input
						type="string"
						name={`other[${index}].name`}
						defaultValue={props.lactoFerment.ingredients.other[index].name}
						key={`${props.lactoFerment.ingredients.other[index].name}${index}`}
					/>

					<input
						type="string"
						name={`other[${index}].value`}
						defaultValue={props.lactoFerment.ingredients.other[index].value}
						key={`${props.lactoFerment.ingredients.other[index].value}${index}`}
					/>

					<input
						type="string"
						name={`other[${index}].unit`}
						defaultValue={props.lactoFerment.ingredients.other[index].unit}
						key={`${props.lactoFerment.ingredients.other[index].unit}${index}`}
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
			<button onClick={add}>+ spices / aromatics</button>
		</div>
	);
}
