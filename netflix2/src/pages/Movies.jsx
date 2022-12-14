import styled from "styled-components";
import img from "../shared/img/지옥.png";
import img2 from "../shared/img/지옥2.png";
import "../pages/Movies.css";
import { BsFillPlayFill } from "react-icons/bs";
import { RiInformationLine } from "react-icons/ri";

//redux
import { __Getmovie } from "../redux/modules/movie";
import { useSelector } from "react-redux";
import React, { useEffect, useState, Fragment } from "react";
import { useDispatch } from "react-redux";

import { Row } from "./Row";
import useWindowSize from "../shared/WindowSize";

export function Movies() {
  const { movie, loaded } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const dataMovie = movie.datainfo;
  const namee = useSelector((state) => state);

  useEffect(() => {
    dispatch(__Getmovie());
  }, [dispatch]);

  return (
    <>
      <HeaderWrap>
        <div className="banner_contents">
          <img src={img2} className="titlelogo" alt="React" />
          <div className="banner_description">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                position: "absolute",
                left: "-15px",
                top: "-70px",
                zIndex: "-1",
                // border: "10px red solid",
                margin: "0",
                textAlign: "center",
                transform: "scale(1.1)",
              }}
            >
              {/* <video
              src={video}
              autoPlay
              muted
              loop
              style={{ width: "100vw", height: "100wh" }}
            /> */}
              {/* <div>
                <object
                  type="text/html"
                  width={useWindowSize().width - 50}
                  height={useWindowSize().height}
                  data="https://www.youtube.com/embed/WXkN6awcSG0?autoplay=1&mute=1&controls=0&end=110"
                  allowFullScreen
                ></object>
              </div> */}
              {/* <video autoPlay>
              <source src="https://www.youtube.com/embed/WXkN6awcSG0" />
            </video> */}
              <iframe
                width={useWindowSize().width}
                height={useWindowSize().height}
                src="https://www.youtube.com/embed/WXkN6awcSG0?autoplay=1&mute=1&controls=0&end=110"
                // &loop=1&playlist=WXkN6awcSG0&modestbranding=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p className="banner_p">
              어느 날 기이한 존재로부터 지옥행을 선고받은 사람들. 충격과
              두려움에 휩싸인 도시에 대혼란의 시대가 도래한다. 신의 심판을
              외치며 세를 확장하려는 종교단체와 진실을 파헤치는 자들의 이야기.
            </p>
          </div>
          <div className="button12">
            <div className="bannerbuttonmain">
              <button className="bannerbutton1">재생</button>
              <BsFillPlayFill color="black" className="bannericon" />
            </div>
            <div className="bannerbuttonmain2">
              <button className="bannerbutton2">상세정보</button>
              <RiInformationLine color="white" className="bannericon2" />
            </div>
          </div>
        </div>
        <div className="banner-fadeBottom"></div>
      </HeaderWrap>

      <div className="row">
        <div className="row_posters">
          {loaded ? (
            dataMovie.map((movie, idx) => {
              return (
                <Fragment key={idx}>
                  <div key={movie.smallCategory}>
                    <h2 className="movietitle"> {movie.smallCategory}</h2>
                    <Row
                      dataList={movie.dataList}
                      category={movie.smallCategory}
                    ></Row>
                  </div>
                </Fragment>
              );
            })
          ) : (
            // 스켈레톤
            <div>Loding…</div>

            //스켈레톤ui을 넣는 곳
          )}
        </div>
      </div>
    </>
  );
}

const HeaderWrap = styled.div`
  /* position: absolute; */
  background-size: cover;
  background-position: 50%;
  /* background-image: url(${img}); */
  height: 1300px;
  width: 100%;
  transition: opacity 0.4s cubic-bezier(0.665, 0.235, 0.265, 0.8) 0s;
`;

export default Movies;
