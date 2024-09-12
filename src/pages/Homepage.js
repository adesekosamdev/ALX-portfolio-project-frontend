import React from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Home = ({ isAuthenticated }) => {
	return (
		<div className="bg-background min-h-screen text-black text-dark-corn">
			<NavBar isAuthenticated={isAuthenticated} />
			<div className="h-full mx-auto px-4 lg:px-0">
				<main className="flex flex-col lg:flex-row justify-between relative pt-8 lg:pt-[70px] lg:pl-[60px] lg:h-[724px]">
					<section className="flex flex-col items-center lg:items-start justify-between lg:h-[486px] lg:min-w-[934px]">
						<div className="flex flex-col items-center lg:items-start justify-between lg:h-[282px]">
							<h1 className="text-4xl lg:text-[57px] max-w-[934px] text-center lg:text-left mb-4 lg:mb-0">
								Take Control of Your Finances with Ease
							</h1>
							<div className="text-xl lg:text-[28px] max-w-[725px] text-center lg:text-left mb-6 lg:mb-0">
								Our budgeting app helps you manage your money, track expenses, and achieve your financial goals.
							</div>
						</div>
						<button className="custom-button bg-[#165FC2] border-0 text-white w-full max-w-[220px] h-[50px] lg:h-[60px] mb-8 lg:mb-0">
							<Link to='/home' className="w-full h-full flex items-center justify-center">Get Started Free</Link>
						</button>
					</section>
					<section className="bg-[url('/src/images/Piggybank.svg')] bg-contain bg-no-repeat bg-center h-[300px] lg:h-[618px] w-full lg:w-[633px] lg:absolute lg:right-0 lg:bottom-0">
					</section>
				</main>
			</div>
		</div>
	);
};

export default Home;
