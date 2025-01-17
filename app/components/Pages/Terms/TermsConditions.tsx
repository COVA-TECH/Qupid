import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

const TermsConditions = () => {
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
								Terms and Conditions
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
							Welcome to Qupid! By accessing or using our services, you agree to
							be bound by these Terms and Conditions. Please read them
							carefully. If you do not agree, you may not use Qupid.
						</p>
					</div>
					<div>
						<ul className="list-decimal ml-5 sm:ml-10">
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Acceptance of Terms</h3>
								<p>
									1.1 These Terms and Conditions (the "Terms") govern your use
									of Qupid, a dating app operated by COVA Technology, located in
									Nigeria.
								</p>
								<p>
									1.2 By creating an account or using our services, you confirm
									that you are at least 18 years old and capable of entering
									into a legally binding agreement.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> User Obligations</h3>
								<p>
									2.1 You are responsible for maintaining the confidentiality of
									your account credentials and for all activities that occur
									under your account.
								</p>
								<p>
									2.2 You agree to provide accurate and truthful information
									when creating your profile.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Your Content and Licensing</h3>
								<p>
									3.1 You own all of the content ("Your Content") you provide to
									Qupid.
								</p>
								<p>
									3.2 By creating an account, you grant Qupid a worldwide,
									perpetual, transferable, sub-licensable, royalty-free right
									and license to:
									<ul className="list-disc ml-4">
										<li>
											Host, store, use, copy, display, reproduce, adapt, edit,
											publish, translate, modify, reformat, incorporate into
											other works, advertise, distribute, and otherwise make
											available to the general public Your Content, including
											any information you authorize us to access from Facebook
											or other third-party sources (if applicable).
										</li>
										<li>
											Use Your Content in whole or in part, and in any format or
											medium currently known or developed in the future.
										</li>
									</ul>
								</p>
								<p>
									3.3 Qupid’s license to Your Content is non-exclusive, except
									that our license shall be exclusive with respect to derivative
									works created through use of our Services. For example, Qupid
									would have an exclusive license to screenshots of our Services
									that include Your Content.
								</p>
								<p>
									3.4 To prevent unauthorized use of Your Content outside of our
									Services, you authorize Qupid to act on your behalf concerning
									infringing uses of Your Content by other users or third
									parties.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> External Service Purchases</h3>

								<p>
									4.1 When making a purchase on the Service, you may have the
									option to pay through an External Service, such as with your
									Apple ID or Google Play account ("your External Service
									Account"). Your External Service Account will be charged for
									the purchase in accordance with
									<ul className="list-disc ml-4">
										<li>The terms disclosed to you at the time of purchase.</li>
										<li>
											The general terms applicable to your External Service
											Account.
										</li>
									</ul>
								</p>
								<p>
									4.2 Subscriptions automatically renew until you cancel. If
									your subscription was made through an External Service, you
									must manage the cancellation through your External Service
									Account.
								</p>
								<p>
									4.3 Some External Services may charge sales tax, depending on
									where you live. Tax rates and regulations may change over
									time.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Internal Service Purchases</h3>

								<p>
									5.1 Internal Purchases, including subscriptions, are processed
									using the Payment Method you provide on the Website or App.
									Subscriptions automatically renew until you cancel.
								</p>
								<p>
									5.2 If you make an Internal Purchase, you agree to pay the
									prices displayed to you for the Services you've selected, as
									well as any sales or similar taxes that may be imposed on your
									payments (and as may change from time to time). You authorize
									Qupid to charge the payment method you provide (your "Payment
									Method").
								</p>
								<p>
									5.3 Qupid may correct any billing errors or mistakes even if
									we have already requested or received payment.
								</p>
								<p>
									5.4 If you initiate a chargeback or otherwise reverse a
									payment made with your Payment Method, Qupid may terminate
									your account immediately at its sole discretion, on the basis
									that you have determined that you do not want a Qupid
									subscription. In the event that your chargeback or payment
									reversal is overturned, please contact Customer Care.{" "}
								</p>
								<p>
									5.5 If your Internal Purchase includes an automatically
									renewing subscription, your Payment Method will continue to be
									periodically charged for the subscription until you cancel.
									After your initial subscription commitment period, and again
									after any subsequent subscription period, your subscription
									will automatically continue for the price and time period you
									agreed to when subscribing, until you cancel.
								</p>
								<p>
									5.6 To cancel a subscription, log in to the Website or App and
									go to the Account section. If you cancel a subscription, you
									may continue to use the canceled service until the end of your
									then-current subscription term. The subscription will not be
									renewed when your then-current term expires.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Refund Policy</h3>

								<p>
									6.1 Generally, all purchases are final and nonrefundable, and
									there are no refunds or credits for partially used periods.
								</p>

								<p>
									6.2 Exceptions to this policy will only be made if the laws
									applicable in your jurisdiction explicitly provide for
									refunds.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">
									{" "}
									Account Termination, Suspension, and Deletion
								</h3>

								<p>
									7.1 If you no longer wish to use our Services, or if we
									terminate your account for any reason, here's what you need to
									know:
									<ul className="ml-5 list-disc">
										<li>
											You can delete your account at any time by logging into
											the Website or App, going to "Settings," clicking "Delete
											Account," and following the instructions to complete the
											deletion process.
										</li>
										<li>
											However, you will need to cancel/manage any External
											Service Purchases through your External Service Account
											(e.g., iTunes, Google Play) to avoid additional billing.
										</li>
									</ul>
								</p>

								<p>
									7.2 Qupid reserves the right to investigate and, if
									appropriate, suspend or terminate your account without a
									refund if Qupid believes that you have violated these Terms,
									misused our Services, or behaved in a way that Qupid regards
									as inappropriate or unlawful, on or off our Services.
								</p>
								<p>
									7.3 We reserve the right to make use of any personal,
									technological, legal, or other means available to enforce the
									Terms, at any time without liability and without the
									obligation to give you prior notice. This includes, but is not
									limited to, preventing you from accessing the Services.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">8. Prohibited Conduct</h3>

								<p>
									8.1 You may not use Qupid to:
									<ul className="ml-5 list-disc">
										<li>
											Post or share illegal, offensive, or harmful content.
										</li>
										<li>Harass, stalk, or intimidate other users.</li>
										<li>
											Promote commercial activities without prior authorization.
										</li>
									</ul>
								</p>

								<p>
									8.2 We reserve the right to suspend or terminate accounts
									violating these rules.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">Intellectual Property</h3>

								<p>
									9.1 Any text, content, graphics, user interfaces, trademarks,
									logos, sounds, artwork, images, and other intellectual
									property appearing on our Services is owned, controlled, or
									licensed by us and protected by copyright, trademark, and
									other intellectual property law rights.
								</p>

								<p>
									9.2 All rights, title, and interest in and to Our Content
									remain with us at all times. Unauthorized use of any such
									intellectual property is strictly prohibited.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold">Privacy and Data Usage</h3>

								<p>
									10.1 Qupid values your privacy. Please review our Privacy
									Policy to understand how we collect, use, and protect your
									data.
								</p>

								<p>
									10.2 By using Qupid, you consent to the processing of your
									data in compliance with Nigerian data protection laws
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Disclaimer of Liability</h3>

								<p>
									11.1 Qupid is provided "as is" without warranties of any kind.
									We do not guarantee matches or the accuracy of user profiles.
								</p>

								<p>
									11.2 We are not liable for any damages resulting from
									interactions between users or unauthorized access to your
									account.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Modifications to the Terms</h3>

								<p>
									12.1 We may update these Terms periodically. Changes will take
									effect immediately upon being posted in the app or website.
								</p>
							</li>
							<li className="mt-4 leading-6">
								<h3 className="font-semibold"> Contact Us</h3>

								<p>
									If you have any questions about these Terms, please contact
									our support team at support@qupidapp.com.
								</p>
							</li>
						</ul>
					</div>
				</section>
				<p className="my-10">
					By using Qupid, you confirm that you are at least 18 years old and
					agree to these Terms and Conditions. We look forward to helping you
					connect!
				</p>
			</section>
		</main>
	);
};
export default TermsConditions;
