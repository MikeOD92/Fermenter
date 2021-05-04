import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function NewBeerForm(props) {
	const [beer, setBeer] = useState({});
	const [updater, setUpdater] = useState(1);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/beers/${props.match.params.id}`, {
					method: 'GET'
				});
				const data = await response.json();
				setBeer(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [updater]);

	const submit = async e => {
		e.preventDefault();

		const data = new FormData(e.target);
		const value = Object.fromEntries(data.entries());

		let malt = [];
		let hops = [];
		let method = [];
		let ferm = [];

		console.log(value);
		// apiCall()
	};

	const apiCall = async value => {
		try {
			const response = await fetch(`/api/beers/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(value)
			});
			const data = await response.json();
			setBeer(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/beers');
		}
	};

	const handleDelete = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/beers/${props.match.params.id}`, {
				method: 'DELETE',
				header: {
					'content-Type': 'application/json'
				}
			});
			const data = await response.json();
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	return (
		<div className="beerEditForm">
			<form onSubmit={submit}>
				{beer.name ? (
					<div>
						<label>Name:</label>
						<input type="text" name={'name'} defaultValue={beer.name} />
					</div>
				) : (
					''
				)}

				{beer.style ? (
					<div>
						<label>Style:</label>
						<input type="text" name={'style'} defaultValue={beer.style} />
					</div>
				) : (
					''
				)}

				{beer.description ? (
					<div>
						<label>description:</label>
						<input
							type="text"
							name={'description'}
							defaultValue={beer.description}
						/>
					</div>
				) : (
					''
				)}

				{beer.abv ? (
					<div>
						<label>abv:</label>
						<input type="float" name={'abv'} defaultValue={beer.abv} />
					</div>
				) : (
					''
				)}

				{beer.ibu ? (
					<div>
						<label>ibu:</label>
						<input type="float" name={'ibu'} defaultValue={beer.ibu} />
					</div>
				) : (
					''
				)}

				{beer.volume ? (
					<div>
						<label>Volume</label>
						<input
							type="float"
							name={'volume.value'}
							defaultValue={beer.volume.value}
						/>
						<input
							type="string"
							name={'volume.unit'}
							defaultValue={beer.volume.unit}
						/>
					</div>
				) : (
					''
				)}

				{beer.method ? (
					<div>
						<label> Mash </label>
						<label> temp:</label>
						<input
							type="number"
							name={'method.mash.temp'}
							defaultValue={beer.method.mash.temp}
						/>
						<label> duration:</label>
						<input
							type="string"
							name={'method.mash.duration'}
							defaultValue={beer.method.mash.duration}
						/>
					</div>
				) : (
					<div>
						<label> Mash </label>
						<label> temp:</label>
						<input type="number" name={'method.mash.temp'} defaultValue={''} />
						<label> duration:</label>
						<input
							type="string"
							name={'method.mash.duration'}
							defaultValue={''}
						/>
					</div>
				)}
				{/* need to have this format everywhere so inputs appear even if a field is empty */}

				{/* DYMAIC INPUT FOR MALTS */}
				{/* GOES HERE */}

				{beer.method ? (
					<div>
						<label> Wort </label>
						<input
							type="string"
							name={'method.wort'}
							defaultValue={beer.method.wort}
						/>
					</div>
				) : (
					<div>
						<label> Wort </label>
						<input type="string" name={'method.wort'} defaultValue={''} />
					</div>
				)}

				{/* DYNAMIC INPUTS FOR HOPS */}

				{beer.ingredients ? (
					<div>
						<label> Yeast </label>
						<input
							type="string"
							name={'ingredients.yeast'}
							defaultValue={beer.ingredients.yeast}
						/>
					</div>
				) : (
					<div>
						<label> Yeast </label>
						<input type="string" name={'ingredients.yeast'} defaultValue={''} />
					</div>
				)}

				{beer.method ? (
					<div>
						<label> Ferment: </label>
						<label> Temp </label>
						<input
							type="string"
							name={'method.ferment.temp'}
							defaultValue={beer.method.ferment.temp}
						/>
						<label> Duration </label>
						<input
							type="string"
							name={'method.ferment.time'}
							defaultValue={beer.method.ferment.time}
						/>
					</div>
				) : (
					<div>
						<label> Ferment </label>
						<label> Temp </label>
						<input
							type="string"
							name={'method.ferment.temp'}
							defaultValue={''}
						/>
						<label> Duration </label>
						<input
							type="string"
							name={'method.ferment.time'}
							defaultValue={''}
						/>
					</div>
				)}

				<button type={'submit'}>submit</button>
			</form>

			<button onClick={handleDelete}> Delete Beer Recipe </button>
		</div>
	);
}
