import React, { useState, useRef } from 'react';
import { Formik, Field, FieldArray } from 'formik';

export default function NewLactoFerment(props) {
	// const [lactoferments, setlactoFerments] = useState([]);

	// const volumeVal = useRef(null);
	// const volumeUnit = useRef(null);
	// const fermentTemp = useRef(null);
	// const fermentDuration = useRef(null);
	// const saltAmount = useRef(null);
	// const saltUnit = useRef(null);
	// const mainName = useRef(null);
	// const mainUnit = useRef(null);
	// const mainValue = useRef(null);
	// const otherName = useRef(null);
	// const otherValue = useRef(null);
	// const otherUnit = useRef(null);
	// const name = useRef(null);
	// const description = useRef(null);

	// const handleSubmit = async e => {
	// 	e.preventDefault();

	// 	try {
	// 		const response = await fetch('/api/lactoferments', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify({
	// 				name: name.current.value,
	// 				description: description.current.value,
	// 				volume: {
	// 					value: volumeVal.current.value,
	// 					unit: volumeUnit.current.value
	// 				},
	// 				method: {
	// 					ferment: {
	// 						temp: fermentTemp.current.value,
	// 						duration: fermentDuration.current.value
	// 					}
	// 				},
	// 				ingredients: {
	// 					salt: {
	// 						amount: {
	// 							value: saltAmount.current.value,
	// 							unit: saltUnit.current.value
	// 						}
	// 					},
	// 					main: [
	// 						{
	// 							amount: {
	// 								value: mainValue.current.value,
	// 								unit: mainUnit.current.value
	// 							},
	// 							name: mainName.current.value
	// 						}
	// 					],
	// 					other: [
	// 						{
	// 							amount: {
	// 								value: otherValue.current.value,
	// 								unit: otherUnit.current.value
	// 							},
	// 							name: otherName.current.value
	// 						}
	// 					]
	// 				}
	// 			})
	// 		});
	// 		setlactoFerments([data, ...lactoferments]);
	// 	} catch (error) {
	// 		console.error(error);
	// 	} finally {
	// 		window.location.assign('/');
	// 	}
	// };
	return (
		<div className="newLactofermentForm">
			<h1>New Fermentation</h1>
			<Formik
				initialValues={{
					name: '',
					description: '',
					volume: {
						value: 0.0,
						unit: 'unit'
					},
					method: {
						ferment: {
							temp: "20 C",
							duration: 'weeks'
						}
					},
					// added inputs for up to here
					ingredients: {
						salt: {
							amount: {
								value: 0,
								unit: 'unit'
							}
						},
						main: [
							{
								amount: {
									value: 0,
									unit: 'unit'
								},
								name: ''
							}
						],
						other: [
							{
								amount: {
									value: 0,
									unit: 'unit'
								},
								name: ''
							}
						]
					}
				}}
				onSubmit={(values, {}) => {
					alert(JSON.stringify(values));
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit
				}) => (
					<form onSubmit={handleSubmit}>
						<label> Name:</label>
						<input
							type="string"
							name="name"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.name}
						/>
						<label> Description:</label>
						<input
							type="string"
							name="description"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.description}
						/>
						<label> Volume:</label>
						<input
							type="float"
							name="volume.value"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.volume.value}
						/>
						<input
							type="string"
							name="volume.unit"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.volume.unit}
						/>

						<label> Ferment </label>
						<label> temp </label>
						<input
							type="string"
							name="method.ferment.temp"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.method.ferment.temp}
						/>
						<label> duration </label>
						<input
							type="string"
							name="method.ferment.duration"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.method.ferment.duration}
						/>

						<button type="submit">Submit</button>
					</form>
				)}
			</Formik>
		</div>
		// );
	);
}
{
	/* /* <h1> New Fermentaion</h1>
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
				<span className="button">
					<label>
						Create Fermentaion recipe
						<input type="submit" />
					</label>
				</span>
			</form> 
</div> */
}
