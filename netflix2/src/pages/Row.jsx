// redux
import { useSelector } from "react-redux";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import "../pages/Row.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export function Row({ dataList, category }) {
  const { movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const dataMovie = movie.datainfo;

  //React Alice Carousel
  const handleDragStart = (e) => e.preventDefault();

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
      slidesPerView={6}
    >
      {dataList.map((x) => {
        return (
          <>
            <SwiperSlide key={x.id}>
              <img className="row_poster" src={x.backdrop_path} />
              {/* <MdOutlineArrowForwardIos className="icon" /> */}
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
}

export default Row;
