import React from 'react';
import { Link } from 'react-router-dom';
import { GiBeerBottle, GiBubblingFlask } from 'react-icons/gi';
import { MdList, MdAddBox, MdHome } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
const NavBar = props => {
	const icons = key => {
		switch (key) {
			case 'NewBeer':
				return (
					<>
						<GiBeerBottle /> <MdAddBox />
					</>
				);
				break;
			case 'NewLactoFerment':
				return (
					<>
						<GiBubblingFlask /> <MdAddBox />
					</>
				);
				break;
			case 'LactoFerments':
				return (
					<>
						<GiBubblingFlask /> <MdList />
					</>
				);
				break;
			case 'Beers':
				return (
					<>
						<GiBeerBottle /> <MdList />
					</>
				);
				break;
			case 'App':
				return (
					<>
						<MdHome />
					</>
				);
			default:
				return key;
		}
	};
	return (
		<nav className="NavBar">
			{props.routes
				.filter(item => !item.path.includes(':'))
				.map(({ key, path }) => (
					<Link key={key} to={path}>
						<IconContext.Provider value={{ className: 'react-icons' }}>
							{icons(key)}
						</IconContext.Provider>
					</Link>
				))}
		</nav>
	);
};

export default NavBar;
