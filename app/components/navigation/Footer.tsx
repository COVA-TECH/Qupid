import backgrounds from "~/assets/backgrounds/backgrounds";
import siteIcons from "~/assets/icons/siteIcons";
import { Button } from "../ui/button";

// icons
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

import { NavLink } from "react-router";

const footerLinks = [
	{
		title: "Terms of Service",
		href: "/terms-and-conditions",
	},
	{
		title: "Privacy Policy",
		href: "/privacy-policy",
	},
	{
		title: "Cookie Policy",
		href: "/cookie-policy",
	},
	{
		title: "Safety tips",
		href: "/safety-tips",
	},
	{
		title: "Help & Support",
		href: "/help-and-support",
	},
];

const isTablet = typeof window !== "undefined" && window.innerWidth < 1200;
const Footer = () => {
	return (
		<footer className="w-full   bg-primary ">
			<div className="flex flex-col items-center  text-white py-20 lg:py-48 h-full relative z-2 px-2 gap-5">
				<p className="text-center text-3xl lg:text-5xl sm:sm:px-[10rem] lg:px-[20rem]">
					Ready to meet someone special or explore amazing events?
				</p>
				<p className="text-center">Download Qupid today!</p>
				<div className="flex gap-2 flex-col sm:flex-row w-full justify-center !z-[2]">
					<Button className="bg-white text-primary rounded-3xl hover:text-white hover:outline outline-2">
						<FaApple />
						Download on iPhone
					</Button>
					<Button className="bg-white text-primary rounded-3xl hover:text-white hover:outline outline-2">
						<FaGooglePlay />
						Download on Android
					</Button>
				</div>
				{!isTablet && (
					<div className="absolute w-full z-[1]  top-0 flex justify-between">
						<img className=" h-[30rem]" src={backgrounds.loveBg2} alt="" />
						<img
							className=" h-[30rem] transform scale-x-[-1] "
							src={backgrounds.loveBg2}
							alt=""
						/>
					</div>
				)}
			</div>
			<div className=" flex flex-col lg:grid lg:grid-cols-4 h-auto py-10 border-t-2 border-white bg-primary text-white px-2 lg:px-20 sm:px-20">
				<div className="col-span-1 w-full">
					<img
						className="w-32  mx-auto"
						src={siteIcons.logo2}
						alt="qupid logo"
					/>
				</div>
				<div className=" lg:col-span-2 w-full flex justify-center max-lg:my-5">
					<ul className="lg:flex justify-center  lg:flex-row w-full lg:text-center max-lg:grid grid-cols-3">
						{footerLinks.map((item, index) => {
							return (
								<li
									className={`w-full  text-center  ${
										index > 2 &&
										footerLinks.length % 2 !== 0 &&
										"max-lg:ml-[50%] max-lg:mt-5"
									}`}
									key={index}
								>
									<NavLink to={item.href}>{item.title}</NavLink>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="col-span-1 flex justify-center lg:justify-end w-full">
					<p>© [2024] COVA Technologies. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
