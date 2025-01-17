import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

const PrivacyPolicy = () => {
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
								Privacy Policy
							</BreadcrumbPage>
						</BreadcrumbItem>
					</BreadcrumbList>
				</Breadcrumb>
			</div>

			<section className="mt-2">
				<section>
					<h2>Effective Date: November 16, 2024</h2>
				</section>
				<section>
					<div>
						<p>
							At Qupid, operated by COVA Technology, we take your privacy
							seriously. This Privacy Policy outlines how we collect, use,
							disclose, and safeguard your personal information when you use our
							app, website, and services (collectively referred to as the
							"Services"). By using our Services, you agree to the collection
							and use of information in accordance with this policy.
						</p>
					</div>
					<div>
						<ul className="list-decimal ml-5 sm:ml-10">
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Information We Collect</h3>
								<h4>1.1 Personal Information</h4>
								<p>
									When you create an account or interact with our Services, we
									collect the following personal information:
								</p>
								<ul className="list-disc ml-5 sm:ml-10">
									<li>
										Account Information: Name, email address, password, date of
										birth (to ensure you are 18+), and profile details (e.g.,
										bio, photos).
									</li>
									<li>
										Communication: Messages, interactions, and any support
										inquiries you send us.
									</li>
									<li>
										Payment Information: Credit card details or other payment
										methods if you subscribe to paid features or make purchases
										on our platform.
									</li>
								</ul>

								<h4>1.2 Usage Data</h4>
								<p>
									We may automatically collect information about your usage of
									the Services, including:
								</p>
								<ul className="list-disc ml-5 sm:ml-10">
									<li>
										Device information (type, operating system, device
										identifiers)
									</li>
									<li>
										Log data (IP address, browser type, browser version, pages
										visited, time spent on pages)
									</li>
									<li>
										Location data (if location-based features are enabled)
									</li>
								</ul>
								<h4>1.3 Third-Party Information</h4>
								<p>
									If you link your Qupid account to third-party services (e.g.,
									Facebook, Google), we may collect information such as your
									name, profile picture, email, and other information authorized
									by you and the third-party service.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> How We Use Your Information</h3>

								<p>
									We use the information we collect for the following purposes:
								</p>
								<ul className="list-disc ml-5 sm:ml-10">
									<li>
										To Provide and Improve Services: To create and manage your
										account, provide match recommendations, and offer relevant
										content.
									</li>
									<li>
										Personalization: To customize your experience and provide
										you with advertisements and content that are more relevant
										to you.
									</li>
									<li>
										Communication: To send you notifications, updates, and
										marketing communications related to the Services.
									</li>
									<li>
										To Process Payments: To handle transactions and manage your
										subscription payments.
									</li>
									<li>
										Security: To ensure the security and integrity of the
										Services, protect against fraud, and comply with legal
										obligations.
									</li>
								</ul>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">How We Share Your Information</h3>

								<p>
									We do not sell your personal information to third parties.
									However, we may share your information in the following cases:
								</p>
								<h4>3.1 Service Providers</h4>
								<p>
									We may share your information with third-party service
									providers who help us operate our Services, such as payment
									processors, hosting services, customer support, and analytics
									providers. These providers are obligated to keep your
									information confidential.
								</p>

								<h4>3.2 Legal Compliance</h4>
								<p>
									We may disclose your information if required to do so by law
									or in response to a valid legal request (e.g., a subpoena or
									government inquiry).
								</p>
								<h4>3.3 Business Transfers</h4>
								<p>
									In the event of a merger, acquisition, or sale of assets, your
									personal information may be transferred to the new owner,
									subject to the terms of this Privacy Policy.
								</p>
								<h4>3.4 Public Profile Information</h4>
								<p>
									Your profile information (name, photos, and bio) may be
									visible to other users of Qupid. You can manage the visibility
									of your profile through your account settings.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">Data Retention</h3>

								<p>
									We will retain your personal information for as long as your
									account is active or as necessary to fulfill the purposes
									outlined in this Privacy Policy. If you wish to delete your
									account, you can do so at any time by following the steps in
									the app. We may retain certain information even after account
									deletion if required for legal, accounting, or security
									purposes.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Data Security</h3>

								<p>
									We implement technical and organizational measures to protect
									your personal information from unauthorized access,
									disclosure, alteration, or destruction. However, please be
									aware that no method of transmission over the internet or
									electronic storage is 100% secure, and we cannot guarantee
									absolute security.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Your Rights and Choices</h3>

								<p>
									Depending on your location, you may have the following rights
									regarding your personal information:
								</p>
								<ul>
									<li>
										Access: You can request a copy of the personal information
										we hold about you.
									</li>
									<li>
										Correction: You can request that we update or correct
										inaccurate or incomplete information.
									</li>
									<li>
										Deletion: You can request that we delete your personal
										information, subject to certain exceptions.
									</li>
									<li>
										Opt-Out of Marketing: You can opt out of receiving marketing
										communications from us by following the unsubscribe
										instructions in emails or adjusting your notification
										preferences in the app.
									</li>
								</ul>
								<p>
									To exercise any of these rights, please contact us at
									support@qupidapp.com.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">
									{" "}
									Cookies and Tracking Technologies
								</h3>

								<p>
									We use cookies and similar technologies to improve your
									experience on our Services. For more information on how we use
									cookies, please refer to our Cookie Policy.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">Children's Privacy</h3>

								<p>
									Our Services are not intended for children under the age of
									18, and we do not knowingly collect personal information from
									children. If we learn that we have collected personal
									information from a child under 18, we will take steps to
									delete that information as soon as possible.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> International Transfers</h3>

								<p>
									If you are accessing the Services from outside Nigeria, please
									note that your information may be transferred to, stored, and
									processed in Nigeria or other countries where our servers are
									located. By using our Services, you consent to the transfer of
									your information to these locations.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">
									Changes to This Privacy Policy
								</h3>

								<p>
									We may update this Privacy Policy from time to time. Any
									changes will be posted on this page with an updated "Effective
									Date." We encourage you to review this Privacy Policy
									periodically to stay informed about our data practices.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">Contact Us</h3>

								<p>
									If you have any questions or concerns about this Privacy
									Policy, or if you wish to exercise any of your rights
									regarding your personal information, please contact us at:{" "}
									<br />
									Email:{" "}
									<a className="underline" href="mailto: support@qupidapp.com">
										{" "}
										support@qupidapp.com
									</a>
								</p>
							</li>
						</ul>
					</div>
				</section>
			</section>
		</main>
	);
};
export default PrivacyPolicy;
