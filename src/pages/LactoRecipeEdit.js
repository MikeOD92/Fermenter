import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function EditLactoFerment(props) {
	const [lactoferment, setlactoFerment] = useState({
		volume: {
			val: null,
			unit: ''
		},
		method: {
			ferment: {
				temp: null,
				duration: ''
			}
		},
		ingredients: {
			salt: {
				amount: {
					value: null,
					unit: ''
				}
			},
			notes: [],
			main: [
				{
					amount: {
						value: null,
						unit: ''
					},
					name: ''
				}
			],
			other: [
				{
					amount: {
						value: null,
						unit: ''
					},
					name: ''
				}
			],
			name: '',
			description: ''
		}
	});
	const [didDelete, setDidDelete] = useState({});

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

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`/api/lactoferments/${props.match.params.id}`
				);
				const data = await response.json();
				setlactoFerment(data);
				// console.log(lactoferment);
				await console.log(`this is the volume.val ${lactoferment.volume.val}`);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

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
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: nameVal,
					description: descriptionVal,
					volume: {
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
			setlactoFerment([data]);
		} catch (error) {
			console.error(error);
		}
	};
	// const handleDelete = async e => {
	// 	try {
	// 		const response = await fetch(
	// 			`/api/lacoferments${props.match.params.id}`,
	// 			{
	// 				method: 'DELETE',
	// 				header: {
	// 					'Content-Type': 'application/json'
	// 				}
	// 			}
	// 		);
	// 		const data = await response.json();
	// 		setDidDelete(!didDelete);
	// 	} catch (error) {
	// 		console.error(error);
	// 	} finally {
	// 		window.location.assign('/');
	// 	}
	// };
	return (
		<div className="newLactofermentForm">
			<form onSubmit={handleSubmit}>
				<label>
					Recipe Name
					<input type="text" ref={name}>
						{lactoferment.name}
					</input>
				</label>
				<label>
					Description
					<input type="text" ref={description}>
						{lactoferment.description}
					</input>
				</label>
				<label>
					Volume amount
					<input type="number" ref={volumeVal}>
						{lactoferment.volume.val}
					</input>
				</label>
				<label>
					Volume unit
					<input type="text" ref={volumeUnit}>
						{' '}
						{lactoferment.volume.unit}{' '}
					</input>
				</label>
				<label>
					Fermentaion temp {`(C)`}
					<input type="text" ref={fermentTemp}>
						{lactoferment.method.ferment.temp}
					</input>
				</label>
				<label>
					Fermentation duration
					<input type="text" ref={fermentDuration}>
						{lactoferment.method.ferment.duration}
					</input>
				</label>
				<label>
					Main ingredient
					<input type="text" ref={mainName}>
						{lactoferment.ingredients.main[0].name}
					</input>
				</label>
				<label>
					Main amount
					<input type="text" ref={mainValue}>
						{lactoferment.ingredients.main[0].amount.value}
					</input>
				</label>
				<label>
					Main unit
					<input type="text" ref={mainUnit}>
						{lactoferment.ingredients.main[0].amount.unit}
					</input>
				</label>
				<label>
					salt amount
					<input
						type="number"
						ref={saltAmount}
						defaultValue={lactoferment.ingredients.salt.amount.value}
					/>
				</label>
				<label>
					salt unit
					<input type="text" ref={saltUnit}>
						{lactoferment.ingredients.salt.amount.unit}
					</input>
				</label>
				<label>
					Other name
					<input type="text" ref={otherName}>
						{lactoferment.ingredients.other[0].name}
					</input>
				</label>
				<label>
					other amount
					<input type="number" ref={otherValue}>
						{lactoferment.ingredients.other[0].amount}
					</input>
				</label>
				<label>
					other unit
					<input type="text" ref={otherUnit}>
						{lactoferment.ingredients.other[0].unit}
					</input>
				</label>
				<label>
					update Fermentaion recipe
					<input type="submit" />
				</label>
			</form>
		</div>
	);
}
