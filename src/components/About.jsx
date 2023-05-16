import React, { useContext } from 'react';
import UserContext from '../context/userContext';

function About() {
	const { user, setUser } = useContext(UserContext);

	return (
		<div>
			about
			<button onClick={() => setUser('changed User in About')}>Click</button>
			{user}
		</div>
	);
}

export default About;
