import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function EditLactoFerment(props) {
	const [lactoFerment, setlactoFerment] = useState({});
	const [didDelete, setDidDelete] = useState({});

	//////////// Form Ref vars

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

	////////////////// use effect on load

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`/api/lactoferments/${props.match.params.id}`
				);
				const data = await response.json();
				setlactoFerment(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	///////////handle submit

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
			const response = await fetch(
				`/api/lactoferments/${props.match.params.id}`,
				{
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
				}
			);
			const data = await response.json();
			setlactoFerment(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	const handleDelete = async (e, props) => {
		try {
			const response = await fetch(
				`/api/lacoferments/${props.match.params.id}`,
				{
					method: 'DELETE',
					header: {
						'Content-Type': 'application/json'
					}
				}
			);
			const data = await response.json();
			setDidDelete(!didDelete);
		} catch (error) {
			console.error(error);
		} // } finally {
		// 	window.location.assign('/');
		// }
	};

	console.log(Object.keys(lactoFerment));
	console.log(lactoFerment.volume);
	// this seems to console log twice once as an empty array and undefiend and then as what i expect.
	// when i add in the next line it bugs out entierly.
	//console.log(`${lactoFerment[volume].val}`);
	//${lactoFerment.volume.unit}
	return (
		<div className="newLactofermentForm">
			<form onSubmit={handleSubmit}>
				<label>
					Recipe Name
					<input type="text" ref={name} defaultValue={lactoFerment.name} />
				</label>
				<label>
					Description
					<input
						type="text"
						ref={description}
						defaultValue={lactoFerment.description}
					/>
				</label>
				<label>
					Volume amount
					<input
						type="number"
						ref={volumeVal}
						//defaultValue={lactoFerment.volume.value}
					/>
				</label>
				<label>
					Volume unit
					<input
						type="text"
						ref={volumeUnit}
						//defaultValue={lactoferment.Volume.unit}
					/>
				</label>
				<label>
					Fermentaion temp {`(C)`}
					<input
						type="text"
						ref={fermentTemp}
						//defaultValue={lactoferment.method.ferment.temp}
					/>
				</label>
				<label>
					Fermentation duration
					<input
						type="text"
						ref={fermentDuration}
						//defaultValue={lactoferment.method.ferment.duration}
					/>
				</label>
				<label>
					Main ingredient
					<input
						type="text"
						ref={mainName}
						//defaultValue={lactoferment.ingredients.main[0].name}
					/>
				</label>
				<label>
					Main amount
					<input
						type="text"
						ref={mainValue}
						//defaultValue={lactoferment.ingredients.main[0].amount.value}
					/>
				</label>
				<label>
					Main unit
					<input
						type="text"
						ref={mainUnit}
						//defaultValue={lactoferment.ingredients.main[0].amount.unit}
					/>
				</label>
				<label>
					salt amount
					<input
						type="number"
						ref={saltAmount}
						//defaultValue={lactoferment.ingredients.salt.amount.value}
					/>
				</label>
				<label>
					salt unit
					<input
						type="text"
						ref={saltUnit}
						//defaultValue={lactoferment.ingredients.salt.amount.unit}
					/>
				</label>
				<label>
					Other name
					<input
						type="text"
						ref={otherName}
						//defaultValue={lactoferment.ingredients.other[0].name}
					/>
				</label>
				<label>
					other amount
					<input
						type="number"
						ref={otherValue}
						//defaultValue={lactoferment.ingredients.other[0].amount}
					/>
				</label>
				<label>
					other unit
					<input
						type="text"
						ref={otherUnit}
						//defaultValue={lactoferment.ingredients.other[0].unit}
					/>
				</label>
				<label>
					update Fermentaion recipe
					<input type="submit" />
				</label>
			</form>
			<button onClick={handleDelete}> Delete this recipe </button>
		</div>
	);
}
