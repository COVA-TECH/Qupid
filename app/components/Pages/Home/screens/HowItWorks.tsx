import siteImages from "~/assets/images/siteImages";

// import { useIsMobile } from "@/hooks/use-mobile";

const HIW = [
	{
		title: "Sign Up and Create Your Profile",
		text: "Share what makes you unique and what you’re looking for",
		image: siteImages.app3,
		alt: "image of qupid interface",
	},
	{
		title: "Discover People and Events",
		text: "Browse profiles or explore events near you",
		image: siteImages.app2,
		alt: "image of qupid interface",
	},
	{
		title: "Start a Conversation With People",
		text: "Message someone new, RSVP to an event, or dive into a group conversation.",
		image: siteImages.app4,
		alt: "image of qupid interface",
	},
];
const HowItWorks = () => {
	// const isMobile = useIsMobile();
	const isTablet = typeof window !== "undefined" && window.innerWidth < 1200;
	return (
		<section className="relative  px-2 sm:px-10 lg:px-20">
			<h2 className="text-center  font-bold  text-3xl sm:text-5xl  mb-10">
				How Qupid Works
			</h2>

			<div className="grid lg:grid-cols-3 sm:grid-cols-2 relative  w-full  justify-center gap-5 lg:px-44 ">
				{/* <div className=" flex flex-col lg:flex-row relative w-full justify-center gap-5 lg:px-44"> */}
				{HIW.map((item, index) => {
					return (
						<div
							key={index}
							className=" flex flex-col items-center w-full  gap-3 col-span-1 z-10 relative  "
						>
							<h3 className="font-semibold text-xl text-center">
								{item.title}
							</h3>
							<p className="px-5 text-center  h-10 mb-2">{item.text}</p>
							<img
								className="h-[20rem] sm:h-[30rem] lg:h-[50rem] "
								src={item.image}
								alt={item.alt}
							/>
						</div>
					);
				})}
				{isTablet || (
					<div className=" absolute bottom-0 -z-1  h-[70%] w-[90%] right-[5%] rounded-[70px] bg-black"></div>
				)}
			</div>
		</section>
	);
};
export default HowItWorks;
