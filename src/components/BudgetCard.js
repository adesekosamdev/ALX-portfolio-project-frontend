import React from "react";

const BudgetCard = ({ budget }) => {
	return (
		<div className="lg:w-[800px]">
			<div className="flex justify-between hover:cursor-pointer items-center rounded-md">
				<section className="mt-[19px] mb-2">
				{budget.name}
				</section>
				<section>
					{budget.description}
					{/* <button>&gt;</button> */}
				</section>
			</div>
			<hr />
		</div>
	)
};

export default BudgetCard;
