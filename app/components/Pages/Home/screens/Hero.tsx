import siteImages from "~/assets/images/siteImages";
import backgrounds from "~/assets/backgrounds/backgrounds";

import { Button } from "~/components/ui/button";
// import { useIsMobile } from "@/hooks/use-mobile";

// icons
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Hero = () => {
	// const isMobile = useIsMobile();
	const isTablet = typeof window !== "undefined" && window.innerWidth < 1200;
	return (
		<section className="min-h-screen w-full  pt-32 sm:pt-44  ">
			{!isTablet && (
				<div className="absolute w-full  z-[0] top-0 flex justify-between">
					<img className="" src={backgrounds.loveBg} alt="" />
					<img
						className=" transform scale-x-[-1] "
						src={backgrounds.loveBg}
						alt=""
					/>
				</div>
			)}

			<div className="flex flex-col items-center px-5  gap-5 mb-5 z-[2] relative">
				<h1 className="text-center text-4xl leading-[2.5rem] font-bold sm:tracking-wider">
					Discover Love, Build Friendships, and <br /> Share Unforgettable
					Moments with
					<span className="sm:block sm:rounded-3xl sm:bg-red-300 p-1 px-4 w-fit sm:mx-auto lg:mt-2">
						Qupid
					</span>
				</h1>

				<div className="flex flex-col  sm:flex-row gap-2 w-full sm:w-fit ">
					<Button className="rounded-3xl w-full">
						<FaApple />
						Download on iPhone
					</Button>
					<Button className="rounded-3xl w-full">
						<FaGooglePlay />
						Download on Android
					</Button>
				</div>
			</div>
			<div className="flex justify-center items-center z-[2] relative px-5 lg:px-20 pt-5">
				{/* {isTablet ? (
					<img className=" sm:w-[40rem]" src={siteImages.heroMobile} alt="" />
				) : (
					<img src={siteImages.heroPc} alt="" />
				)} */}
				<img src={siteImages.heroPc} alt="" />
			</div>
		</section>
	);
};
export default Hero;
