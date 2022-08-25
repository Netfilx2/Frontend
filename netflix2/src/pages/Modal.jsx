import React from "react";
import styled from "styled-components";
import "./Modal.css";
import { BsFillPlayFill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { __addLike } from "../redux/modules/Like";
import { useDispatch } from "react-redux";

function Modal({ closeModal, x }) {
  const dispatch = useDispatch();

  const changeLike = () => {
    dispatch(__addLike({}));
  };

  console.log(x);
  return (
    <ModalBox>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="imgbox">
            <div className="button-wrap">
              <button
                onClick={() => closeModal(false)}
                className="titleCloseBtn"
              >
                {" "}
                x{" "}
              </button>
            </div>
            <img
              src={x.backdrop_path}
              style={{ width: "100%", height: "100%" }}
            ></img>
            <button className="bannerbutton3">
              재생 <BsFillPlayFill color="black" className="bannericon3" />
            </button>

            <BiLike
              className="bannericon4"
              color="white"
              onClick={changeLike}
            ></BiLike>
            <div className="banner-fadeBottom2"></div>
          </div>
          <p className="Modaltitle">{x.title}</p>
          <p className="Modaloverview">{x.overview}</p>
          <p className="Modalgenre">장르:{x.genre}</p>
          <p></p>
          <div class="modal-backdrop"></div>
        </div>
      </div>
    </ModalBox>
  );
}

export default Modal;

const ModalBox = styled.div`
  position: sticky;
  top: 0;
  width: 1000px;
  height: 1000px;
  /* z-index: 2; */
  /* positoin static relative absolute fixed 을 지정해줘야만 사용가능 */
  background-color: rgba(0, 0, 0, 0.4);
`;
