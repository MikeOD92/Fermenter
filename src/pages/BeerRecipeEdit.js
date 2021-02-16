import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function NewBeerForm(props) {
	const [beer, setBeer] = useState({});

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
	}, []);

	const volumeVal = useRef(null);
	const volumeUnit = useRef(null);
	const boilValue = useRef(null);
	const boilUnit = useRef(null);
	const mashTemp = useRef(null);
	const mashDuration = useRef(null);
	const fermentTemp = useRef(null);
	const fermentDuration = useRef(null);
	const maltValue = useRef(null);
	const maltunit = useRef(null);
	const maltName = useRef(null);
	const hopValue = useRef(null);
	const hopUnit = useRef(null);
	const hopName = useRef(null);
	const hopAdd = useRef(null);
	const hopAttr = useRef(null);
	const yeast = useRef(null);
	const name = useRef(null);
	const style = useRef(null);
	const description = useRef(null);
	const abv = useRef(null);
	const ibu = useRef(null);

	const handleSubmit = async e => {
		e.preventDefault;

		try {
			const response = await fetch(`/api/beers/${props.match.params.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name.current.value,
					style: style.current.value,
					description: description.current.value,
					abv: abv.current.value,
					ibu: ibu.current.value,
					Volume: {
						val: volumeVal.current.value,
						unit: volumeUnit.current.value
					},
					boil: {
						value: boilValue.current.value,
						unit: boilUnit.current.value
					},
					method: {
						mash: {
							temp: mashTemp.current.value,
							duration: mashDuration.current.value
						},
						ferment: {
							temp: fermentTemp.current.value,
							time: fermentDuration.current.value
						}
					},
					ingredients: {
						malt: [
							{
								amount: {
									value: maltValue.current.value,
									unit: maltunit.current.value
								},
								name: maltName.current.value
							}
						],
						hops: [
							{
								amount: {
									value: hopValue.current.value,
									unit: hopUnit.current.value
								},
								name: hopName.current.value,
								add: hopAdd.current.value,
								attribute: hopAttr.current.value
							}
						],
						yeast: yeast.current.value
					}
				})
			});
			const data = await response.json();
			setBeer(data);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/beers'); /// Don't know why this doesn't work it works on delete button
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
			setDidDelete(!didDelete);
		} catch (error) {
			console.error(error);
		} finally {
			window.location.assign('/');
		}
	};

	return (
		<div className="newbeerForm">
			<form onSubmit={handleSubmit}>
				<label>
					Brew Name
					<input type="text" ref={name} defaultValue={beer.name} />
				</label>
				<label>
					Style
					<input type="text" ref={style} defaultValue={beer.style} />
				</label>
				<label>
					Description
					<input
						type="text"
						ref={description}
						defaultValue={beer.description}
					/>
				</label>
				<label>
					abv
					<input type="number" ref={abv} defaultValue={beer.abv} />
				</label>
				<label>
					ibu
					<input type="number" ref={ibu} defaultValue={beer.ibu} />
				</label>
				<label>
					Volume amount
					<input
						type="number"
						ref={volumeVal}
						//defaultValue={beer.volume.val}
					/>
				</label>
				<label>
					Volume unit
					<input
						type="text"
						ref={volumeUnit}
						//defaultValue={beer.Volume.unit}
					/>
				</label>
				<label>
					Boil amount
					<input
						type="number"
						ref={boilValue}
						//defaultValue={beer.boil.value}
					/>
				</label>
				<label>
					Boil unit
					<input
						type="text"
						ref={boilUnit}
						//defaultValue={beer.boil.unit}
					/>
				</label>
				<label>
					Mash tempature
					<input
						type="number"
						ref={mashTemp}
						//defaultValue={beer.method.mash.temp}
					/>
				</label>
				<label>
					Mash duration {'(mins)'}
					<input
						type="number"
						ref={mashDuration}
						//defaultValue={beer.method.mash.duration}
					/>
				</label>
				<label>
					Fermentaion temp {`(C)`}
					<input
						type="text"
						ref={fermentTemp}
						//defaultValue={beer.method.ferment.temp}
					/>
				</label>
				<label>
					Fermentation duration
					<input
						type="text"
						ref={fermentDuration}
						//defaultValue={beer.method.ferment.time}
					/>
				</label>
				<label>
					Malt name
					<input
						type="text"
						ref={maltName}
						//defaultValue={beer.ingredients.malt[0].name}
					/>
				</label>
				<label>
					Malt amount
					<input
						type="number"
						ref={maltValue}
						//defaultValue={beer.ingredients.malt[0].amount.value}
					/>
				</label>
				<label>
					Malt unit
					<input
						type="text"
						ref={maltunit}
						//defaultValue={beer.ingredients.malt[0].amount.unit}
					/>
				</label>
				<label>
					Hop Name
					<input
						type="text"
						ref={hopName}
						//defaultValue={beer.ingredients.hops[0].name}
					/>
				</label>
				<label>
					Hop amount
					<input
						type="number"
						ref={hopValue}
						//defaultValue={beer.ingredients.hops[0].amount.value}
					/>
				</label>
				<label>
					Hop unit
					<input
						type="text"
						ref={hopUnit}
						//defaultValue={beer.ingredients.hops[0].amount.unit}
					/>
				</label>
				<label>
					Hop add
					<input
						type="text"
						ref={hopAdd}
						//defaultValue={beer.ingredients.hops[0].add}
					/>
				</label>
				<label>
					Hop attribute
					<input
						type="text"
						ref={hopAttr}
						//defaultValue={beer.ingredients.hops[0].attribute}
					/>
				</label>
				<label>
					yeast
					<input
						type="text"
						ref={yeast}
						//defaultValue={beer.ingredients.yeast}
					/>
				</label>
				<label>
					Create beer recipe
					<input type="submit" />
				</label>
			</form>
			<button onClick={handleDelete}> Delete Beer Recipe </button>
		</div>
	);
}
