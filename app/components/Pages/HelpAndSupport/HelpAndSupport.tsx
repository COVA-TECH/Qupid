import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
const HelpAndSupport = () => {
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
								Help And Support
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<section className="mt-2">
				<section>
					<div>
						<p>
							Welcome to the Qupid Help Center! We’re here to assist you with
							any questions or issues you may have while using our app. Whether
							you need help with account setup, subscription management, or
							troubleshooting, you’ll find the answers you need here.
						</p>
					</div>
					<div>
						<ul className="list-decimal ml-5 sm:ml-10">
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Getting Started with Qupid</h3>
								<h4>How do I create an account?</h4>
								<p>To create an account on Qupid, follow these simple steps:</p>
								<ul className="list-decimal ml-5">
									<li>Open the Qupid app or visit our website.</li>
									<li>Click on the Sign Up button.</li>
									<li>
										Enter your name, email address, date of birth (must be 18+),
										and create a secure password.
									</li>
									<li>
										You’ll receive a confirmation email to verify your account.
										Click the link in the email to complete your registration.
									</li>
									<li>
										Set up your profile by uploading a photo and writing a short
										bio to introduce yourself!
									</li>
								</ul>

								<h4 className=""> How do I reset my password?</h4>
								<p>If you've forgotten your password, follow these steps:</p>
								<ul className="list-decimal ml-5">
									<li>Go to the Login page and click Forgot Password.</li>
									<li>
										Enter the email address associated with your Qupid account.
									</li>
									<li>
										We’ll send a password reset link to your inbox. Follow the
										instructions to create a new password.
									</li>
								</ul>
								<h4 className=""> How do I update my profile?</h4>
								<p>To update your profile:</p>
								<ul className="list-decimal ml-5">
									<li>Open the app and log in.</li>
									<li>Go to Settings.</li>
									<li>
										Edit your name, bio, photos, and preferences as needed.
									</li>
									<li>Save the changes to update your profile!</li>
								</ul>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Managing Your Account</h3>
								<h4>How do I delete my account?</h4>
								<p>To delete your Qupid account:</p>
								<ul className="list-decimal ml-5">
									<li>Log in to your Qupid account.</li>
									<li>Go to Settings.</li>
									<li>
										Click on Delete Account and follow the instructions.Please
										note that deleting your account is permanent and cannot be
										undone.
									</li>
								</ul>

								<h3 className="font-semibold">
									How do I manage my notifications?
								</h3>
								<h4>To manage your notifications:</h4>

								<ul className="list-decimal ml-5">
									<li>Open the Qupid app and go to Settings.</li>
									<li>Select Notifications.</li>
									<li>
										Choose whether you want to receive push notifications, email
										alerts, or both.
									</li>
								</ul>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Subscriptions and Payments</h3>
								<h4>How do I cancel my subscription?</h4>
								<p>To cancel your subscription:</p>
								<ul className="list-decimal ml-5">
									<li>Go to Settings within the app.</li>
									<li>Navigate to Subscription.</li>
									<li>Follow the instructions to cancel your subscription.</li>
									<li>
										Your subscription will remain active until the end of your
										current billing cycle.
									</li>
								</ul>

								<h3 className="font-semibold">
									How do I update my payment method?
								</h3>
								<h4>To update your payment method:</h4>

								<ul className="list-decimal ml-5">
									<li>Open the app and go to Settings.</li>
									<li>Select Payment Methods.</li>
									<li>Enter your new payment details and save the changes.</li>
								</ul>
								<h3 className="font-semibold">
									Can I get a refund for my subscription?
								</h3>
								<p>
									All purchases are generally final and non-refundable. However,
									if you believe there was an error with your subscription or
									payment, please contact our support team, and we’ll
									investigate.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">
									Technical Issues and Troubleshooting
								</h3>
								<h4>Why can't I log into my account?</h4>
								<p>If you're unable to log in, check the following:</p>
								<ul className="list-disc ml-5">
									<li>
										Ensure you’re entering the correct email and password.
									</li>
									<li>Check if your internet connection is stable.</li>
									<li>Try resetting your password if needed.</li>
								</ul>
								<p>
									If the issue persists, please reach out to our support team
									for further assistance.
								</p>

								<h3 className="font-semibold">
									The app is crashing. What should I do?
								</h3>
								<h4>If Qupid is crashing or freezing:</h4>

								<ul className="list-decimal ml-5">
									<li>Ensure your app is updated to the latest version.</li>
									<li>Restart your device.</li>
									<li>
										Try reinstalling the app.If the issue continues, contact our
										support team for troubleshooting.
									</li>
								</ul>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">Privacy & Security</h3>
								<h4>How does Qupid protect my data?</h4>
								<p>
									At Qupid, your privacy and security are our top priority. We
									use advanced encryption technology to protect your personal
									information and ensure that your interactions on the app are
									safe and secure.For more details, please read our{" "}
									<span className="underline">Privacy Policy.</span>
								</p>

								<h3>How can I report suspicious activity or users?</h3>
								<p>
									If you come across suspicious activity or someone violating
									our Terms of Service:
								</p>

								<ul className="list-decimal ml-5">
									<li>Go to the user’s profile.</li>
									<li>
										Tap the Report button and select the reason for your report.
									</li>
									<li>We’ll review the report and take appropriate action.</li>
								</ul>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Contacting Support</h3>
								<h4>
									If you need further assistance or have a question that isn't
									answered here, our support team is ready to help.
								</h4>
								<p>Email Support:</p>
								<p>
									For help with account issues, billing inquiries, or technical
									problems, please contact us at{" "}
									<a className="underline" href="mailto:support@qupidapp.com">
										support@qupidapp.com.
									</a>
								</p>
								<p>We strive to respond to all inquiries within 24-48 hours.</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">
									{" "}
									Frequently Asked Questions (FAQs)
								</h3>
								<p>Here are some common questions we receive:</p>
								<ul>
									<li>
										Q: How do I make new connections on Qupid?
										<br />
										A: Use the app’s matching algorithm to find people who share
										your interests. You can swipe through profiles, send likes,
										and chat with others to make meaningful connections.
									</li>
									<li>
										Q: Can I hide my profile from others?
										<br />
										A: Yes, you can hide your profile from other users by
										adjusting your Profile Visibility in the Settings.
									</li>
									<li>
										Q: Is Qupid available on all devices?
										<br />
										A: Yes, Qupid is available for both Android and iOS devices.
										You can download the app from Google Play or the Apple App
										Store.
									</li>
								</ul>
							</li>

							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Additional Resources</h3>
								<ul className="list-disc ml-5">
									<li>Privacy policy</li>
									<li>Terms and conditions</li>
									<li>Cookie policy</li>
								</ul>
							</li>
						</ul>
					</div>
				</section>
				<p className="my-10">
					We hope this Help Center provides you with all the information you
					need! If you have any other questions, don’t hesitate to contact us.
				</p>
				<p>Thank you for using Qupid!</p>
			</section>
		</main>
	);
};
export default HelpAndSupport;
