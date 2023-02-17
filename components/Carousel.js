import React, { useState } from "react";
import styles from "../styles/componentStyles/Carousel.module.scss";
import slide1 from "../public/images/slide1.jpg";
import slide2 from "../public/images/slide2.jpg";
import slide3 from "../public/images/slide3.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, EffectFade } from "swiper";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  EffectFade,
} from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { display } from "@mui/system";

function Carousel() {
  const [slides, setSlides] = useState([slide1, slide2, slide3]);
  SwiperCore.use([Autoplay]);

  return (
    <>
      <div className={styles.main} style={{ display: "block", zIndex: "0" }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectFade]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {slides.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={item}
                  width={100}
                  height={100}
                  alt={`slide${index}`}
                  style={{ width: "100%", height: "100%", display: "block" }}
                  priority
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;
