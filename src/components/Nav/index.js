import React from 'react';
function Nav() {
	const teams = [
		{
			name: 'Team A',
			players: ['Player 1', 'Player 2', 'Player 3'],
		},
		{
			name: 'Team B',
			players: ['Player 1', 'Player 2', 'Player 3'],
		},
		{
			name: 'Team C',
			players: ['Player 1', 'Player 2', 'Player 3'],
		},
	];

	return (
		<header>
			<h2>
				<a href="/">
					<span role="img" aria-label="lacrosse">
						🥍
					</span>
					LaxEd
				</a>
			</h2>
			<nav>
				<ul className="flex-row">
					<li className="mx-2">
						<a href="#about">About LaxEd</a>
					</li>
					<li>
						<span>Contact</span>
					</li>
					{teams.map((team) => (
						<li className="mx-1" key={team.name}>
							<span>{team.name}</span>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}

export default Nav;
