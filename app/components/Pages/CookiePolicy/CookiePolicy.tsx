import { Link } from "react-router";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

const CookiePolicy = () => {
	return (
		<main className="min-h-screen pt-20 lg:pt-28 px-2 lg:px-28">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />

					<BreadcrumbItem>
						<BreadcrumbPage className="text-primary">
							Cookie Policy
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<section>
				<section>
					<h2>Effective Date: November 16, 2024</h2>
				</section>
				<section>
					<div>
						<p>
							This Cookie Policy explains how Qupid, operated by COVA
							Technology, uses cookies and similar technologies to collect
							information when you use our services, including our mobile
							application and website (the "Services"). By using our Services,
							you agree to the use of cookies as outlined in this policy.
						</p>
					</div>
					<div>
						<ul className="list-decimal ml-5 sm:ml-10">
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> What Are Cookies?</h3>
								<p>
									Cookies are small text files that are stored on your device
									(computer, mobile, tablet, etc.) when you visit a website or
									use an app. These files are designed to help the website or
									app remember your preferences, activities, and other
									information for a smoother user experience.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Types of Cookies We Use</h3>
								<ul>
									<li>
										<h4> 2.1 Essential Cookies</h4>
										<p>
											These cookies are necessary for the operation of our
											Services. Without these cookies, certain features such as
											account login, security, and personalized content may not
											be available.
										</p>
									</li>
									<li>
										<h4> 2.2 Functional Cookies</h4>
										<p>
											Functional cookies help enhance your experience by
											remembering your preferences and settings. For example,
											they may remember your language or region settings to
											provide a customized experience.
										</p>
									</li>
									<li>
										<h4> 2.3 Analytical/Performance Cookies</h4>
										<p>
											These cookies collect information about how users interact
											with our Services, such as the pages they visit and the
											time they spend on the app or website. This helps us
											improve our Services by analyzing trends and usage
											patterns.
										</p>
									</li>
									<li>
										<h4> 2.4 Targeting/Advertising Cookies</h4>
										<p>
											Targeting cookies are used to deliver advertisements that
											are more relevant to you and your interests. They may also
											limit the number of times you see an advertisement and
											help measure the effectiveness of advertising campaigns.
											These cookies are usually placed by third-party
											advertising networks.
										</p>
									</li>
									<li>
										<h4>2.5 Third-Party Cookies</h4>
										<p>
											We may use third-party cookies from services such as
											Google Analytics, Facebook, and other social media
											platforms to analyze usage and deliver targeted
											advertisements. These third parties may track your
											activity on other websites and apps to serve personalized
											ads.
										</p>
									</li>
								</ul>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> How We Use Cookies</h3>
								<p>We use cookies to:</p>
								<ul className="list-disc ml-5 sm:ml-10">
									<li>
										Ensure the functionality of our Services and provide you
										with a seamless user experience.
									</li>
									<li>
										Personalize content and advertisements based on your
										preferences and behavior.
									</li>
									<li>
										Analyze website and app usage to improve our Services and
										troubleshoot any technical issues.
									</li>
									<li>
										Track your interactions to improve our marketing strategies
										and provide tailored advertising.
									</li>
								</ul>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Managing Cookies</h3>
								<h4>4.1 Cookie Settings</h4>
								<p>
									Most browsers allow you to control cookies through their
									settings. You can disable or delete cookies, block certain
									types, or even set alerts when a cookie is being placed on
									your device. However, please note that disabling cookies may
									affect the functionality and performance of the Services.
								</p>
								<h4>4.2 Opt-Out of Targeted Advertising</h4>
								<p>
									You can opt out of personalized advertisements by visiting the
									following links:
								</p>
								<ul className="list-disc ml-5 sm:ml-10">
									<li className="underline">
										<a className="" href="https://www.google.com/settings/ads">
											Google Ad Settings
										</a>
									</li>
									<li className="underline">
										<a
											className=""
											href="https://www.facebook.com/ads/preferences"
										>
											Facebook Ad Preferences
										</a>
									</li>
									<li>Network Advertising Initiative</li>
								</ul>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Data Privacy and Your Rights</h3>

								<p>
									We are committed to protecting your privacy and the personal
									data we collect through cookies. For more information about
									how we collect, use, and protect your data, please refer to
									our{" "}
									<Link className="underline" to={"/privacy-policy"}>
										Privacy Policy
									</Link>
									.
								</p>
								<p>
									If you have any questions about how we use cookies or your
									rights, feel free to contact us at support@qupidapp.com.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">Changes to This Cookie Policy</h3>

								<p>
									We may update this Cookie Policy from time to time. Any
									changes will be posted here with an updated "Effective Date."
									We encourage you to review this policy periodically to stay
									informed about our cookie practices.
								</p>
							</li>
						</ul>
						<p>
							By continuing to use Qupid, you consent to our use of cookies as
							described in this policy.
						</p>
					</div>
				</section>
			</section>
		</main>
	);
};
export default CookiePolicy;
