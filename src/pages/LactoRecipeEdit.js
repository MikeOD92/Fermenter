import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
	Formik,
	Field,
	FieldArray,
	values,
	handleSubmit,
	handleChange,
	handleBlur
} from 'formik';

import DynamicMainInput from '../components/DynamicMainInput';

export default function EditLactoFerment(props) {
	const [lactoFerment, setlactoFerment] = useState({});
	const [updater, setUpdater] = useState(1);

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
	}, [updater]);

	// useEffect(() => {}, [lactoFerment]);

	const submit = e => {
		e.preventDefault();
		console.log(JSON.stringify(lactoFerment));
		// you can acess the names with the . like this:
		// console.log(e.target['volume.unit']);

		// for (let i = 0; i < e.target.length; i++) {
		// 	if (e.target[i].name) {
		// 		console.log(e.target);
		// 	} else {
		// 	}
		// }
	};
	return (
		<div className="lactofermentEditForm">
			<form onSubmit={submit}>
				{lactoFerment.name ? (
					<div>
						<label>Name:</label>
						<input type="text" name={'name'} defaultValue={lactoFerment.name} />
					</div>
				) : (
					''
				)}
				{lactoFerment.description ? (
					<div>
						<label>description:</label>
						<input
							type="text"
							name={'description'}
							defaultValue={lactoFerment.description}
						/>
					</div>
				) : (
					''
				)}
				{lactoFerment.volume ? (
					<div>
						<label>Volume</label>
						<input
							type="float"
							name={'volume.value'}
							defaultValue={lactoFerment.volume.value}
						/>
						<input
							type="string"
							name={'volume.unit'}
							defaultValue={lactoFerment.volume.unit}
						/>
					</div>
				) : (
					''
				)}
				{lactoFerment.ferment ? (
					<div>
						<label>Ferment</label>
						<input
							type="string"
							name={'ferment.temp'}
							defaultValue={lactoFerment.ferment.temp}
						/>
						<input
							type="string"
							name={'ferment.duration'}
							defaultValue={lactoFerment.ferment.duration}
						/>
					</div>
				) : (
					''
				)}
				{/* start the dynamic part of the from */}

				{lactoFerment.ingredients ? (
					<div>
						{' '}
						<label> ingredients: </label>
						<DynamicMainInput
							lactoFerment={lactoFerment}
							set={setlactoFerment}
							match={props.match.params.id}
							updater={updater}
							setUpdater={setUpdater}
						/>
						{/* <button
							onClick={e => {
								e.preventDefault();
								lactoFerment.ingredients.main.push({
									name: 'name',
									value: 0,
									unit: 'unit'
								});
								setlactoFerment(lactoFerment);
								console.log(lactoFerment.ingredients.main);
							}}
						>
							+
						</button> */}
					</div>
				) : (
					''
				)}
				{/* {lactoFerment.ingredients.salt? (

				)} */}
				<button type={'submit'}>submit</button>
			</form>
		</div>
	);
}
