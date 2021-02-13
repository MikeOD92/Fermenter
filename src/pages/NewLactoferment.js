import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
		e.preventDefault;
		const volumeValVal = volumeVal.current.value;
		const volumeUnitVal = volumeUnit.current.value;
		const fermentTempVal = fermentTemp.current.value;
		const fermentDurationVal = fermentDuration.current.value;
		const saltValueVal = saltAmount.current.value;
		const saltUnitVal = saltUnit.current.value;
		const mainNameVal = mainName.current.value;
		const mainUnitVal = mainUnit.current.value;
		const mainValueVal = mainValue.current.value;
		const otherNameVal = otherName.current.value;
		const otherValueVal = otherValue.current.value;
		const otherUnitVal = otherUnit.current.value;
		const nameVal = name.current.value;
		const descriptionVal = description.current.value;

		try {
			const response = await fetch('/api/lactoferments', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: nameVal,
					description: descriptionVal,
					Volume: {
						val: volumeValVal,
						unit: volumeUnitVal
					},
					method: {
						ferment: {
							temp: fermentTempVal,
							duration: fermentDurationVal
						}
					},
					ingredients: {
						salt: {
							amount: {
								value: saltValueVal,
								unit: saltUnitVal
							}
						},
						main: [
							{
								amount: {
									value: mainValueVal,
									unit: mainUnitVal
								},
								name: mainNameVal
							}
						],
						other: [
							{
								amount: {
									value: otherValueVal,
									unit: otherUnitVal
								},
								name: otherNameVal
							}
						]
					}
				})
			});
			const data = await response.json();
			setlactoFerments([...lactoferments, data]);
		} catch (error) {
			console.error(error);
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
