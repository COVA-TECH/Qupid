// import type { Route } from "./+types/home";
import HomePage from "~/components/Pages/Home/Home";

// export function meta({}: Route.MetaArgs) {
// 	return [
// 		{ title: "Qupid app" },
// 		{ name: "description", content: "Qupid app description" },
// 	];
// }

export interface HomeProps {
	title: string;
	description: string;
}
export default function Home() {
	return (
		<>
			<HomePage />
		</>
	);
}
