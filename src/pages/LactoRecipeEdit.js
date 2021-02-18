import { set } from 'mongoose';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function EditLactoFerment(props) {
	const [lactoFerment, setlactoFerment] = useState({});

	//////////// Form Ref vars
	const volumeVal = useRef(null);
	const volumeUnit = useRef(null);
	const fermentTemp = useRef(null);
	const fermentDuration = useRef(null);
	const saltAmount = useRef(null);
	const saltUnit = useRef(null);
	////////////////////////////////////these are the 5 main ingredient slots.
	const mainName = useRef(null);
	const mainUnit = useRef(null);
	const mainValue = useRef(null);

	// const mainName2 = useRef(null);
	// const mainUnit2 = useRef(null);
	// const mainValue2 = useRef(null);

	// const mainName3 = useRef(null);
	// const mainUnit3 = useRef(null);
	// const mainValue3 = useRef(null);

	// const mainName4 = useRef(null);
	// const mainUnit4 = useRef(null);
	// const mainValue4 = useRef(null);

	// const mainName5 = useRef(null);
	// const mainUnit5 = useRef(null);
	// const mainValue5 = useRef(null);
	//////////////////////////////////////
	const otherName = useRef(null);
	const otherValue = useRef(null);
	const otherUnit = useRef(null);
	const name = useRef(null);
	const description = useRef(null);
	////////////////// use effect on load grabs from api gives us current reciipe

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(
					`/api/lactoferments/${props.match.params.id}`
				);
				const data = await response.json();
				setlactoFerment(data);
				//setMainIngredients(data.ingredients.main);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	///////////handle submit

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await fetch(
				`/api/lactoferments/${props.match.params.id}`,
				{
					method: 'PUT',
					headers: {
						'content-Type': 'application/json'
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
							//////////////////////
							main: [
								{
									amount: {
										value: mainValue.current.value,
										unit: mainUnit.current.value
									},
									name: mainName.current.value
								}
								// {
								// 	amount: {
								// 		value: mainValue2.current.value,
								// 		unit: mainUnit2.current.value
								// 	},
								// 	name: mainName2.current.value
								// },
								// {
								// 	amount: {
								// 		value: mainValue3.current.value,
								// 		unit: mainUnit3.current.value
								// 	},
								// 	name: mainName3.current.value
								// },
								// {
								// 	amount: {
								// 		value: mainValue4.current.value,
								// 		unit: mainUnit4.current.value
								// 	},
								// 	name: mainName4.current.value
								// },
								// {
								// 	amount: {
								// 		value: mainValue5.current.value,
								// 		unit: mainUnit5.current.value
								// 	},
								// 	name: mainName5.current.value
								// }
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
			window.location.assign('/lactoferments');
		}
	};

	const handleDelete = async e => {
		e.preventDefault();

		try {
			const response = await fetch(
				`/api/lactoferments/${props.match.params.id}`,
				{
					method: 'DELETE',
					header: {
						'content-Type': 'application/json'
					}
				}
			);
			const data = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	// console.log(lactoFerment);
	// console.log(mainIngredients);

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
				{Object.keys(lactoFerment).length > 1 ? (
					<label>
						Volume amount
						<input
							type="number"
							ref={volumeVal}
							defaultValue={lactoFerment.volume.value}
						/>
					</label>
				) : (
					''
				)}
				{Object.keys(lactoFerment).length > 1 ? (
					<label>
						Volume unit
						<input
							type="text"
							ref={volumeUnit}
							defaultValue={lactoFerment.volume.unit}
						/>
					</label>
				) : (
					''
				)}
				{Object.keys(lactoFerment).length > 1 ? (
					<label>
						Fermentaion temp {`(C)`}
						<input
							type="text"
							ref={fermentTemp}
							defaultValue={lactoFerment.method.ferment.temp}
						/>
					</label>
				) : (
					''
				)}
				{Object.keys(lactoFerment).length > 1 ? (
					<label>
						Fermentation duration
						<input
							type="text"
							ref={fermentDuration}
							defaultValue={lactoFerment.method.ferment.duration}
						/>
					</label>
				) : (
					''
				)}
				{/* //////////Main ingredients///////// */}
				{Object.keys(lactoFerment).length > 1 ? (
					<div>
						<label>
							Main ingredient
							<input
								type="text"
								ref={mainName}
								defaultValue={lactoFerment.ingredients.main[0].name}
							/>
						</label>
						<label>
							Main amount
							<input
								type="text"
								ref={mainValue}
								defaultValue={lactoFerment.ingredients.main[0].amount.value}
							/>
						</label>
						<label>
							Main unit
							<input
								type="text"
								ref={mainUnit}
								defaultValue={lactoFerment.ingredients.main[0].amount.unit}
							/>
						</label>
					</div>
				) : (
					''
				)}

				{/* //2 */}

				{/* {Object.keys(lactoFerment).length > 1 ? (
					<div>
						<label>
							Main 2
							<input
								type="text"
								ref={mainName2}
								defaultValue={lactoFerment.ingredients.main[1].name || ''}
							/>
						</label>
						<label>
							Main 2 amount
							<input
								type="text"
								ref={mainValue2}
								defaultValue={
									lactoFerment.ingredients.main[1].amount.value || ''
								}
							/>
						</label>
						<label>
							Main 2 unit
							<input
								type="text"
								ref={mainUnit2}
								defaultValue={
									lactoFerment.ingredients.main[1].amount.unit || ''
								}
							/>
						</label>
					</div>
				) : (
					''
				)} */}

				{/* //3 */}

				{/* {Object.keys(lactoFerment).length > 1 ? (
					<div>
						<label>
							Main 3
							<input
								type="text"
								ref={mainName3}
								defaultValue={lactoFerment.ingredients.main[2].name || ''}
							/>
						</label>
						<label>
							Main 3 amount
							<input
								type="text"
								ref={mainValue3}
								defaultValue={
									lactoFerment.ingredients.main[2].amount.value || ''
								}
							/>
						</label>
						<label>
							Main 3 unit
							<input
								type="text"
								ref={mainUnit3}
								 defaultValue={
								 	lactoFerment.ingredients.main[2].amount.unit || ''
								 }
							/>
						</label>
					</div>
				) : (
					''
				)} */}

				{/* //4// */}

				{/* {Object.keys(lactoFerment).length > 1 ? (
					<div>
						<label>
							Main
							<input
								type="text"
								ref={mainName4}
								defaultValue={lactoFerment.ingredients.main[3].name || ''}
							/>
						</label>
						<label>
							Main 4 amount
							<input
								type="text"
								ref={mainValue4}
								defaultValue={
									lactoFerment.ingredients.main[3].amount.value || ''
								}
							/>
						</label>
						<label>
							Main 4 unit
							<input
								type="text"
								ref={mainUnit4}
								defaultValue={
									lactoFerment.ingredients.main[3].amount.unit || ''
								}
							/>
						</label>
					</div>
				) : (
					''
				)} */}

				{/* ///5// */}

				{/* {Object.keys(lactoFerment).length > 1 ? (
					<div>
						<label>
							Main 5
							<input
								type="text"
								ref={mainName5}
								defaultValue={lactoFerment.ingredients.main[4].name || ''}
							/>
						</label>
						<label>
							Main 5 amount
							<input
								type="text"
								ref={mainValue5}
								defaultValue={
									lactoFerment.ingredients.main[4].amount.value || ''
								}
							/>
						</label>
						<label>
							Main 5 unit
							<input
								type="text"
								ref={mainUnit5}
								defaultValue={
									lactoFerment.ingredients.main[4].amount.unit || ''
								}
							/>
						</label>
					</div>
				) : (
					''
				)} */}

				{/* ////////////////////// */}
				{Object.keys(lactoFerment).length > 1 ? (
					<label>
						salt amount
						<input
							type="number"
							ref={saltAmount}
							defaultValue={lactoFerment.ingredients.salt.amount.value}
						/>
					</label>
				) : (
					''
				)}
				{Object.keys(lactoFerment).length > 1 ? (
					<label>
						salt unit
						<input
							type="text"
							ref={saltUnit}
							defaultValue={lactoFerment.ingredients.salt.amount.unit}
						/>
					</label>
				) : (
					''
				)}
				{Object.keys(lactoFerment).length > 1 ? (
					<div>
						<label>
							Other name
							<input
								type="text"
								ref={otherName}
								defaultValue={lactoFerment.ingredients.other[0].name}
							/>
						</label>
						<label>
							other amount
							<input
								type="number"
								ref={otherValue}
								defaultValue={lactoFerment.ingredients.other[0].amount.value}
							/>
						</label>
						<label>
							other unit
							<input
								type="text"
								ref={otherUnit}
								defaultValue={lactoFerment.ingredients.other[0].amount.unit}
							/>
						</label>
					</div>
				) : (
					''
				)}
				<label>
					update recipe
					<input type="submit" />
				</label>
			</form>
			<button onClick={handleDelete}> Delete recipe </button>
		</div>
	);
}
