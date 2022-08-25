import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../shared/Header.css";
import imglogo from "../shared/img/파랑아이콘.png";

export function Header() {
  // HEADER
  const navigate = useNavigate();
  const [loginIcon, setIcon] = useState(false);
  const [show, handleShow] = useState(false);
  useEffect(() => {
    setIcon(!!localStorage.getItem("Token") ? true : false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
          href="/"
        ></img>
        <img
          className="nav_avatar"
          src={imglogo}
          alt="Netflix Logo"
          onClick={() => navigate("/profile")}
        ></img>
        <div className="logoall">
          <LogoDIV>
            <Text href="/Movies">홈</Text>
          </LogoDIV>
          <LogoDIV>
            <Text href="#">시리즈</Text>
          </LogoDIV>
          <LogoDIV>
            <Text href="#">영화</Text>
          </LogoDIV>
          <LogoDIV>
            <Text href="#">NEW! 요즘 대세 콘텐츠</Text>
          </LogoDIV>
          <LogoDIV>
            <Text href="#">내가 찜한 콘텐츠</Text>
          </LogoDIV>
          <LogoDIV>
            <Text href="#">언어별로 찾아보기</Text>
          </LogoDIV>
        </div>
      </div>
    </>
  );
}

const LogoDIV = styled.div`
  display: flex;
  margin-left: 32px;
  font-size: 1.3rem;
`;

const Text = styled.a`
  color: #e5e5e5;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  display: flex;
`;

export default Header;
