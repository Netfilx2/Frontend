import { useState } from "react";
import styled from "styled-components";
import video from "../shared/video/지옥.mp4";

const HoverModal = ({ hover }) => {
  console.log(hover);
  let hover2 = hover;
  return (
    <ModalBox opacity={hover}>
      {/* <video src={video} style={{ width: "30px", height: "22px" }} /> */}
      <h1>모달입니다</h1>
      <div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </ModalBox>
  );
};

export default HoverModal;

const ModalBox = styled.div`
  width: 500px;
  height: 500px;

  opacity: ${(props) => (props.opacity ? 1 : 0)};
  background-color: #444;
  color: #fff;
  position: absolute;
  left: 40%;
  z-index: 10;
  transition: opacity 200ms;
`;
