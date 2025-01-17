import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

const SafetyTips = () => {
	return (
		<main className="min-h-screen pt-20 lg:pt-28 px-2 lg:px-28">
			<div>
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink href="/">Home</BreadcrumbLink>
						</BreadcrumbItem>
						<BreadcrumbSeparator />

						<BreadcrumbItem>
							<BreadcrumbPage className="text-primary">
								Safety Tips
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<div>
				<p>
					At Qupid, we are committed to helping you make meaningful connections
					in a safe and secure environment. While using our app, it's important
					to follow these safety tips to ensure your experience is enjoyable and
					secure. Whether you're new to online dating or a seasoned pro, these
					guidelines will help protect your privacy and safety.
				</p>

				<div>
					<ul className="list-decimal ml-5 sm:ml-10">
						<li>
							<h3 className="font-semibold">
								{" "}
								Protect Your Personal Information
							</h3>
							<p>Don’t Share Sensitive Information</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									Avoid sharing personal information like your home address,
									financial details, or passwords.
								</li>
								<li>
									Be cautious when sharing details about your work, family, or
									social media accounts.
								</li>
							</ul>
							<p>Use a Unique Username</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									We recommend using a username that doesn't give away too much
									personal information. Your full name and personal identifiers
									should be kept private until you feel comfortable.
								</li>
							</ul>
						</li>
						<li>
							<h3 className="font-semibold">
								{" "}
								Be Cautious When Meeting Someone New
							</h3>
							<p>Meet in Public Places</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									Always arrange your first meeting in a public place like a
									café, restaurant, or park. Public places offer safety in
									numbers, and you’re less likely to feel pressured.
								</li>
							</ul>
							<p>Tell a Friend</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									Let a close friend or family member know where you’re going,
									who you’re meeting, and when you plan to return. Share your
									date’s details (name, contact info, etc.) for extra peace of
									mind.
								</li>
							</ul>
							<p>Stay Sober and Alert</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									Stay in control and ensure your own safety by avoiding
									excessive drinking or any other substances that may impair
									your judgment during your meeting.
								</li>
							</ul>
						</li>
						<li>
							<h3 className="font-semibold"> Trust Your Instincts</h3>
							<p>Listen to Your Gut</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									If something feels off or makes you uncomfortable, trust your
									instincts. It’s okay to leave the date early or block someone
									on the app if they make you feel uneasy.
								</li>
							</ul>
							<p>Don’t Feel Pressured</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									If anyone pressures you for personal information, explicit
									photos, or any actions you're not comfortable with, feel free
									to block them and report their behavior to us.
								</li>
							</ul>
						</li>
						<li>
							<h3 className="font-semibold">
								{" "}
								Be Careful With Photos and Media
							</h3>
							<p>Think Before You Share</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									Be cautious about sharing intimate photos or videos. What you
									send could be saved, shared, or used against you later.
								</li>
							</ul>
							<p>Report Suspicious Photos</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									If you receive any inappropriate or suspicious images, please
									report them immediately through the app. We take such matters
									seriously and will take appropriate action.
								</li>
							</ul>
						</li>
						<li>
							<h3 className="font-semibold">Stay Safe Online</h3>
							<p>Keep Your Conversations on Qupid</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									To protect your privacy, keep your conversations within the
									Qupid app. Avoid sharing your personal phone number, email
									address, or social media accounts too early in your
									conversations.
								</li>
							</ul>
							<p>Report Inappropriate Behavior</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									If you encounter anyone who violates our community guidelines
									or engages in harmful behavior, report them through the app.
									Our team will investigate and take appropriate action.
								</li>
							</ul>
						</li>
						<li>
							<h3 className="font-semibold">Respect Boundaries</h3>
							<p>Be Honest and Respectful</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									Always treat others with kindness and respect. Consent is key
									in any interaction, both online and offline. If someone says
									they’re not interested or that they’re uncomfortable with
									something, respect their wishes.
								</li>
							</ul>
							<p>End the Conversation If Needed</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									If someone is not respecting your boundaries or making you
									feel uncomfortable, you have the right to stop talking to
									them, block them, and report their behavior.
								</li>
							</ul>
						</li>
						<li>
							<h3 className="font-semibold">Protect Your Account</h3>
							<p>Use a Strong Password</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									Use a strong password to protect your Qupid account. We
									recommend using a combination of upper and lower case letters,
									numbers, and symbols.
								</li>
							</ul>
							<p>Enable Two-Factor Authentication</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									For added security, consider enabling two-factor
									authentication (2FA) on your Qupid account. This adds an extra
									layer of protection to your profile.
								</li>
							</ul>
						</li>
						<li>
							<h3 className="font-semibold">
								{" "}
								Dealing with Harassment or Abuse
							</h3>
							<p>
								If you experience harassment or any form of abuse, please don’t
								hesitate to take action:
							</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									Block and Report: If someone is harassing you, you can block
									them immediately. You can also report their behavior to Qupid
									for investigation.
								</li>
								<li>
									Seek Support: If you ever feel unsafe or threatened, don’t
									hesitate to contact local authorities. Your safety is our top
									priority.
								</li>
							</ul>
						</li>
						<li>
							<h3 className="font-semibold">Stay Informed</h3>
							<p>Read Our Terms and Privacy Policy</p>
							<ul className="list-disc ml-5 sm:ml-10">
								<li>
									Familiarize yourself with Qupid’s Terms and Conditions and
									Privacy Policy to understand how we protect your data and your
									rights as a user. These documents provide important
									information about your safety on our platform.
								</li>
							</ul>
						</li>
						<li>
							<h3 className="font-semibold"> Contact Us</h3>
							<p>
								If you have any concerns or questions regarding your safety or
								the safety of others, please contact our support team at: <br />
								Email:
								<a className="underline" href="mailto:support@qupidapp.com">
									support@qupidapp.com
								</a>
							</p>
						</li>
					</ul>
					<p className="my-2 mt-5">
						We are here to assist you and ensure that your experience on Qupid
						is safe and enjoyable.
					</p>
					<p className="my-2 mb-10">
						By following these simple safety tips, you can have a fun and secure
						experience while using Qupid. Remember, your safety is always our
						top priority!
					</p>
				</div>
			</div>
		</main>
	);
};
export default SafetyTips;
