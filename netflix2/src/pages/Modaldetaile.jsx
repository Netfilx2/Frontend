import React, { useState } from "react";
import "./Row.css";
import Modal from "./Modal";

const Modaldetail = ({ x }) => {
  const [movieModal, setmovieModal] = useState(false);
  return (
    <>
      <div>
        <img
          className="row_poster"
          src={x.backdrop_path}
          onClick={() => setmovieModal(true)}
        />
      </div>
      <div>{movieModal && <Modal closeModal={setmovieModal} x={x} />}</div>
    </>
  );
};

export default Modaldetail;
