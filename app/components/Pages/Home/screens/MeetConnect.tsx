import siteIcons from "~/assets/icons/siteIcons";
import siteImages from "~/assets/images/siteImages";

const cardComps = [
	{
		icon: siteIcons.hearthCircle,
		cardTitle: "Match with Like-Minded People",
		cardText: `Discover profiles of individuals who share your interests, values, and goals—whether you're looking for love or a new best friend`,
	},
	{
		icon: siteIcons.eventIcon,
		cardTitle: "Join Events That Inspire You",
		cardText: `Explore local gatherings, from hobby-based meetups to exciting social events, tailored to your interests and lifestyle`,
	},
	{
		icon: siteIcons.messageIcon,
		cardTitle: "Chat and Build Connections",
		cardText: `Easily start conversations with people you connect with, turning simple chats into meaningful relationships that grow over time`,
	},
];
const designedFor = [
	{
		cardTitle: "Christian Dating",
		cardText: `Meet individuals who share your faith and values, making it easy to build connections with purpose and trust`,
	},
	{
		cardTitle: "Ladies-Only Fun Nights",
		cardText: `Exclusive spaces for women to bond, relax, and have fun through shared activities and conversations`,
	},
	{
		cardTitle: "Group Hangouts",
		cardText: `Join group discussions and activities that foster natural connections in a welcoming and supportive environment`,
	},
];

const MeetConnect = () => {
	return (
		<section className="px-2 sm:px-10 lg:px-20 min-h-screen  ">
			<h2 className="font-bold text-center  text-3xl sm:text-5xl  mb-10">
				Meet, Connect, and Belong
			</h2>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
				{cardComps.map((card, index) => {
					return (
						<div
							key={index}
							className="flex flex-col gap-2 bg-[#F5F5F5] shadow-lg rounded-xl p-2 px-5 py-10"
						>
							<img className="w-12" src={card.icon} alt="" />
							<h3 className="font-bold">{card.cardTitle}</h3>
							<p className="font-light">{card.cardText}</p>
						</div>
					);
				})}
			</div>

			<DesignedToHelp />
		</section>
	);
};
export default MeetConnect;

const DesignedToHelp = () => {
	return (
		<div className=" flex flex-col sm:flex-row  mt-10 lg:mt-20">
			<div className="w-full  flex justify-center items-center ">
				<img className="lg:h-[40rem]" src={siteImages.app1} alt="qupid app" />
			</div>
			<div className="w-full ">
				<h3 className="font-bold text-3xl lg:text-6xl">
					Designed to Help You <br /> Connect in Every Way.
				</h3>
				<div className="flex flex-col gap-4   mt-3 ">
					{designedFor.map((item, index) => {
						return (
							<div
								key={index}
								className="bg-[#F5F5F5] rounded-lg flex flex-col gap-2 py-10 px-4 sm:px-5  "
							>
								<h5 className="font-bold">{item.cardTitle}</h5>
								<p>{item.cardText}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
