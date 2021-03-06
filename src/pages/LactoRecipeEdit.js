import React, { useState, useEffect, useRef } from 'react';

import DynamicMainInput from '../components/DynamicMainInput';
import DynamicOtherInput from '../components/DynamicOtherInput';

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

		///////////////////////
		const data = new FormData(e.target);

		const value = Object.fromEntries(data.entries());
		let main = [];
		let other = [];
		let volum = [];
		let ferm = [];
		let salt = [];
		let mainIngInput = [];
		let otherIngInput = [];

		// goes throguh the formdata obj and pushes every key with main in the name to an array
		// then deletes those keys from the value obj
		Object.keys(value).map(key => {
			if (key.includes('main')) {
				main.push(value[key]);
				delete value[key];
			}
		});

		/// loop over the array by getting on the names that include main and push every 3 inputs as an object to the

		/// mainIngInput array
		for (let i = 0; i < main.length; i += 3) {
			mainIngInput.push({
				name: main[i],
				value: main[i + 1],
				unit: main[i + 2]
			});
		}

		// repeate to get values from other array
		Object.keys(value).map(key => {
			if (key.includes('other')) {
				other.push(value[key]);
				delete value[key];
			}
		});

		/// otherIngInput arry
		for (let i = 0; i < other.length; i += 3) {
			otherIngInput.push({
				name: other[i],
				value: other[i + 1],
				unit: other[i + 2]
			});
		}

		// get salt info
		Object.keys(value).map(key => {
			if (key.includes('salt')) {
				salt.push(value[key]);
				delete value[key];
			}
		});

		/// put this new aray of objects as key main into the form value obj
		value['ingredients'] = {
			main: mainIngInput,
			other: otherIngInput,
			salt: {
				value: salt[0],
				unit: salt[1]
			}
		};
		/// so this works and submits correctly because it has the correct inputs. in the right structure, we need to
		// add in the real values for salt and the other ing arry.

		// repete process for volume and ferment ferment
		Object.keys(value).map(key => {
			if (key.includes('volume')) {
				volum.push(value[key]);
				delete value[key];
			}
		});

		value['volume'] = {
			value: volum[0],
			unit: volum[1]
		};

		Object.keys(value).map(key => {
			if (key.includes('ferment')) {
				ferm.push(value[key]);
				delete value[key];
			}
		});

		value['ferment'] = {
			temp: ferm[0],
			duration: ferm[1]
		};

		console.log(value);

		apiCall(value);
	};

	const apiCall = async value => {
		try {
			const response = await fetch(
				`/api/lactoferments/${props.match.params.id}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(value)
				}
			);
			const data = await response.json();
			setlactoFerment(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign(`/lactoferments`); // /${props.match.params.id}
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

	return (
		<div className="lactofermentEditForm">
			<form onSubmit={submit}>
				{lactoFerment.name ? (
					<div className="name-field">
						<label>Name:</label>
						<input type="text" name={'name'} defaultValue={lactoFerment.name} />
					</div>
				) : (
					''
				)}
				{lactoFerment.description ? (
					<div className="desc-field">
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
					</div>
				) : (
					''
				)}
				{lactoFerment.ingredients ? (
					<div>
						{' '}
						<label> Spices and Aromatics: </label>
						<DynamicOtherInput
							lactoFerment={lactoFerment}
							set={setlactoFerment}
							match={props.match.params.id}
							updater={updater}
							setUpdater={setUpdater}
						/>
					</div>
				) : (
					''
				)}

				{lactoFerment.ferment ? (
					<div>
						<label>Salt</label>
						<input
							type="string"
							name={'salt.value'}
							defaultValue={lactoFerment.ingredients.salt.value}
						/>
						<input
							type="string"
							name={'salt.unit'}
							defaultValue={lactoFerment.ingredients.salt.unit}
						/>
					</div>
				) : (
					''
				)}

				<button type={'submit'}>submit</button>
			</form>

			<button onClick={handleDelete}> Delete Recipe</button>
		</div>
	);
}
