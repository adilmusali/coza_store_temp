import React from "react";
import { Navigation, A11y } from 'swiper';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <section>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className='bg-cover bg-center h-[100vh] bg-[url("https://preview.colorlib.com/theme/cozastore/images/slide-01.jpg.webp")]'>
            <div className="flex flex-col p-[350px] tracking-widest">
              <p className="text-[23px]">Women Collection 2018</p>
              <h2 className="text-[50px] uppercase">new season</h2>
              <div>
                <Link to={"/add"}>
                  <button className="bg-blue-500 hover:bg-blue-700 mt-[30px] transition duration-300 text-white font-bold py-3 px-[35px] rounded-full uppercase">
                    shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-cover bg-center h-[100vh] bg-[url("https://preview.colorlib.com/theme/cozastore/images/slide-02.jpg.webp")]'>
            <div className="flex flex-col p-[350px] tracking-widest">
              <p className="text-[23px]">Men New-Season</p>
              <h2 className="text-[50px] uppercase">Jackets&Coats</h2>
              <div>
                <Link to={"/add"}>
                  <button className="bg-blue-500 hover:bg-blue-700 mt-[30px] transition duration-300 text-white font-bold py-3 px-[35px] rounded-full uppercase">
                    shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='bg-cover bg-center h-[100vh] bg-[url("https://preview.colorlib.com/theme/cozastore/images/slide-03.jpg.webp")]'>
            <div className="flex flex-col p-[350px] tracking-widest">
              <p className="text-[23px]">Men Collection 2018</p>
              <h2 className="text-[50px] uppercase">new arrivals</h2>
              <div>
                <Link to={"/add"}>
                  <button className="bg-blue-500 hover:bg-blue-700 mt-[30px] transition duration-300 text-white font-bold py-3 px-[35px] rounded-full uppercase">
                    shop now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
