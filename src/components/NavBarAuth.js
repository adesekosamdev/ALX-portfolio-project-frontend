// NavBar for authentication screens

import React from "react";
import { Link, useLocation } from 'react-router-dom';
import Logo from "../images/Logo.svg";

const NavBarAuth = () => {
	const location = useLocation();

	return (
		<nav className="w-full lg:h-[70px] flex justify-between font-regular text-[26px] items-center
			max-w-screen-2xl mx-auto text-dark-corn lg:py[5px]">
			<div className="w-1/2 bg-white h-full lg:pl-[60px] lg:pt-[5px]">
				<Link to="/">
					<img
						src={Logo}
						alt="budGetlogo"
						width="60px"
						height="60px"
						className=""
					/>
				</Link>
			</div>
			<div className="w-1/2 bg-background h-full flex justify-end lg:pr-[60px] text-[22px]">
				{location.pathname === '/login' && <div className="lg:my-auto">Don't have an account? 
				<Link to="/register" className="underline"> Sign up</Link>
				</div>}
				{location.pathname === '/register' && <div className="lg:my-auto">Already have an account?
				<Link to="/login" className="underline"> Sign in</Link>
				</div>}
			</div>
		</nav>
	);
};

export default NavBarAuth;