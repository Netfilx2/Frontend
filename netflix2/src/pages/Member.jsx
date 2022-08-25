import React, { useCallback, useEffect, useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";

import { __postMember } from "../redux/modules/member";
import styled from "styled-components";

export function Member() {
  const [memberId, setMemberId] = useState("");
  const [memberPassword, setMemberPassword] = useState("");
  const [memberPasswordCheck, setMemberPasswordCheck] = useState("");
  const [memberCheck, setMemberCheck] = useState(false);
  const [memberEmail, setMemberEmail] = useState("");

  //소문자/숫자 포함 8글자 이상
  const memberExp = /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

  const dispatch = useDispatch();

  const memberIdRef = useRef();
  const memberIconRef = useRef();
  const memberPW = useRef();
  const memberEmailRef = useRef();

  const newMember = {
    memberId,
    memberPassword,
    memberPasswordCheck,
    memberCheck,
    memberEmail,
  };

  const checkmemberId = useCallback(
    debounce((memberId) => {
      if (memberExp.test(memberId) === false) {
        memberIdRef.current.innerText = "아이디 형식에 맞지 않습니다";
        setMemberCheck(false);
      } else {
        memberIdRef.current.innerText = "사용가능한 아이디입니다";
        setMemberCheck(true);
      }
    }, 500),
    []
  );

  useEffect(() => {
    if (memberId !== "") memberIconRef.current.style.display = "block";
    else memberIconRef.current.style.display = "none";
    if (memberPasswordCheck !== "") memberPW.current.style.display = "block";
    else memberPW.current.style.display = "none";
  }, [memberId, memberPasswordCheck]);

  useEffect(() => {
    if (memberPassword === "" && memberPasswordCheck === "") {
    } else if (memberPassword === "") {
      memberPW.current.style.color = "";
      memberPW.current.innerText = "";
    } else if (memberPasswordCheck === "") {
      memberPW.current.style.color = "";
    } else {
      if (memberPassword !== memberPasswordCheck) {
        memberPW.current.innerText = "입력한 비밀번호와 다릅니다";
      } else {
        memberPW.current.innerText = "비밀번호가 일치합니다";
      }
    }
  }, [memberPassword, memberPasswordCheck]);

  useEffect(() => {
    if (memberId !== "") {
      checkmemberId(memberId);
    } else {
      memberIdRef.current.innerText = "";
    }
  }, [checkmemberId, memberId]);

  const onsubmitHandler = (event) => {
    event.preventDefault();
    if (memberPassword !== memberPasswordCheck) {
      memberPW.current.innerText = "입력한 비밀번호와 다릅니다";
    } else {
      dispatch(__postMember({ newMember }));
    }
  };

  return (
    <div>
      <SinupBody>
        <SignUpCardDiv>
          <SignUpCardh2>
            <SinupStorong>회원가입</SinupStorong>
          </SignUpCardh2>
          <form onSubmit={(e) => onsubmitHandler(e)}>
            <SignUpInputDiv>
              <SignUpCardinput
                type="text"
                placeholder="닉네임을 입력하세요."
                value={memberId}
                onChange={(event) => {
                  setMemberId(event.target.value);
                }}
                required
              />
            </SignUpInputDiv>

            <SignUpBoxInputIcon ref={memberIdRef}>
              아이디를 확인해주세요
            </SignUpBoxInputIcon>

            <SignUpCardP>영어랑 숫자 포함 8글자로 작성해주세요</SignUpCardP>
            <SignUpBoxInputIcon ref={memberIconRef}></SignUpBoxInputIcon>
            <SignUpInputDiv>
              <SignUpCardinput
                type="password"
                placeholder="비밀번호를 입력하세요."
                value={memberPassword}
                onChange={(event) => {
                  setMemberPassword(event.target.value);
                }}
                required
              />
            </SignUpInputDiv>

            <SignUpInputDiv>
              <SignUpCardinput
                type="password"
                placeholder="비밀번호를 다시 입력해주세요."
                value={memberPasswordCheck}
                onChange={(event) => {
                  setMemberPasswordCheck(event.target.value);
                }}
                required
              />
            </SignUpInputDiv>

            <SignUpBoxInputIcon ref={memberPW}></SignUpBoxInputIcon>

            <SignUpCardinput
              type="email"
              placeholder="이메일을 입력하세요."
              value={memberEmail}
              onChange={(event) => {
                setMemberEmail(event.target.value);
              }}
              required
              ref={memberEmailRef}
            />
            <SignUpDiv>
              <SignInformBTM text={"submit"} type={"submit"}>
                회원가입
              </SignInformBTM>
            </SignUpDiv>
          </form>
          <SignUph3>
            <p>
              이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
              확인합니다.
            </p>
            <Button>자세히 알아보기</Button>
          </SignUph3>
        </SignUpCardDiv>
      </SinupBody>
    </div>
  );
}

export const body = styled.body`
  margin: 0;
`;

export const SignInformBTM = styled.button`
  border: none;
  background: #e50914;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  border-radius: 6px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/
  align-items: center;
  justify-content: center;
  padding: 14px;
  width: 100%;
  height: 50px;
  margin-top: 10px;
`;

export const SignInDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/
  margin-top: 50px;
`;
export const SignUpBoxInputIcon = styled.div`
  right: 10px;
  top: 50px;
  transform: translateY(-15px);
  font-size: 18px;
  margin-top: 8%;
  color: rgb(219, 223, 253);
  &:hover {
    cursor: pointer;
  }
`;

export const SinupBody = styled.section`
  height: auto;
  overflow-x: auto;
  width: 100%;
  padding: 10% 0 10%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background: url("https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/358a7f7a-b41d-4b75-b654-a3783749e0ef/KR-ko-20220815-popsignuptwoweeks-perspective_alpha_website_medium.jpg")
      no-repeat center center/cover,
    rgba(0, 0, 0, 0.5);
  background-blend-mode: multiply;
  background-attachment: fixed;
`;

export const SinupStorong = styled.strong`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  /* margin-bottom: 28px; */
`;

export const SignUpCardDiv = styled.div`
  /* max-width: 500px; */

  width: 350px;
  height: 600px;
  margin: 0 auto;
  padding: 60px;
  border-radius: 6px;
  background-color: #9699a2;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 2px 2px 20px rgba(0, 0, 2, 0.3);
  color: rgb(219, 223, 253);
`;

export const SignUpCardh2 = styled.h2`
  font-size: 25px;
`;

export const SignUpCardh2strong = styled.h2`
  font-weight: 700;
  color: rgb(26, 37, 112);
`;

export const SignUpCardform = styled.form`
  padding: 20px 22px;
`;

export const SignUpCardinput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 8px;
  margin-bottom: 15px;
  padding: 26px;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  background-color: #333;
  border: 0 solid black;
`;

export const SignUpLogin = styled.div`
  width: 100%;
  margin-top: 9px;
  margin-bottom: 15px;
  margin-left: 10%;
  padding: 15px;
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  color: rgb(219, 223, 253);
  text-decoration: none;
`;

export const SignUpformBTM = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
  size: 10px;
  width: 100px;
  color: #b1bce6;
  font-size: 18px;
`;
export const SignUpCardP = styled.p`
  font-size: 12px;
  color: #8c8c8c;
  text-align: center;
  margin-top: 2px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;
export const SignUpDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
`;
export const SignUpInputDiv = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  box-shadow: none;
  border: none;
  margin-bottom: 10px;
`;

const SignUph3 = styled.div`
  margin-top: 60px;
  color: #8c8c8c;
  font-size: 13px;
`;
const Button = styled.div`
  background-color: transparent;
  border: none;
  color: #0071eb;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
`;

export default Member;
