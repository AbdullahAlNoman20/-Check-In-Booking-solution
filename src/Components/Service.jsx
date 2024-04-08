const Service = ({ Services }) => {
  const {
    image,
    title,
    description,
    rating,
    price,
    location,
    booking_status,
    facility,
  } = Services;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>

          <p className="">
            {Services.facility.map((facilities) => (
              <span key={Services.id} className="p-1 text-red-900">
                #{facilities}
              </span>
            ))}
          </p>

          <p>
            <i className="fa-regular fa-bookmark"></i> Booking Status:{" "}
            {booking_status}
          </p>
          <div className="font-bold w-full flex items-center justify-between">
            <p>
              Price: <i className="fa-solid fa-dollar-sign"></i> {price}
            </p>
            <p>
              Rating: {rating} <i className="fa-solid fa-star"></i>
            </p>
          </div>
          <p>
            <i className="fa-solid fa-location-dot"></i> Location: {location}
          </p>
          <div className="card-actions w-full">
            <button className="btn btn-outline btn-warning w-full">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
