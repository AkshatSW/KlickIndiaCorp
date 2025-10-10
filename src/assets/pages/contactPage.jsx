import React from "react";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import { motion } from "framer-motion";
import heroImg from "../../assets/2.png";

const contactMethods = [
	{
		icon: <Mail className="h-8 w-8 text-[#31487a]" />,
		title: "Email",
		info: (
			<a
				href="mailto:klickindiacorp@gmail.com"
				className="hover:text-[#31487a]"
			>
				klickindiacorp@gmail.com
			</a>
		),
	},
	{
		icon: <Phone className="h-8 w-8 text-[#31487a]" />,
		title: "Phone",
		info: (
			<a href="tel:+919873693425" className="hover:text-[#31487a]">
				+91 98736 93425
			</a>
		),
	},
	{
		icon: <MessageSquare className="h-8 w-8 text-[#31487a]" />,
		title: "WhatsApp",
		info: (
			<a
				href="https://wa.me/919873693425"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-[#31487a]"
			>
				Chat with us
			</a>
		),
	},
	{
		icon: <MapPin className="h-8 w-8 text-[#31487a]" />,
		title: "Location",
		info: <p>New Delhi, India</p>,
	},
];

const ContactPage = () => {
	return (
		<>
			{/* Hero Section */}
			<section
				style={{
					position: "relative",
					height: "75vh", // Changed from 50vh to match homepage
					backgroundImage: `url(${heroImg})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					color: "#fff",
					textAlign: "center",
				}}
			>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(to bottom, rgba(49, 72, 112, 0.85) 0%, rgba(49, 72, 112, 0.75) 35%, rgba(49, 72, 112, 0.75) 65%, rgba(49, 72, 112, 0.85) 100%)",
					}}
				/>
				<motion.h1
					initial={{ opacity: 0, y: 100, scale: 0.8 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{
						duration: 1.2,
						delay: 0.3,
						type: "spring",
						stiffness: 100,
						damping: 15,
					}}
					className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
					style={{
						fontFamily: "'Playfair Display', serif",
						fontWeight: 800,
						color: "#fff",
						letterSpacing: "-0.02em",
						maxWidth: "80%",
						zIndex: 1,
					}}
				>
					<motion.span
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					>
						Let's Create Something
					</motion.span>
					<br />
					<motion.span
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.7 }}
					>
						Extraordinary Together
					</motion.span>
				</motion.h1>
			</section>

			{/* Contact Info Cards */}
			<section className="py-20 bg-[#f9fafb]">
				<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{contactMethods.map((method, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: idx * 0.1 }}
							className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow"
						>
							<div className="bg-[#31487a]/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
								{method.icon}
							</div>
							<h3
								className="font-semibold mb-2 text-[#11132c]"
								style={{ fontFamily: "'Playfair Display', serif" }}
							>
								{method.title}
							</h3>
							<div
								className="text-[#555]"
								style={{ fontFamily: "'Poppins', sans-serif" }}
							>
								{method.info}
							</div>
						</motion.div>
					))}
				</div>

				{/* Map + Office Info */}
				<div className="grid lg:grid-cols-2 gap-12 mt-16 items-center max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h2
							className="text-3xl md:text-4xl font-bold mb-6 text-[#11132c]"
							style={{ fontFamily: "'Playfair Display', serif" }}
						>
							Visit Our Office
						</h2>
						<p
							className="text-[#555] mb-6 leading-relaxed"
							style={{ fontFamily: "'Poppins', sans-serif" }}
						>
							We're located in the heart of New Delhi, easily accessible from all
							major areas. Schedule an appointment to visit our office and discuss
							your project in detail with our team of experts.
						</p>
						<div className="space-y-4 mb-8">
							<div className="flex items-start space-x-3">
								<MapPin className="h-5 w-5 text-[#31487a] mt-1 flex-shrink-0" />
								<div>
									<p
										className="font-semibold text-[#11132c]"
										style={{ fontFamily: "'Playfair Display', serif" }}
									>
										Address
									</p>
									<p
										className="text-[#555]"
										style={{ fontFamily: "'Poppins', sans-serif" }}
									>
										R-138, Second Floor, GK-1,
										<br />
										Delhi - 110048
									</p>
								</div>
							</div>
							<div className="flex items-start space-x-3">
								<Phone className="h-5 w-5 text-[#31487a] mt-1 flex-shrink-0" />
								<div>
									<p
										className="font-semibold text-[#11132c]"
										style={{ fontFamily: "'Playfair Display', serif" }}
									>
										Business Hours
									</p>
									<p
										className="text-[#555]"
										style={{ fontFamily: "'Poppins', sans-serif" }}
									>
										Monday - Saturday: 9:00 AM - 6:00 PM
										<br />
										Sunday: Closed
									</p>
								</div>
							</div>
						</div>
						<a
							href="https://wa.me/919873693425"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block px-10 py-4 bg-[#31487a] text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
							style={{ fontFamily: "'Poppins', sans-serif" }}
						>
							Get Started Now!
						</a>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="overflow-hidden rounded-xl shadow-lg"
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192846!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sGK-1%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Klick India Corporation Location"
							className="h-96 w-full"
						/>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default ContactPage;
