// redux
import React, { useState, Fragment } from "react";
import "../pages/Row.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Modaldetaile from "./Modaldetaile";

export function Row({ dataList }) {
  const [movieModal, setmovieModal] = useState(false);
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={6}
      >
        {dataList.map((x) => {
          return (
            <Fragment key={x.id}>
              <SwiperSlide
                key={x.id}
                id={x.id}
                onClick={() => {
                  setmovieModal(true);
                }}
              >
                <Modaldetaile x={x} />
              </SwiperSlide>
            </Fragment>
          );
        })}
      </Swiper>
    </>
  );
}

export default Row;
