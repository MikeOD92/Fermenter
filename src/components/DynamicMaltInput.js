import React from 'react';

export default function DynamicMaltInput(props) {
	const add = e => {
		e.preventDefault();
		props.beer.ingredients.malt.push({
			name: '',
			value: 0.0,
			unit: 'unit'
		});
		props.set(props.beer);
		apiCall();
	};

	const remove = e => {
		e.preventDefault();
		props.beer.ingredients.malt.splice(e.target.id, 1);
		props.set(props.beer);
		apiCall();
	};

	const apiCall = () => {
		(async () => {
			try {
				const response = await fetch(`/api/beers/${props.match}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(props.beer)
				});
			} catch (error) {
				console.error(error);
			} finally {
				props.setUpdater(props.updater + 1);
			}
		})();
	};

	return props.beer.ingredients ? (
		props.beer.ingredients.malt.map((ingredient, index) => {
			return (
				<div index={index}>
					<input
						type="string"
						name={`ingredients.malt[${index}].name`}
						defaultValue={props.beer.ingredients.malt[index].name || ''}
						key={`${props.beer.ingredients.malt[index].name}${index}`}
					/>

					<input
						type="float"
						name={`ingredients.malt[${index}].value`}
						defaultValue={props.beer.ingredients.malt[index].value || 0}
						key={`${props.beer.ingredients.malt[index].value}${index}`}
					/>

					<input
						type="string"
						name={`ingredients.malt[${index}].unit`}
						defaultValue={props.beer.ingredients.malt[index].unit || ''}
						key={`${props.beer.ingredients.malt[index].unit}${index}`}
					/>

					<button onClick={remove} id={index}>
						-
					</button>
					<button onClick={add}>+</button>
				</div>
			);
		})
	) : (
		<div>
			<button onClick={add}>+ malt</button>
		</div>
	);
}
