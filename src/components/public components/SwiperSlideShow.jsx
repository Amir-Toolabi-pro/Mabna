import React from 'react';

// import Slider from "react-slick";


import "../../styles/SwiperSlideShow.css"
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination, Navigation, Autoplay
} from 'swiper/core';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// SwiperCore.use([Pagination, Navigation, Autoplay]);
SwiperCore.use([Autoplay]);
const SwiperSlideShow = () => {

  return (
    <>





      <div className='slidshow_content'>
        <h3>سه دهه همراهی با بزرگان</h3>
        <div className="slid_holder" dir='rtl'>

          <Swiper
            slidesPerView={7}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 0 }}
            speed={3000}
            // pagination={{
            //   "clickable": true
            // }}
            // dir='rtl'
            // navigation={{
            //   nextEl: '.next',
            //   prevEl: '.prev',
            // }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/PetroshimiKhaligFars.5f662c38.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/KargozariBankMeli.c768a6f8.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/BankDey.fbdc2315.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/BankGardeshgari.52f5cd3f.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/ArmanEghtesad.6804efb4.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/AminSahin.94f14201.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/SabadgardanHadaf.dc6ab05d.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/NoavaranAmin.2e239612.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/BazarganiMeayar.00400e6d.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/kargozarriBazarganiHadaf.a29a0d26.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/KargozariBankAnsar.347aa645.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/BankMehr.55933edb.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/Bahman.201e4faf.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/AtiyeParis.e4cbbc1e.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/AtiyeMaskan.98263f51.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/Karizma.e3726039.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/TaminSarmayeKardan.50f50512.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://mabnadp.com/_next/static/media/KargozariBankMeli.c768a6f8.svg" alt="" />
            </SwiperSlide>
          </Swiper>
          {/* <button className='next'>بعدی</button>
            <button className='prev'>قبلی</button> */}
        </div>

      </div>
    </>
  );
}

export default SwiperSlideShow;