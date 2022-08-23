// redux
import { useSelector } from "react-redux";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import "../pages/Row.css";

//React Alice Carousel
import "react-alice-carousel/lib/alice-carousel.css";

export function Row({ dataList, category }) {
  const { movie } = useSelector((state) => state.movie);

  const dispatch = useDispatch();
  const dataMovie = movie.datainfo;

  return (
    <Fragment>
      {dataList.map((x) => {
        return (
          <Fragment key={x.id}>
            <img className="row_poster" src={x.backdrop_path} />
          </Fragment>
        );
      })}
    </Fragment>
  );
}

export default Row;
