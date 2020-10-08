import React from "react";

import SwiperCore, { EffectCoverflow, Navigation, Pagination , Autoplay} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import "./Swiper.scss";
import slikaVest from "../../../assets/images/vest.png";

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Autoplay]);

const swiper = (props) => {
  const vesti = props.vesti.map((vest) => (
    <SwiperSlide className="Slide">
      <div className="image">
        <img src={slikaVest} alt="vest" />
        {/* <h1>Poznati psihoterapeut savetuje roditelje kako da na najbolji nacin objasne detetu da se razvode</h1> */}
      </div>
    </SwiperSlide>
  ));

  return (
    <React.Fragment>
      <Swiper
        navigation
        pagination={{ clickable: true, 
            el: ".pagination-swiper"
         }}
        effect="coverflow"
        spaceBetween={350}
        slidesPerView={1.4}
        autoplay={{
          delay:4500,
          disableOnInteraction:false
        }}
        className="Swiper"
        centeredSlides
        loop="true"
        coverflowEffect={{
          rotate: 0,
          stretch: 200,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {vesti}
      </Swiper>
      <div className="pagination-swiper" />
    </React.Fragment>
  );
};

export default swiper;
