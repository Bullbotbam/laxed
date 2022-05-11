import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Teams from './pages/Teams';
import Countdown from './components/Countdown';

function App() {
	return (
		<div>
			<Nav></Nav>
			<main>
				<About></About>
				<Countdown />
			</main>
			<Teams></Teams>
		</div>
	);
}

export default App;
