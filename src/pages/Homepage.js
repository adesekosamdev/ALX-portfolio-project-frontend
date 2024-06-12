import React from "react";
import NavBar from "../components/NavBar";
import Piggy from "../images/Piggybank.svg";
import { Link } from "react-router-dom";

const Home = ({ isAuthenticated }) => {
	return (
		<div className="bg-background min-h-screen text-black text-dark-corn">
			<NavBar isAuthenticated={isAuthenticated}/>
			<div className="h-full mx-auto">
				<main className=" flex justify-between relative lg:pt-[70px] lg:pl-[60px] lg:h-[724px] ">
					<section className=" absolute flex flex-col justify-between lg:h-[486px] lg:min-w-[934px]">
						<div className="flex flex-col justify-between lg:h-[282px]">
							<h1 className="text-[57px] max-w-[934px]">
								Take Control of Your Finances with Ease
							</h1>
							<div className="text-[28px] max-w-[725px]">
								Our budgeting app helps you manage your money, track expenses, and achieve your financial goals.
							</div>
						</div>
						<button className="custom-button bg-[#165FC2] border-0 text-white max-w-[220px] lg:h-[60px]">
							<Link to='/register'>Get Started Free</Link>
						</button>
					</section>
					<section className="absolute right-0 bottom-0  bg-[url('/src/images/Piggybank.svg')] bg-contain bg-no-repeat h-[618px] w-[633px] px-[20px]">
					</section>
				</main>
			</div>
		</div>
	);
};

export default Home;
