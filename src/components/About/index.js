import React from 'react';
import coverImage from '../../assets/large/commercial/1.jpg';

function About() {
	return (
		<section className="my-5">
			<h1 id="about">What is Lax Ed?</h1>
			,
			<img
				src={coverImage}
				className="my-2"
				style={{ width: '100%' }}
				alt="cover"
			/>
		</section>
	);
}

export default About;
