import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Slider.css';

const Slider = () => {
    return (
        <div className="m-5 " data-aos="zoom-in" data-aos-duration="2000">

      <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >


        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/PZGczTj/p1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Stay, Dine, Explore</h1>
      <p className="mb-5">Experience the best of Bangladesh with Check-In. From luxury stays to gourmet dining, your journey of discovery starts here.</p>
      <button className="btn btn-outline btn-warning">Book Now</button>
    </div>
  </div>
</div></SwiperSlide>
        <SwiperSlide><div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/h8KvPmV/p2.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Stay, Dine, Explore</h1>
      <p className="mb-5">Experience the best of Bangladesh with Check-In. From luxury stays to gourmet dining, your journey of discovery starts here.</p>
      <button className="btn btn-outline btn-warning">Book Now</button>
    </div>
  </div>
</div></SwiperSlide>

        
      </Swiper>


        </div>
    );
};

export default Slider;