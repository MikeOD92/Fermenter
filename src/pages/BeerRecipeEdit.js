import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DynamicMaltInput from '../components/DynamicMaltInput';
import DynamicHopsInput from '../components/DynamicHopInput';

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

		let malt = []; // grab keys with malt
		let maltInput = []; // parse keys into array of objects
		let hops = [];
		let hopsInput = [];
		let yeastInput = '';

		let mash = [];
		let mashInput = null;
		let wort = '';
		let ferm = [];
		let fermInput = null;

		let volume = [];

		// make malt array with all keys
		Object.keys(value).map(key => {
			if (key.includes('malt')) {
				malt.push(value[key]);
				delete value[key];
			}
		});

		// make object array out of first array
		for (let i = 0; i < malt.length; i += 3) {
			maltInput.push({
				name: malt[i],
				value: malt[i + 1],
				unit: malt[i + 2]
			});
		}
		/// format hops
		Object.keys(value).map(key => {
			if (key.includes('hops')) {
				hops.push(value[key]);
				delete value[key];
			}
		});

		for (let i = 0; i < hops.length; i += 4) {
			hopsInput.push({
				name: hops[i],
				value: hops[i + 1],
				unit: hops[i + 2],
				sched: hops[i + 3]
			});
		}

		Object.keys(value).map(key => {
			if (key.includes('yeast')) {
				yeastInput = value[key];
				delete value[key];
			}
		});

		value['ingredients'] = {
			malt: maltInput,
			hops: hopsInput,
			yeast: yeastInput
		};
		//////// above this parses the ingredient object from the form.
		// below parse the method object

		Object.keys(value).map(key => {
			if (key.includes('mash')) {
				mash.push(value[key]);
				delete value[key];
			}
		});

		mashInput = {
			temp: mash[0],
			duration: mash[1]
		};

		Object.keys(value).map(key => {
			if (key.includes('ferment')) {
				ferm.push(value[key]);
				delete value[key];
			}
		});

		fermInput = {
			temp: ferm[0],
			time: ferm[1]
		};

		Object.keys(value).map(key => {
			if (key.includes('wort')) {
				wort = value[key];
				delete value[key];
			}
		});

		value['method'] = {
			mash: mashInput,
			ferment: fermInput,
			wort: wort
		};

		/// parse volume
		Object.keys(value).map(key => {
			if (key.includes('volume')) {
				volume.push(value[key]);
				delete value[key];
			}
		});

		value['volume'] = {
			unit: volume[1],
			value: volume[0]
		};

		apiCall(value);
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
			window.location.assign('/beers');
		}
	};

	return (
		<div className="beerEditForm">
			<form onSubmit={submit}>
				{beer.name ? (
					<div className="name-field">
						<label>Name:</label>
						<input type="text" name={'name'} defaultValue={beer.name} />
					</div>
				) : (
					''
				)}

				{beer.style ? (
					<div className="style-field">
						<label>Style:{'      '} </label>
						<input type="text" name={'style'} defaultValue={beer.style} />
					</div>
				) : (
					''
				)}

				{beer.description ? (
					<div className="desc-field">
						<label>description:</label>
						<input
							type="text"
							name={'description'}
							defaultValue={beer.description}
						/>
					</div>
				) : (
					<div className="desc-field">
						<label>description:</label>
						<input type="text" name={'description'} defaultValue={''} />
					</div>
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
				<label> Grain bill:</label>
				<DynamicMaltInput
					beer={beer}
					set={setBeer}
					match={props.match.params.id}
					updater={updater}
					setUpdater={setUpdater}
				/>

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
				<label> Hops: </label>
				<DynamicHopsInput
					beer={beer}
					set={setBeer}
					match={props.match.params.id}
					updater={updater}
					setUpdater={setUpdater}
				/>

				{beer.ingredients ? (
					<div>
						<label> Yeast: </label>
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
