import React, { useContext } from 'react';
import UserContext from '../context/userContext';

function Home() {
	const { user, setUser } = useContext(UserContext);

	return (
		<div>
			Home
      <button onClick={()=>setUser('changed User in Home')}>Click</button>
			{user}
		</div>
	);
}
   
export default Home;
