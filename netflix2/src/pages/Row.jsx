// redux
import { useSelector } from "react-redux";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import "../pages/Row.css";

//React Alice Carousel
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

export function Row({ dataList, category }) {
  const { movie } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const dataMovie = movie.datainfo;

  //React Alice Carousel
  const handleDragStart = (e) => e.preventDefault();

  return (
    <AliceCarousel>
      {dataList.map((x) => {
        return (
          <Fragment key={x.id}>
            <img className="row_poster" src={x.backdrop_path} />
          </Fragment>
        );
      })}
    </AliceCarousel>
  );
}

export default Row;
