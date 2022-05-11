import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Countdown from './components/Countdown';

function App() {
	return (
		<div>
			<Nav></Nav>
			<main>
				<About></About>
				<Countdown />
			</main>
		</div>
	);
}

export default App;
