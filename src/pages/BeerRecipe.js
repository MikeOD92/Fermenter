import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BeerRecipe(props) {
	const [beer, setBeer] = useState({});

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/beers/${props.match.params.id}`);
				const data = await response.json();
				console.log(data.ingredients.malt);
				setBeer(data);
				console.log(beer);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div>
			<div className="recipe-head">
				{beer.name ? <h1>{beer.name}</h1> : ''}
				{beer.style ? <h2>{beer.style}</h2> : ''}
				{beer.description ? <p>{beer.description}</p> : ''}
				{beer.abv ? <h4> abv: {beer.abv}</h4> : ''}
				{beer.ibu ? <h4> ibu: {beer.ibu}</h4> : ''}
			</div>
			<div>
				{' '}
				<h2> ingredients</h2>
				<h4> Grain Bill/ Malts</h4>
				{/* /////////////////////////////////// */}
				{beer.ingredients ? (
					<div>
						{beer.ingredients.malt.map(item => {
							return (
								<p key={item.name}>
									{' '}
									{item.name} :: {item.amount.value} {item.amount.unit}
								</p>
							);
						})}
					</div>
				) : (
					''
				)}
				<h4>Hops</h4>
				{beer.ingredients ? (
					<div>
						{beer.ingredients.hops.map((item, index) => {
							return (
								<div key={`${item.name}${item.index}`}>
									<h5>{item.name}</h5> <br />
									<ul>
										<li key={`${item.amount.unit}${index}`}>
											{item.amount.value} {item.amount.unit}
										</li>
										<li key={item.add}>add: {item.add}</li>
										<li key={item.attribute}> attribute: {item.attribute}</li>
									</ul>
								</div>
							);
						})}
					</div>
				) : (
					''
				)}
				<h4> Yeast</h4>
				{beer.ingredients ? <p> {beer.ingredients.yeast}</p> : ''}
			</div>
			<div className="instructions">
				<h3> Yeild</h3>
				{beer.volume ? (
					<div>
						<p>
							{' '}
							Makes : {beer.volume.value} {beer.volume.unit}
						</p>
					</div>
				) : (
					''
				)}
				{beer.boil ? (
					<div>
						<p>
							{' '}
							Boil : {beer.boil.value} {beer.boil.unit}{' '}
						</p>
					</div>
				) : (
					''
				)}
				<h3>Mash</h3>
				{beer.method ? (
					<div>
						<p>
							{' '}
							steep gains at {beer.method.mash.temp}C for{' '}
							{beer.method.mash.duration} mins{' '}
						</p>
					</div>
				) : (
					''
				)}
				<h3>Ferment</h3>
				{beer.method ? (
					<div>
						<p>
							{' '}
							ferment at {beer.method.ferment.temp}C for{' '}
							{beer.method.ferment.time}{' '}
						</p>
					</div>
				) : (
					''
				)}
			</div>
		</div>
	);
}
