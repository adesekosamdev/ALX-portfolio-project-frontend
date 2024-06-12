import React from 'react';
// import axios from 'axios';
import LogoutButton from '../components/LogoutButton';

const Dashboard = ({ setIsAuthenticated }) => {

	return(
		<div>
			<div>This is my dashboard</div>
			<LogoutButton setIsAuthenticated={setIsAuthenticated}/>
		</div>
	);
};

export default Dashboard;
