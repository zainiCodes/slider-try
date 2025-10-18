import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./StickerSlider.css";
import img from "../assets/Picture1.jpg";

const StickerSlider = () => {
  const slides = [
    {
      bg: "#ffe6f0",
    },
    {
      bg: "#ffebf5",
    },
    {
      bg: "#fff3fa",
    },
  ];

  return (
    <div className="slider-container">
      <p className="review-text">★★★★★ Excellent | 2,943 Customer reviews</p>
      <h2 className="slider-heading">
        Boost mood, focus, sleep & more with our Natural Stickers
      </h2>

      <div className="swiper-wrapper-container">
        <div className="blur-overlay left"></div>
        <div className="blur-overlay right"></div>

        <Swiper
          modules={[Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          className="custom-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="custom-slide"
              style={{ backgroundColor: "#fff" }}
            >
              <img src={img} alt={slide.title} className="slide-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="explore-btn">EXPLORE NATPAT STICKERS</button>
    </div>
  );
};

export default StickerSlider;
