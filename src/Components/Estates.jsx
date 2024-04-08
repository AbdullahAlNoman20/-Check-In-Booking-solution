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
    <div>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Services.map((Services) => (
          <Service key={Service.id} Services={Services}></Service>
        ))}
      </div>
    </div>
  );
};

export default Estates;
