import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function EditLactoFerment(props) {
	const [lactoFerment, setlactoFerment] = useState({});
	const [didDelete, setDidDelete] = useState({});

	//////////// Form Ref vars
	const volumeVal = useRef('');
	const volumeUnit = useRef('');
	const fermentTemp = useRef('');
	const fermentDuration = useRef('');
	const saltAmount = useRef('');
	const saltUnit = useRef('');
	const mainName = useRef('');
	const mainUnit = useRef('');
	const mainValue = useRef('');
	const otherName = useRef('');
	const otherValue = useRef('');
	const otherUnit = useRef('');
	const name = useRef('');
	const description = useRef('');
	////////////////// use effect on load grabs from api gives us current reciipe

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

		try {
			const response = await fetch(
				`/api/lactoferments/${props.match.params.id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						name: name.current.value,
						description: description.current.value,
						volume: {
							val: volumeVal.current.value,
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

	const handleDelete = async e => {
		try {
			const response = await fetch(
				`/api/lacoferments/${props.match.params.id}`,
				{
					method: 'DELETE',
					header: {
						'content-type': 'application/json'
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

	console.log(lactoFerment);
	//console.log(lactoFerment);
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
						//defaultValue={lactoFerment.volume.unit}
					/>
				</label>
				<label>
					Fermentaion temp {`(C)`}
					<input
						type="text"
						ref={fermentTemp}
						//defaultValue={lactoFerment.method.ferment.temp}
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
