import Events from "./screens/Events";
import Hero from "./screens/Hero";
import HowItWorks from "./screens/HowItWorks";
import MeetConnect from "./screens/MeetConnect";
import More from "./screens/More";

const Home = () => {
	return (
		<>
			<Hero />
			<section className="mb-20 flex flex-col gap-20  ">
				<MeetConnect />
				<HowItWorks />
				<Events />
				<More />
			</section>
		</>
	);
};
export default Home;
