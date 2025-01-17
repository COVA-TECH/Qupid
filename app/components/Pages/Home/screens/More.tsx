const More = () => {
	const gain = [
		{
			title: "Make Real Connections",
			text: "Our focus is on helping you meet real people in meaningful ways.",
		},
		{
			title: "Tailored to Your Interests",
			text: "From shared hobbies to local events, Qupid helps you find people who fit your vibe.",
		},
		{
			title: "Safe & Inclusive Space",
			text: "With profile verification and moderation, Qupid ensures a safe community for everyone.",
		},
	];
	return (
		<section className="px-2 sm:px-10 lg:px-20  ">
			<h3 className="text-center font-bold text-3xl sm:text-5xl  mb-5 sm:mb-10 ">
				More Than an App—A Gateway to Belonging.
			</h3>
			<div className="flex flex-col lg:flex-row px-2 w-full gap-5 lg:px-44">
				{gain.map((item, index) => {
					return (
						<div
							key={index}
							className="rounded-xl shadow-lg bg-[#F5F5F5] px-5 sm:px-10 sm:py-16 lg:px-5 lg:py-10 py-2 flex flex-col gap-2"
						>
							<h5 className="font-semibold">{item.title}</h5>
							<p>{item.text}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default More;
