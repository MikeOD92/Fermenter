import React, { useState } from 'react';
import { GiBeerBottle, GiBubblingFlask } from 'react-icons/gi';
import { MdList, MdAddBox, MdHome } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';

export default function App(props) {
	return (
		<div className="AppPage">
			<img src="https://i.imgur.com/MRdoTlu.png" className="logo" />
			<div className="body-container">
				<p>
					Welcome to Fermenter, a recipe managment application for home brewers
					& fermenters.
				</p>
				<IconContext.Provider value={{ className: 'react-icons' }}>
					<span className="center">
						<ul>
							<li>
								{' '}
								<GiBeerBottle />
								<MdAddBox /> New beer recipe{' '}
							</li>
							<li>
								{' '}
								<GiBubblingFlask />
								<MdAddBox /> New lactic acid fermentation recipe{' '}
							</li>
							<li>
								{' '}
								<GiBeerBottle />
								<MdList /> View beer recipes{' '}
							</li>
							<li>
								{' '}
								<GiBubblingFlask />
								<MdList /> View lactic acid fermentation recipes{' '}
							</li>
						</ul>
					</span>
				</IconContext.Provider>
			</div>
		</div>
	);
}
