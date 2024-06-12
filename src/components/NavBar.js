import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../images/Logo.svg";

const NavBar = ({ isAuthenticated }) => {

	return (
		<nav className="w-full flex justify-between py-[32px] px-[20px] md:px-[60px] lg:px-[60px] font-regular text-[26px] items-center
			max-w-screen-2xl mx-auto text-dark-corn">
			<Link to="/">
				<img 
					src={Logo}
					alt="budGetlogo"
					width="60px"
					height="60px"
					className=""
				/>
			</Link>
			{console.log(isAuthenticated)}
			{isAuthenticated ? (
				<ul className="flex space-x-[20px] w-[300px] justify-end">
					<Link to="/dashboard">
						<li className="w-[110px] text-right">Dashboard</li>
					</Link>
				</ul>
			) : (
				<ul className="flex space-x-[20px] w-[300px] justify-end">
					<Link to="/login">
						<li className="w-[110px] text-right">Login</li>
					</Link>
					<Link to="/register">
						<li className="w-[110px] text-right">Register</li>
					</Link>
				</ul>
			)}
		</nav>
	);
};

export default NavBar;
