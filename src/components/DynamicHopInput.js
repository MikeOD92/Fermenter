import React from 'react';

export default function DynamicHopsInput(props) {
	const add = e => {
		e.preventDefault();
		props.beer.ingredients.hops.push({
			name: 'name',
			value: 0.0,
			unit: 'unit',
			sched: 'Schedule'
		});
		props.set(props.beer);
		apiCall();
	};

	const remove = e => {
		e.preventDefault();
		props.beer.ingredients.hops.splice(e.target.id, 1);
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
		props.beer.ingredients.hops.map((ingredient, index) => {
			return (
				<div index={index}>
					<input
						type="string"
						name={`ingredients.hops[${index}].name`}
						defaultValue={props.beer.ingredients.hops[index].name || ''}
						key={`${props.beer.ingredients.hops[index].name}${index}`}
					/>

					<input
						type="float"
						name={`ingredients.hops[${index}].value`}
						defaultValue={props.beer.ingredients.hops[index].value || 0}
						key={`${props.beer.ingredients.hops[index].value}${index}`}
					/>

					<input
						type="string"
						name={`ingredients.hops[${index}].unit`}
						defaultValue={props.beer.ingredients.hops[index].unit || ''}
						key={`${props.beer.ingredients.hops[index].unit}${index}`}
					/>

					<input
						type="string"
						name={`ingredients.hops[${index}].sched`}
						defaultValue={props.beer.ingredients.hops[index].sched || ''}
						key={`${props.beer.ingredients.hops[index].sched}${index}`}
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
			<button onClick={add}>+ hops</button>
		</div>
	);
}
