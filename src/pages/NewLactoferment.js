import React, { useState, useRef } from 'react';

export default function NewLactoFerment(props) {
	const [lactoferments, setlactoFerments] = useState([]);

	const volumeVal = useRef(null);
	const volumeUnit = useRef(null);
	const fermentTemp = useRef(null);
	const fermentDuration = useRef(null);
	const saltAmount = useRef(null);
	const saltUnit = useRef(null);
	const mainName = useRef(null);
	const mainUnit = useRef(null);
	const mainValue = useRef(null);
	const otherName = useRef(null);
	const otherValue = useRef(null);
	const otherUnit = useRef(null);
	const name = useRef(null);
	const description = useRef(null);

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await fetch('/api/lactoferments', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name.current.value,
					description: description.current.value,
					volume: {
						value: volumeVal.current.value,
						unit: volumeUnit.current.value
					},
					method: {
						ferment: {
							temp: fermentTemp.current.value,
							duration: fermentDuration.current.value
						}
					},
					ingredients: {
						salt: {
							amount: {
								value: saltAmount.current.value,
								unit: saltUnit.current.value
							}
						},
						main: [
							{
								amount: {
									value: mainValue.current.value,
									unit: mainUnit.current.value
								},
								name: mainName.current.value
							}
						],
						other: [
							{
								amount: {
									value: otherValue.current.value,
									unit: otherUnit.current.value
								},
								name: otherName.current.value
							}
						]
					}
				})
			});
			setlactoFerments([data, ...lactoferments]);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};
	return (
		<div className="newLactofermentForm">
			<form onSubmit={handleSubmit}>
				<label>
					Recipe Name
					<input type="text" ref={name} />
				</label>
				<label>
					Description
					<input type="text" ref={description} />
				</label>
				<label>
					Volume amount
					<input type="number" ref={volumeVal} />
				</label>
				<label>
					Volume unit
					<input type="text" ref={volumeUnit} />
				</label>
				<label>
					Fermentaion temp {`(C)`}
					<input type="text" ref={fermentTemp} />
				</label>
				<label>
					Fermentation duration
					<input type="text" ref={fermentDuration} />
				</label>
				<label>
					Main ingredient
					<input type="text" ref={mainName} />
				</label>
				<label>
					Main amount
					<input type="text" ref={mainValue} />
				</label>
				<label>
					Main unit
					<input type="text" ref={mainUnit} />
				</label>
				<label>
					salt amount
					<input type="number" ref={saltAmount} />
				</label>
				<label>
					salt unit
					<input type="text" ref={saltUnit} />
				</label>
				<label>
					Other name
					<input type="text" ref={otherName} />
				</label>
				<label>
					other amount
					<input type="number" ref={otherValue} />
				</label>
				<label>
					other unit
					<input type="text" ref={otherUnit} />
				</label>
				<label>
					Create Fermentaion recipe
					<input type="submit" />
				</label>
			</form>
		</div>
	);
}
