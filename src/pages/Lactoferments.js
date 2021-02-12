import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Lactoferments(props) {
	const [ferments, setFerments] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch('/api/lactoferments');
				const data = await response.json();
				setFerments(data);
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<div className="LactoFerments">
			<h1> Lacto Fermentaion Recipes</h1>
			<ul>
				{ferments.map(item => {
					//how do i make it to ths show page
					return (
						<Link
							to={`/lactoferments/${item._id}`}
							key={`${item._id}${item.name}`}
						>
							<li> {item.name} </li>{' '}
						</Link>
					);
				})}
			</ul>
		</div>
	);
}
