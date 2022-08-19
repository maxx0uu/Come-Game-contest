interface ChartProps {
	q1r1: any;
	q1r2: any;
	q1r3: any;
	q2r1: any;
	q2r2: any;
	q2r3: any;
	surveyList: any;
}

export const Chart = ({
	q1r1,
	q1r2,
	q1r3,
	q2r1,
	q2r2,
	q2r3,
	surveyList,
}: ChartProps) => {
	return (
		<>
			<p>Nombre total de réponses : {surveyList}</p>
			<ul className="flex flex-wrap justify-center items-end gap-8 pb-16 md:pb-0">
				<li className="flex flex-col justify-center text-center">
					<div className={"bg-red-500 w-16 h-[" + q1r1 + "px]"}></div>
					<p>Question 1</p>
					<p>Réponse 1</p>
					<p>{Math.round((q1r1 * 100) / 226) / 100}%</p>
				</li>
				<li className="flex flex-col justify-center text-center">
					<div className={"bg-red-500 w-16 h-[" + q1r2 + "px]"}></div>
					<p>Question 1</p>
					<p>Réponse 2</p>
					<p>{Math.round((q1r2 * 100) / 226) / 100}%</p>
				</li>
				<li className="flex flex-col justify-center text-center">
					<div className={"bg-red-500 w-16 h-[" + q1r3 + "px]"}></div>
					<p>Question 1</p>
					<p>Réponse 3</p>
					<p>{Math.round((q1r3 * 100) / 226) / 100}%</p>
				</li>
				<li className="flex flex-col justify-center text-center">
					<div className={"bg-red-500 w-16 h-[" + q2r1 + "px]"}></div>
					<p>Question 2</p>
					<p>Réponse 1</p>
					<p>{Math.round((q2r1 * 100) / 226) / 100}%</p>
				</li>
				<li className="flex flex-col justify-center text-center">
					<div className={"bg-red-500 w-16 h-[" + q2r2 + "px]"}></div>
					<p>Question 2</p>
					<p>Réponse 2</p>
					<p>{Math.round((q2r2 * 100) / 226) / 100}%</p>
				</li>
				<li className="flex flex-col justify-center text-center">
					<div className={"bg-red-500 w-16 h-[" + q2r3 + "px]"}></div>
					<p>Question 2</p>
					<p>Réponse 3</p>
					<p>{Math.round((q2r3 * 100) / 226) / 100}%</p>
				</li>
			</ul>
		</>
	);
};
