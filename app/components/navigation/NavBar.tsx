import siteIcons from "~/assets/icons/siteIcons";

import { Button } from "../ui/button";
import { Link } from "react-router";
import { FaBars } from "react-icons/fa";

import {
	Drawer,
	// DrawerClose,
	DrawerContent,
	// DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	// DrawerTitle,
	DrawerTrigger,
} from "~/components/ui/drawer";

const NavBar = () => {
	const isTablet = typeof window !== "undefined" && window.innerWidth < 1200;
	return <>{isTablet ? <MobileNav /> : <PcNav />}</>;
};
export default NavBar;

const MobileNav = () => {
	return (
		<header className="w-full flex justify-between  items-center px-5 mt-5 absolute ">
			<div>
				<Link to={"/"}>
					<img className="w-20" src={siteIcons.logo} alt="qupid logo" />
				</Link>
			</div>
			{/* <div className="flex gap-10">
				<Button variant="outline" className="rounded-xl">
					Download Qupid
				</Button>
			</div> */}
			<div>
				<Drawer>
					<DrawerTrigger>
						<FaBars size={32} />
					</DrawerTrigger>
					<DrawerContent>
						{/* <DrawerHeader>
							<DrawerTitle>Are you absolutely sure?</DrawerTitle>
							<DrawerDescription>
								This action cannot be undone.
							</DrawerDescription>
						</DrawerHeader> */}
						<DrawerFooter>
							<Button variant={"outline"} className="">
								Sign Up
							</Button>
							<Button>Download On Android</Button>
							{/* <DrawerClose>
								<Button variant="outline">Cancel</Button>
							</DrawerClose> */}
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</div>
		</header>
	);
};
const PcNav = () => {
	return (
		<header className="w-full flex justify-between  items-center px-28 mt-5 absolute ">
			<Link to={"/"}>
				<img className="w-20" src={siteIcons.logo} alt="qupid logo" />
			</Link>
			<div className="flex gap-10">
				<Button className="rounded-xl">Sign Up</Button>
				<Button className="rounded-xl bg-transparent text-primary outline outline-1 outline-primary hover:bg-primary hover:text-white ">
					Download On Android
				</Button>
			</div>
		</header>
	);
};
