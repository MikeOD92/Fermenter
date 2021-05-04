import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function BeerRecipe(props) {
	const [currentBeer, setCurrentBeer] = useState({});
	const [logs, updateLogs] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(`/api/beers/${props.match.params.id}`);
				const data = await response.json();
				setCurrentBeer(data);
				updateLogs([...data.notes]);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [][logs]);

	const noteTitle = useRef(null);
	const notes = useRef(null);

	const handleNoteSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('/api/brewlogs', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					title: noteTitle.current.value,
					notes: notes.current.value,
					beerID: currentBeer._id
				})
			});
			const data = await response.json();
			updateLogs([data]);
		} catch (error) {
			console.error(error);
		} finally {
			noteTitle.current.value = '';
			notes.current.value = '';
		}
	};

	const deleteNote = async e => {
		e.preventDefault();
		try {
			const response = await fetch(`/api/brewlogs/${e.target.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const data = await response.json();
			updateLogs([data]);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="beer-recipe">
			<div className="recipe-head">
				{currentBeer.name ? <h1>{currentBeer.name}</h1> : ''}
				{currentBeer.style ? <h2>{currentBeer.style}</h2> : ''}
				{currentBeer.description ? <p>{currentBeer.description}</p> : ''}
				{currentBeer.abv ? <h4> abv: {currentBeer.abv}</h4> : ''}
				{currentBeer.ibu ? <h4> ibu: {currentBeer.ibu}</h4> : ''}
				{currentBeer.volume ? (
					<h4>
						{' '}
						yield: {currentBeer.volume.value} {currentBeer.volume.unit}{' '}
					</h4>
				) : (
					''
				)}
			</div>
			<br />
			<div className="instructions">
				<h3>Mash</h3>
				{currentBeer.method ? (
					<div>
						<p>
							{' '}
							steep gains at {currentBeer.method.mash.temp} degrees for{' '}
							{currentBeer.method.mash.duration} mins{' '}
						</p>
					</div>
				) : (
					''
				)}
				<h5> Grain Bill/ Malts</h5>
				{currentBeer.ingredients ? (
					<div>
						{currentBeer.ingredients.malt.map((item, index) => {
							return (
								<p key={`${item.name}${index}`}>
									{' '}
									{item.name} :: {item.value} {item.unit}
								</p>
							);
						})}
					</div>
				) : (
					''
				)}
				<h3>Wort</h3>
				{currentBeer.method ? (
					<div>
						<p> Boil for: {currentBeer.method.wort}</p>
					</div>
				) : (
					''
				)}
				<h5>Hop Schedule</h5>
				{currentBeer.ingredients ? (
					<div>
						{currentBeer.ingredients.hops.map((item, index) => {
							return (
								<div key={`${item.name}${index}`}>
									<p>
										{item.sched} : {item.name} : {item.value} {item.unit}
									</p>
								</div>
							);
						})}
					</div>
				) : (
					''
				)}

				<h4> Yeast</h4>
				{currentBeer.ingredients ? <p> {currentBeer.ingredients.yeast}</p> : ''}

				<h3>Ferment</h3>
				{currentBeer.method ? (
					<div>
						<p>
							{' '}
							ferment at {currentBeer.method.ferment.temp} degrees for{' '}
							{currentBeer.method.ferment.time}{' '}
						</p>
					</div>
				) : (
					''
				)}
			</div>
			<Link to={`/beers/${props.match.params.id}/edit`}> Update Recipe </Link>
			<div>
				<h2> Notes:</h2>
				<form onSubmit={handleNoteSubmit}>
					<label>
						Title:
						<input type="text" ref={noteTitle} />
					</label>
					<label>
						Notes:
						<input type="text" ref={notes} />
					</label>
					<input type="submit" vale="add notes" />
				</form>

				<ul>
					{currentBeer.notes
						? currentBeer.notes.map((note, index) => {
								return (
									<li key={`${note._id}${index}`}>
										<h4> {note.title}</h4>
										<p>{note.notes}</p>
										<small>{note.createdAt}</small>
										<button onClick={deleteNote} id={note._id}>
											Remove note
										</button>
									</li>
								);
						  })
						: ''}
				</ul>
			</div>
		</div>
	);
}
