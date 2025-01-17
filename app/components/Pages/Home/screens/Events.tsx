import siteImages from "~/assets/images/siteImages";
const Events = () => {
	return (
		<section className="px-2 sm:px-10 lg:px-20 bg-[#F5F5F5] py-20">
			<h2 className="text-center font-bold  text-3xl sm:text-5xl  mb-5 sm:mb-10">
				Events Near You—Discover Local Experiences
			</h2>
			<div className="flex flex-col sm:flex-row gap-5">
				<div className="w-full gap-5 flex flex-col justify-between order-2 sm:order-none">
					<div className="flex flex-col   gap-3">
						<h3 className="font-semibold text-xl">Live Music Performances</h3>
						<p>
							Experience electrifying live concerts and intimate acoustic
							sessions featuring your favorite artists and bands.
						</p>
					</div>
					<div className="flex flex-col  gap-3">
						<h3 className="font-semibold text-xl">
							Exclusive Celebrity Hangouts
						</h3>
						<p>
							Rub shoulders with stars at exclusive celebrity-hosted events,
							offering unique opportunities to mingle and connect.
						</p>
					</div>
				</div>
				<div className="w-full order-1 sm:order-none">
					<img className="w-full" src={siteImages.heroMobile} alt="" />
				</div>
				<div className="w-full flex flex-col justify-between order-3 sm:order-none">
					<div className="flex flex-col justify-between gap-3">
						<h3 className="font-semibold text-xl">Themed Parties</h3>
						<p>
							Step into exciting, themed gatherings like Friday music parties,
							all-white nights, or retro-inspired evenings for fun and
							connection.
						</p>
					</div>
					<div className="flex flex-col justify-between gap-3">
						<h3 className="font-semibold text-xl">Ladies-Only Socials</h3>
						<p>
							Unwind with like-minded women at special gatherings designed just
							for you, like spa nights, fitness classes, or wine tastings.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Events;
