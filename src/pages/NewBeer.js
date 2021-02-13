import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

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
		e.preventDefault;
		const volumeValVal = volumeVal.current.value;
		const volumeUnitVal = volumeUnit.current.value;
		const boilValueVal = boilValue.current.value;
		const boilUnitVal = boilUnit.current.value;
		const mashTempVal = mashTemp.current.value;
		const mashDurationVal = mashDuration.current.value;
		const fermentTempVal = fermentTemp.current.value;
		const fermentDurationVal = fermentDuration.current.value;
		const maltValueVal = maltValue.current.value;
		const maltunitVal = maltunit.current.value;
		const maltNameVal = maltName.current.value;
		const hopValueVal = hopValue.current.value;
		const hopUnitVal = hopUnit.current.value;
		const hopNameVal = hopName.current.value;
		const hopAddVal = hopAdd.current.value;
		const hopAttrVal = hopAttr.current.value;
		const yeastVal = yeast.current.value;
		const nameVal = name.current.value;
		const styleVal = style.current.value;
		const descriptionVal = description.current.value;
		const abvVal = abv.current.value;
		const ibuVal = ibu.current.value;
		try {
			const response = await fetch('/api/beers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: nameVal,
					style: styleVal,
					description: descriptionVal,
					abv: abvVal,
					ibu: ibuVal,
					Volume: {
						val: volumeValVal,
						unit: volumeUnitVal
					},
					boil: {
						value: boilValueVal,
						unit: boilUnitVal
					},
					method: {
						mash: {
							temp: mashTempVal,
							duration: mashDurationVal
						},
						ferment: {
							temp: fermentTempVal,
							time: fermentDurationVal
						}
					},
					ingredients: {
						malt: [
							{
								amount: {
									value: maltValueVal,
									unit: maltunitVal
								},
								name: maltNameVal
							}
						],
						hops: [
							{
								amount: {
									value: hopValueVal,
									unit: hopUnitVal
								},
								name: hopNameVal,
								add: hopAddVal,
								attribute: hopAttrVal
							}
						],
						yeast: yeastVal
					}
				})
			});
			const data = await response.json();
			setBeers([...beers, data]);
		} catch (error) {
			console.error(error);
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
