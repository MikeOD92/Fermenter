import React, { useState, useRef } from 'react';

export default function NewBeerForm(props) {
	const [beers, setBeers] = useState([]);

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
		e.preventDefault();

		try {
			const response = await fetch('/api/beers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: name.current.value,
					style: style.current.value,
					description: description.current.value,
					abv: abv.current.value,
					ibu: ibu.current.value,
					volume: {
						value: volumeVal.current.value,
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
			setBeers([data]);
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
					<input type="text" ref={name} />
				</label>
				<label>
					Style
					<input type="text" ref={style} />
				</label>
				<label>
					Description
					<input type="text" ref={description} />
				</label>
				<label>
					abv
					<input type="number" ref={abv} />
				</label>
				<label>
					ibu
					<input type="number" ref={ibu} />
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
					Boil amount
					<input type="number" ref={boilValue} />
				</label>
				<label>
					Boil unit
					<input type="text" ref={boilUnit} />
				</label>
				<label>
					Mash tempature
					<input type="number" ref={mashTemp} />
				</label>
				<label>
					Mash duration {'(mins)'}
					<input type="number" ref={mashDuration} />
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
					Malt name
					<input type="text" ref={maltName} />
				</label>
				<label>
					Malt amount
					<input type="number" ref={maltValue} />
				</label>
				<label>
					Malt unit
					<input type="text" ref={maltunit} />
				</label>
				<label>
					Hop Name
					<input type="text" ref={hopName} />
				</label>
				<label>
					Hop amount
					<input type="number" ref={hopValue} />
				</label>
				<label>
					Hop unit
					<input type="text" ref={hopUnit} />
				</label>
				<label>
					Hop add
					<input type="text" ref={hopAdd} />
				</label>
				<label>
					Hop attribute
					<input type="text" ref={hopAttr} />
				</label>
				<label>
					yeast
					<input type="text" ref={yeast} />
				</label>
				<label>
					Create beer recipe
					<input type="submit" />
				</label>
			</form>
		</div>
	);
}
