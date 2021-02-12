import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Beers(props) {
	const [beers, setBeers] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/beers');
				const data = await response.json();
				setBeers(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="Beer-Recipes">
			<h1> Beer Recipes</h1>
			<ul>
				{beers.map(item => {
					//how do i make it to ths show page
					return (
						<Link
							to={`/beers/${item._id}`}
							key={`${item._id}${item.name}`}
							props={props}
						>
							<li> {item.name} </li>{' '}
						</Link>
					);
				})}
			</ul>
		</div>
	);
}
