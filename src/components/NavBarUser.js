import React from "react";
import Logo from "../images/Logo.svg";
import { Link } from 'react-router-dom';
import LogoutButton from "./LogoutButton";

const NavBarUser = () => {
	return (
		<nav className="bg-white relative flex justify-between items-center w-full lg:h-[70px] lg:px-[60px] text-dark-corn font-regular text-[26px]">
			<Link to="/" className="h-full lg:pt-[5px]">
				<img 
					src={Logo}
					alt="budGetlogo"
					width="60px"
					height="60px"
					className=""
				/>
			</Link>
			<p className="absolute left-1/2 transform -translate-x-1/2"><Link to='/dashboard'>Dashboard</Link></p>
			<p className=""> <LogoutButton /> </p>
		</nav>
	);
};

export default NavBarUser;
