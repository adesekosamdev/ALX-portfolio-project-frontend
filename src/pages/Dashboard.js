import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LogoutButton from '../components/LogoutButton';
import NavBarUser from '../components/NavBarUser';
import BudgetCard from '../components/BudgetCard';

const Dashboard = ({ setIsAuthenticated }) => {
	const [budgets, setBudgets] = useState([]);

	const fetchUserBudgets = async () => {
		const userId = 1;
		const token = localStorage.getItem('token');

		try {
			const response = await axios.get(`/api/budgets/uBudgets/${userId}`, {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});
			// if (!response.ok) {
			// 	throw new Error('Network response was not ok');
			//   }
			//   const data = await response.json();
			//   return data.budgets || [];
			// Handle the response data
			console.log(response.data);
			return response.data|| [];
		} catch (error) {
			// Handle errors
			console.error("Error fetching user's budgets:", error.response.data);
			return [];
		}
	};

	useEffect(() => {
		const getUserBudgets = async () => {
		  const fetchedBudgets = await fetchUserBudgets();
		  setBudgets(fetchedBudgets);
		};
	
		getUserBudgets();
	  }, []);
	

	return(
		<div className="lg:bg-background lg:h-screen text-black text-dark-corn ">
			<NavBarUser />
			<div className='m-[20px] px-[40px] pt-[40px] lg:bg-white lg:min-h-screen lg:min-w-screen'>
				<h1 className='text-[24px]'>My Budgets</h1>
				{budgets.length === 0 ? (
					<p className=''>You have no budgets yet. Click here + to create a new one.</p>
				) : (
					budgets.map((budget, index) => (
						<BudgetCard key={index} budget={budget} />
					))
				)}
				{/* <button className='ml-[20px]' onClick={getUserBudgets}>Get my budgets</button> */}
			</div>
		</div>
	);
};

export default Dashboard;
