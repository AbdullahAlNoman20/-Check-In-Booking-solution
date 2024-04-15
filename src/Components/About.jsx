import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="p-8 bg-sky-900 ">
			<Helmet>
                 <title>Check-In | About</title>
            </Helmet>
        
    
  <section className=" dark:text-white">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3"data-aos-duration="1000"
          data-aos="fade-right">
				<div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
					<h3 className="text-3xl font-semibold">Our Essence and Promise</h3>
					<span className="text-sm font-bold tracking-wider uppercase dark:text-gray-300">Embark on a journey with Check-In, where exceptional hospitality, dedication to quality, and a commitment to sustainability and community define every stay.</span>
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600"data-aos-duration="1000"
          data-aos="fade-left">
						<h3 className="text-xl font-semibold tracking-wide">Our Story and Vision</h3>
						<p className="mt-3">Share the journey of how "Check-In" came to be, focusing on the passion and vision behind your brand. Highlight your commitment to providing exceptional hospitality experiences across Bangladesh, from luxurious hotels to quaint guesthouses and exquisite dining options. Emphasize your dedication to creating unforgettable moments for every guest, showcasing your understanding of the intricate balance between local charm and world-class service.</p>
					</div>
					<div data-aos-duration="2000"
          data-aos="fade-left" className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">Commitment to Quality and Service</h3>
						<p className="mt-3">Detail your unwavering commitment to quality, from the meticulously designed guest rooms to the carefully curated menus in your restaurants. Discuss how you prioritize guest satisfaction through attentive service, continuous improvement, and by going above and beyond in every aspect of the hospitality experience. Mention any awards, recognitions, or guest testimonials that reflect your high standards and the success of your approach.</p>
					</div>
					<div data-aos-duration="2500"
          data-aos="fade-left" className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
						<h3 className="text-xl font-semibold tracking-wide">Sustainability and Community Engagement</h3>
						
						<p className="mt-3">Explain your approach to sustainability, how your properties and operations are designed to minimize environmental impact, and any initiatives you're part of to promote eco-friendly tourism. Additionally, highlight your engagement with the local community, such as sourcing ingredients from local farmers, supporting local artisans, or contributing to community projects. This not only demonstrates your business's responsibility but also connects guests with the rich culture and heritage of Bangladesh.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>    
    
    
    
    
    
<section className=" dark:text-white mt-10">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-300">Find quick answers to your most pressing questions about Check-In's services, facilities, and policies, ensuring a hassle-free experience.</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg"data-aos-duration="1000"
          data-aos="fade-right">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Q1: Can I modify or cancel my booking after it's been made?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">A1: Yes, you can modify or cancel your booking directly through your user account on our website. For specific conditions and potential charges related to cancellations or modifications, please refer to our booking terms and conditions.</p>
			</details>
			<details className="w-full border rounded-lg"data-aos-duration="2000"
          data-aos="fade-right">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Q2: Are there any benefits to creating an account on the Check-In website?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">A2: Absolutely! Creating an account allows you to manage your bookings easily, save your preferences, access exclusive deals, and join our loyalty program for even more benefits.</p>
			</details>
			<details className="w-full border rounded-lg"data-aos-duration="2500"
          data-aos="fade-right">
				<summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Q3: How can I ensure my stay is environmentally friendly?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">A3: We're committed to sustainability. You can participate by opting out of daily linen changes, using water responsibly, and joining our community and environmental initiatives during your stay.</p>
			</details>
		</div>
	</div>
</section>   
    

  
    
    
  <div className="mt-10 grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2" data-aos-duration="1000"
          data-aos="fade-right">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Get in Touch with Check-In</h2>
			<div className="dark:text-gray-600">Reach out to us for any inquiries, reservations, or feedback - we're here to ensure your journey is seamless and memorable.</div>
		</div>
		<img src="https://i.ibb.co/PZGczTj/p1.jpg" alt="" className="p-6 h-52 md:h-64" data-aos-duration="2000"
          data-aos="fade-right" />
	</div>
	<form noValidate="" className="space-y-6">
		<div data-aos-duration="1000"
          data-aos="fade-left">
			<label htmlFor="name" className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="border w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div data-aos-duration="2000"
          data-aos="fade-left">
			<label htmlFor="email" className="text-sm">Email</label>
			<input id="email" type="email" className="border w-full p-3 rounded dark:bg-gray-100" />
		</div>
		<div data-aos-duration="2500"
          data-aos="fade-left">
			<label htmlFor="message" className="text-sm">Message</label>
			<textarea id="message" rows="3" className="border w-full p-3 rounded dark:bg-gray-100"></textarea>
		</div>
		<button data-aos-duration="2000"
          data-aos="fade-left" type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
	</form>
</div>   
    
    

 

        </div>
    );
};

export default About;