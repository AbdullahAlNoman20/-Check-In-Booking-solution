import "animate.css";
import { useEffect, useState } from "react";
import Service from "./Service";

const Estates = () => {
  const [Services, setServices] = useState([]);

  useEffect(() => {
    fetch("Service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-sky-900 text-white lg:p-5 pb-5">
      <div className="flex justify-center items-center flex-col p-14">
        <h1 className="font-bold text-4xl animate__animated animate__fadeInDown">
          Our Services
        </h1>
        <p>
          Check-In offers a premium selection of accommodations and dining
          experiences. Whether it's a relaxing stay at our hotels, a cozy night
          in our guesthouses, or a memorable meal at our restaurants, we're here
          to make your visit exceptional.
        </p>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {Services.map((Services) => (
          <Service key={Service.id} Services={Services}></Service>
        ))}
      </div>


      <div className="mt-5">
      <div className="p-6 py-12 bg-sky-800 dark:text-gray-50 rounded-xl">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to
				<br  className="sm:hidden" /> 30% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus Buy 1 Get 1 Free! Use code:</span>
				<span className="font-bold text-lg">BD24</span>
			</div>
			<a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-900 dark:text-gray-50 dark:border-gray-600">Book Now</a>
		</div>
	</div>
</div>
      </div>


    </div>
  );
};

export default Estates;
